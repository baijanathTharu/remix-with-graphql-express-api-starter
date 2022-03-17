import { createServer } from '@graphql-yoga/node';
import { applicationSchema } from './modules';
import { verifyToken } from './modules/auth/utils';

export const graphQLServer = createServer({
  maskedErrors: false,
  schema: applicationSchema,
  context: async ({ request }) => {
    const accessToken = request.headers.get('access-token') || '';

    const { userId } = await verifyToken({ token: accessToken.split(' ')[1] });

    return { request, userId };
  },
});
