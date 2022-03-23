import { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';
import { getUserById } from '~/express-app/src/graphql/modules/auth/services';
import { verifyToken } from '~/express-app/src/graphql/modules/auth/utils';

export const loader: LoaderFunction = async ({ request }) => {
  const token = request.headers.get('Authorization')?.split(' ')[1] as string;

  // TODO: check if token is expired
  const { userId } = await verifyToken({
    token,
  });

  invariant(typeof userId === 'number', 'User id is not found');

  if (!userId) {
    throw new Error('User not authenticated');
  }

  const user = await getUserById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  const { password, ...rest } = user;

  return rest;
};
