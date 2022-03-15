/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace AuthModule {
  interface DefinedFields {
    Mutation: 'signUp' | 'login';
    AuthPayload: 'done';
  };
  
  interface DefinedInputFields {
    SignUpInput: 'email' | 'name' | 'password';
    LoginInput: 'email' | 'password';
  };
  
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type AuthPayload = Pick<Types.AuthPayload, DefinedFields['AuthPayload']>;
  export type SignUpInput = Pick<Types.SignUpInput, DefinedInputFields['SignUpInput']>;
  export type LoginInput = Pick<Types.LoginInput, DefinedInputFields['LoginInput']>;
  
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type AuthPayloadResolvers = Pick<Types.AuthPayloadResolvers, DefinedFields['AuthPayload'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Mutation?: MutationResolvers;
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
    AuthPayload?: {
      '*'?: gm.Middleware[];
      done?: gm.Middleware[];
    };
  };
}