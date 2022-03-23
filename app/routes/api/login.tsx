import { ActionFunction, redirect } from 'remix';
import { token } from '~/express-app/src/config';
import {
  createToken,
  loginUser,
} from '~/express-app/src/graphql/modules/auth/services';
import { generateTokens } from '~/express-app/src/graphql/modules/auth/utils';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const user = await loginUser({ email, password });

  const { accessToken, refreshToken } = generateTokens({
    userId: user.id,
  });

  // TODO: HANDLE ERROR
  await createToken({
    userId: user.id,
    refreshToken,
  });

  return redirect('/', {
    headers: {
      authorization: `Bearer ${accessToken}`,
      'Set-Cookie': `refresh-token=Bearer ${refreshToken}; HttpOnly; Path=/; Max-Age=${token.REFRESH_TOKEN_AGE};`,
    },
  });
};
