import { GraphQLClient } from 'graphql-request';

const END_POINT = process.env.END_POINT as string;

export const graphQLClient = new GraphQLClient(END_POINT);
