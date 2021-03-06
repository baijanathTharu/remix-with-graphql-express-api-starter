/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace UserModule {
  interface DefinedFields {
    User: 'id' | 'name' | 'email' | 'password';
    UserWithoutPassword: 'id' | 'name' | 'email';
    Query: 'users';
  };
  
  export type User = Pick<Types.User, DefinedFields['User']>;
  export type UserWithoutPassword = Pick<Types.UserWithoutPassword, DefinedFields['UserWithoutPassword']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>;
  export type UserWithoutPasswordResolvers = Pick<Types.UserWithoutPasswordResolvers, DefinedFields['UserWithoutPassword'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    User?: UserResolvers;
    UserWithoutPassword?: UserWithoutPasswordResolvers;
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    User?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      email?: gm.Middleware[];
      password?: gm.Middleware[];
    };
    UserWithoutPassword?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      email?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      users?: gm.Middleware[];
    };
  };
}