import { AuthModule } from '../generated-types/module-types';
import { createUser, loginUser } from '../services';
import { generateTokens } from '../utils';

export const authResolvers: AuthModule.Resolvers = {
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

      return {
        done: true,
        accessToken,
        refreshToken,
      };
    },
  },
};
