/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace AuthModule {
  interface DefinedFields {
    Mutation: 'signUp' | 'login';
    Query: 'newToken';
    AuthPayload: 'done' | 'accessToken' | 'refreshToken';
  };
  
  interface DefinedInputFields {
    SignUpInput: 'email' | 'name' | 'password';
    LoginInput: 'email' | 'password';
  };
  
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type AuthPayload = Pick<Types.AuthPayload, DefinedFields['AuthPayload']>;
  export type SignUpInput = Pick<Types.SignUpInput, DefinedInputFields['SignUpInput']>;
  export type LoginInput = Pick<Types.LoginInput, DefinedInputFields['LoginInput']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type AuthPayloadResolvers = Pick<Types.AuthPayloadResolvers, DefinedFields['AuthPayload'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Mutation?: MutationResolvers;
    Query?: QueryResolvers;
    AuthPayload?: AuthPayloadResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      signUp?: gm.Middleware[];
      login?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      newToken?: gm.Middleware[];
    };
    AuthPayload?: {
      '*'?: gm.Middleware[];
      done?: gm.Middleware[];
      accessToken?: gm.Middleware[];
      refreshToken?: gm.Middleware[];
    };
  };
}