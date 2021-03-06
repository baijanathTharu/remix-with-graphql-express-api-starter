import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import { createRequestHandler } from '@remix-run/express';
import * as serverBuild from '@remix-run/dev/server-build';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import cookieParser from 'cookie-parser';
import { applicationSchema } from '~/express-app/src/graphql/modules';
import { verifyToken } from '~/express-app/src/graphql/modules/auth/utils';

const port = process.env.PORT || 5000;

async function startApolloServer() {
  const app: Application = express();

  app.use('/rest', (req: Request, res: Response) => {
    res.status(200).send({ data: 'Hello World!' });
  });

  // cookie parser
  app.use(cookieParser());

  app.use(compression());

  // http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
  app.disable('x-powered-by');

  // Remix fingerprints its assets so we can cache forever.
  app.use(
    '/build',
    express.static('public/build', { immutable: true, maxAge: '1y' })
  );

  // Everything else (like favicon.ico) is cached for an hour. You may want to be
  // more aggressive with this caching.
  app.use(express.static('public/build', { maxAge: '1h' }));

  app.use(morgan('tiny'));

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema: applicationSchema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: async ({ req, res }) => {
      const accessToken =
        req.cookies['access-token'] ||
        (req.headers['access-token'] as string) ||
        '';

      const { userId } = await verifyToken({
        token: accessToken.split(' ')[1],
      });

      return {
        req,
        res,
        userId,
      };
    },
  });
  await server.start();
  server.applyMiddleware({ app });

  app.all(
    '*',
    createRequestHandler({
      build: serverBuild,
      mode: process.env.NODE_ENV,
    })
  );

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `???? Server ready at http://localhost:${port}${server.graphqlPath}`
  );
}

startApolloServer().catch((err) => {
  console.error(err);
  process.exit(1);
});
