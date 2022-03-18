## Remix with Graphql

1. This is a remix starter template for express and graphql.
2. This user graphql-modules for making modular graphql apis.
3. Graphql code generator is also setup for type safety.
4. Basic Authentication with access token and refresh token for the graphql api.

## Getting started

1. Clone this repo.

```sh
git clone git@github.com:baijanathTharu/remix-with-graphql-express-api-starter.git
```

2. Install the dependencies

```sh
yarn install
```

3. Setup a database for prisma and add the database url in .env

```
DATABASE_URL=mysql://<usernmae>:<password>@localhost:3306/<db_name>
```

3. Run the prisma migration

```sh
yarn prisma migrate dev
```

4. Start the dev server

```sh
yarn dev
```

5. Build for deployment.

```sh
yarn build
```

6. Run the server in production

```sh
node build/index.js
```
