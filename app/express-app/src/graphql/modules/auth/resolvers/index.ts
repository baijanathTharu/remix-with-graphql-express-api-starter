import { AuthModule } from '../generated-types/module-types';
import {
  createToken,
  createUser,
  isTokenRevoked,
  loginUser,
  revokeTokenInDb,
} from '../services';
import { generateTokens, verifyToken } from '../utils';

export const authResolvers: AuthModule.Resolvers = {
  Query: {
    newToken: async (_, _arg, { request }) => {
      // verfify refresh token
      const refreshTokenWithBearer = request.headers.get('refresh-token') || '';
      const oldToken = refreshTokenWithBearer.split(' ')[1];

      // find if the refresh token is revoked
      const isRevoked = await isTokenRevoked(oldToken);
      if (isRevoked) {
        throw new Error('Refresh token is revoked');
      }

      const decodedRefreshToken = await verifyToken({
        token: oldToken,
      });

      if (!decodedRefreshToken.userId) {
        throw new Error('Invalid refresh token');
      }

      // generate new tokens
      const { accessToken, refreshToken: newRefreshToken } = generateTokens({
        userId: decodedRefreshToken.userId,
      });

      // save new refresh token to db
      const newToken = await createToken({
        userId: decodedRefreshToken.userId,
        refreshToken: newRefreshToken,
      });

      // revoken old token
      await revokeTokenInDb({ token: oldToken, isRevokedBy: newToken.id });

      return {
        done: true,
        accessToken,
        refreshToken: newRefreshToken,
      };
    },
  },
  Mutation: {
    signUp: async (_, { signUpInput }) => {
      try {
        const created = await createUser(signUpInput);

        if (!created) {
          throw new Error('Something went wrong while saving data');
        }

        return {
          done: true,
        };
      } catch (e) {
        // @ts-ignore
        if (e.code === 'P2002') {
          throw new Error('User already exists');
        }

        throw new Error(e as string);
      }
    },
    login: async (_, { loginInput }) => {
      const user = await loginUser(loginInput);

      const { accessToken, refreshToken } = generateTokens({ userId: user.id });

      await createToken({
        userId: user.id,
        refreshToken,
      });

      return {
        done: true,
        accessToken,
        refreshToken,
      };
    },
  },
};
