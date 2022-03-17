import { AuthModule } from '../generated-types/module-types';
import { createToken, createUser, loginUser } from '../services';
import { generateTokens, verifyToken } from '../utils';

export const authResolvers: AuthModule.Resolvers = {
  Query: {
    newToken: async (_, _arg, { request }) => {
      // verfify refresh token
      const refreshToken = request.headers.get('refresh-token') || '';
      const decodedRefreshToken = await verifyToken({
        token: refreshToken.split(' ')[1],
      });

      if (!decodedRefreshToken.userId) {
        throw new Error('Invalid refresh token');
      }

      // generate new tokens
      const { accessToken, refreshToken: newRefreshToken } = generateTokens({
        userId: decodedRefreshToken.userId,
      });

      // save new refresh token to db
      createToken({
        userId: decodedRefreshToken.userId,
        refreshToken: newRefreshToken,
      });

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
