var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// app/express-app/src/index.ts
init_react();
var import_config2 = require("dotenv/config");
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// app/express-app/src/graphql/graphqlServer.ts
init_react();
var import_node = require("@graphql-yoga/node");

// app/express-app/src/graphql/modules/app.ts
init_react();
var import_graphql_modules5 = require("graphql-modules");

// app/express-app/src/graphql/modules/auth/auth.module.ts
init_react();
var import_graphql_modules2 = require("graphql-modules");

// app/express-app/src/graphql/modules/auth/resolvers/index.ts
init_react();

// app/express-app/src/graphql/modules/auth/services/index.ts
init_react();

// app/express-app/src/lib/db.ts
init_react();
var import_client = require("@prisma/client");
var db = global.prisma || new import_client.PrismaClient();
if (true)
  global.prisma = db;

// app/express-app/src/graphql/modules/auth/utils.ts
init_react();
var import_config = require("dotenv/config");
var import_bcrypt = require("bcrypt");
var import_jsonwebtoken = require("jsonwebtoken");
var saltRounds = Number(process.env.SALT_ROUNDS) || 8;
var tokenSecret = process.env.TOKEN_SECRET || "secret";
function hashPassword(password) {
  return new Promise((resolve, reject) => {
    (0, import_bcrypt.genSalt)(saltRounds, (err, salt) => {
      if (err) {
        reject([err, null]);
      }
      (0, import_bcrypt.hash)(password, salt, (hashErr, hashedPassword) => {
        if (hashErr) {
          reject([hashErr, null]);
        }
        resolve([null, hashedPassword]);
      });
    });
  });
}
function comparePassword({
  password,
  hashedPassword
}) {
  return new Promise((resolve, reject) => {
    (0, import_bcrypt.compare)(password, hashedPassword, (err, result) => {
      if (err) {
        reject([err, null]);
      }
      resolve([null, result]);
    });
  });
}
function generateTokens({ userId }) {
  const accessToken = (0, import_jsonwebtoken.sign)({ userId }, tokenSecret, {
    expiresIn: "15m"
  });
  const refreshToken = (0, import_jsonwebtoken.sign)({ userId }, tokenSecret, {
    expiresIn: "7d"
  });
  return {
    accessToken,
    refreshToken
  };
}

// app/express-app/src/graphql/modules/auth/services/index.ts
async function createUser(createUserInput) {
  if (!createUserInput) {
    throw new Error("createUserInput is required");
  }
  const { name, email, password } = createUserInput;
  const [hashErr, hashedPassword] = await hashPassword(password);
  if (hashErr || !hashedPassword) {
    throw new Error("Something went wrong while saving data");
  }
  return db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });
}
async function loginUser(loginInput) {
  if (!loginInput) {
    throw new Error("loginInput is required");
  }
  const { email, password } = loginInput;
  const user = await db.user.findUnique({
    where: { email }
  });
  if (!user) {
    throw new Error("User not found");
  }
  const [err, isCorrect] = await comparePassword({
    password,
    hashedPassword: user.password
  });
  if (err) {
    throw new Error("Something went wrong while logging in");
  }
  if (!isCorrect) {
    throw new Error("Wrong password or email");
  }
  return user;
}

// app/express-app/src/graphql/modules/auth/resolvers/index.ts
var authResolvers = {
  Mutation: {
    signUp: async (_, { signUpInput }) => {
      try {
        const created = await createUser(signUpInput);
        if (!created) {
          throw new Error("Something went wrong while saving data");
        }
        return {
          done: true
        };
      } catch (e) {
        if (e.code === "P2002") {
          throw new Error("User already exists");
        }
        throw new Error(e);
      }
    },
    login: async (_, { loginInput }) => {
      const user = await loginUser(loginInput);
      const { accessToken, refreshToken } = generateTokens({ userId: user.id });
      return {
        done: true,
        accessToken,
        refreshToken
      };
    }
  }
};

// app/express-app/src/graphql/modules/auth/typedefs/auth.ts
init_react();
var import_graphql_modules = require("graphql-modules");
var authTypedefs = import_graphql_modules.gql`
  type Mutation {
    signUp(signUpInput: SignUpInput): AuthPayload!
    login(loginInput: LoginInput): AuthPayload!
  }

  input SignUpInput {
    email: String!
    name: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    done: Boolean!
    accessToken: String
    refreshToken: String
  }
`;

// app/express-app/src/graphql/modules/auth/auth.module.ts
var AuthModule = (0, import_graphql_modules2.createModule)({
  id: "auth",
  dirname: __dirname,
  typeDefs: authTypedefs,
  resolvers: authResolvers
});

// app/express-app/src/graphql/modules/user/user.module.ts
init_react();
var import_graphql_modules4 = require("graphql-modules");

// app/express-app/src/graphql/modules/user/resolvers/index.ts
init_react();
var users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@test.com",
    password: "123456"
  }
];
var userResolvers = {
  Query: {
    users: () => users
  }
};

// app/express-app/src/graphql/modules/user/typedefs/user.ts
init_react();
var import_graphql_modules3 = require("graphql-modules");
var userTypedefs = import_graphql_modules3.gql`
  type User {
    id: Int!
    name: String
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
  }
`;

// app/express-app/src/graphql/modules/user/user.module.ts
var UserModule = (0, import_graphql_modules4.createModule)({
  id: "user",
  dirname: __dirname,
  typeDefs: userTypedefs,
  resolvers: userResolvers
});

// app/express-app/src/graphql/modules/app.ts
var application = (0, import_graphql_modules5.createApplication)({
  modules: [UserModule, AuthModule]
});
var applicationSchema = application.createSchemaForApollo();

// app/express-app/src/graphql/graphqlServer.ts
var graphQLServer = (0, import_node.createServer)({
  maskedErrors: false,
  schema: applicationSchema
});

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/baijanath/learnings/projects-2022/express/remix-with-express/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/home/baijanath/learnings/projects-2022/express/remix-with-express/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
init_react();
var import_react_router_dom = require("react-router-dom");
function About() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "About Page"), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "/"
  }, "Go to home"));
}

// route:/home/baijanath/learnings/projects-2022/express/remix-with-express/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_react_router_dom2 = require("react-router-dom");
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Home Page"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "/about"
  }, "Go to About")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "http://localhost:4000/graphql"
  }, "Graphql Api")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "092f607e", "entry": { "module": "/build/entry.client-2DLKEI24.js", "imports": ["/build/_shared/chunk-OMW3EQUY.js", "/build/_shared/chunk-HQ6L5TK3.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-7TPZ5UFC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-FMW2TA74.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-COMTXZ44.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-092F607E.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// app/express-app/src/index.ts
var app = (0, import_express.default)();
var port = process.env.PORT || 5e3;
app.use("/rest", (req, res) => {
  res.status(200).send({ data: "Hello World!" });
});
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("../../public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.use("/graphql", graphQLServer.requestListener);
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9hcHAvZXhwcmVzcy1hcHAvc3JjL2luZGV4LnRzIiwgIi4uL2FwcC9leHByZXNzLWFwcC9zcmMvZ3JhcGhxbC9ncmFwaHFsU2VydmVyLnRzIiwgIi4uL2FwcC9leHByZXNzLWFwcC9zcmMvZ3JhcGhxbC9tb2R1bGVzL2FwcC50cyIsICIuLi9hcHAvZXhwcmVzcy1hcHAvc3JjL2dyYXBocWwvbW9kdWxlcy9hdXRoL2F1dGgubW9kdWxlLnRzIiwgIi4uL2FwcC9leHByZXNzLWFwcC9zcmMvZ3JhcGhxbC9tb2R1bGVzL2F1dGgvcmVzb2x2ZXJzL2luZGV4LnRzIiwgIi4uL2FwcC9leHByZXNzLWFwcC9zcmMvZ3JhcGhxbC9tb2R1bGVzL2F1dGgvc2VydmljZXMvaW5kZXgudHMiLCAiLi4vYXBwL2V4cHJlc3MtYXBwL3NyYy9saWIvZGIudHMiLCAiLi4vYXBwL2V4cHJlc3MtYXBwL3NyYy9ncmFwaHFsL21vZHVsZXMvYXV0aC91dGlscy50cyIsICIuLi9hcHAvZXhwcmVzcy1hcHAvc3JjL2dyYXBocWwvbW9kdWxlcy9hdXRoL3R5cGVkZWZzL2F1dGgudHMiLCAiLi4vYXBwL2V4cHJlc3MtYXBwL3NyYy9ncmFwaHFsL21vZHVsZXMvdXNlci91c2VyLm1vZHVsZS50cyIsICIuLi9hcHAvZXhwcmVzcy1hcHAvc3JjL2dyYXBocWwvbW9kdWxlcy91c2VyL3Jlc29sdmVycy9pbmRleC50cyIsICIuLi9hcHAvZXhwcmVzcy1hcHAvc3JjL2dyYXBocWwvbW9kdWxlcy91c2VyL3R5cGVkZWZzL3VzZXIudHMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvYmFpamFuYXRoL2xlYXJuaW5ncy9wcm9qZWN0cy0yMDIyL2V4cHJlc3MvcmVtaXgtd2l0aC1leHByZXNzL2FwcC9yb290LnRzeCIsICJyb3V0ZTovaG9tZS9iYWlqYW5hdGgvbGVhcm5pbmdzL3Byb2plY3RzLTIwMjIvZXhwcmVzcy9yZW1peC13aXRoLWV4cHJlc3MvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGU6L2hvbWUvYmFpamFuYXRoL2xlYXJuaW5ncy9wcm9qZWN0cy0yMDIyL2V4cHJlc3MvcmVtaXgtd2l0aC1leHByZXNzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5pbXBvcnQgZXhwcmVzcywgeyBBcHBsaWNhdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ0ByZW1peC1ydW4vZXhwcmVzcyc7XG5pbXBvcnQgeyBncmFwaFFMU2VydmVyIH0gZnJvbSAnLi9ncmFwaHFsJztcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCc7XG5cbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwO1xuXG5hcHAudXNlKCcvcmVzdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBkYXRhOiAnSGVsbG8gV29ybGQhJyB9KTtcbn0pO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gICcvYnVpbGQnLFxuICBleHByZXNzLnN0YXRpYygnLi4vLi4vcHVibGljL2J1aWxkJywgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogJzF5JyB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljL2J1aWxkJywgeyBtYXhBZ2U6ICcxaCcgfSkpO1xuXG5hcHAudXNlKG1vcmdhbigndGlueScpKTtcblxuLy8gQmluZCBHcmFwaFFMIFlvZ2EgdG8gYC9ncmFwaHFsYCBlbmRwb2ludFxuLy8gSGVyZSBpdCB0YWtlcyB0aGUgcmVxdWVzdCBhbmQgcmVzcG9uc2Ugb2JqZWN0cyBhbmQgaGFuZGxlcyB0aGVtIGludGVybmFsbHlcbmFwcC51c2UoJy9ncmFwaHFsJywgZ3JhcGhRTFNlcnZlci5yZXF1ZXN0TGlzdGVuZXIpO1xuXG5hcHAuYWxsKFxuICAnKicsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG4vLyBTdGFydCBzZXJ2ZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fSFgKSk7XG4iLCAiaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSAnQGdyYXBocWwteW9nYS9ub2RlJztcbmltcG9ydCB7IGFwcGxpY2F0aW9uU2NoZW1hIH0gZnJvbSAnLi9tb2R1bGVzJztcblxuZXhwb3J0IGNvbnN0IGdyYXBoUUxTZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoe1xuICBtYXNrZWRFcnJvcnM6IGZhbHNlLFxuICBzY2hlbWE6IGFwcGxpY2F0aW9uU2NoZW1hLFxufSk7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQXBwbGljYXRpb24gfSBmcm9tICdncmFwaHFsLW1vZHVsZXMnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgeyBVc2VyTW9kdWxlIH0gZnJvbSAnLi91c2VyJztcblxuLy8gVGhpcyBpcyB5b3VyIGFwcGxpY2F0aW9uLCBpdCBjb250YWlucyB5b3VyIEdyYXBoUUwgc2NoZW1hIGFuZCB0aGUgaW1wbGVtZW50YXRpb24gb2YgaXQuXG5jb25zdCBhcHBsaWNhdGlvbiA9IGNyZWF0ZUFwcGxpY2F0aW9uKHtcbiAgbW9kdWxlczogW1VzZXJNb2R1bGUsIEF1dGhNb2R1bGVdLFxufSk7XG5cbi8vIFRoaXMgaXMgeW91ciBhY3R1YWwgR3JhcGhRTCBzY2hlbWFcbmV4cG9ydCBjb25zdCBhcHBsaWNhdGlvblNjaGVtYSA9IGFwcGxpY2F0aW9uLmNyZWF0ZVNjaGVtYUZvckFwb2xsbygpO1xuIiwgImltcG9ydCB7IGNyZWF0ZU1vZHVsZSB9IGZyb20gJ2dyYXBocWwtbW9kdWxlcyc7XG5pbXBvcnQgeyBhdXRoUmVzb2x2ZXJzIH0gZnJvbSAnLi9yZXNvbHZlcnMnO1xuaW1wb3J0IHsgYXV0aFR5cGVkZWZzIH0gZnJvbSAnLi90eXBlZGVmcyc7XG5cbmV4cG9ydCBjb25zdCBBdXRoTW9kdWxlID0gY3JlYXRlTW9kdWxlKHtcbiAgaWQ6ICdhdXRoJyxcbiAgZGlybmFtZTogX19kaXJuYW1lLFxuICB0eXBlRGVmczogYXV0aFR5cGVkZWZzLFxuICByZXNvbHZlcnM6IGF1dGhSZXNvbHZlcnMsXG59KTtcbiIsICJpbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vZ2VuZXJhdGVkLXR5cGVzL21vZHVsZS10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVVc2VyLCBsb2dpblVzZXIgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVRva2VucyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGF1dGhSZXNvbHZlcnM6IEF1dGhNb2R1bGUuUmVzb2x2ZXJzID0ge1xuICBNdXRhdGlvbjoge1xuICAgIHNpZ25VcDogYXN5bmMgKF8sIHsgc2lnblVwSW5wdXQgfSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IGNyZWF0ZVVzZXIoc2lnblVwSW5wdXQpO1xuXG4gICAgICAgIGlmICghY3JlYXRlZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgc2F2aW5nIGRhdGEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZS5jb2RlID09PSAnUDIwMDInKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSBhcyBzdHJpbmcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbG9naW46IGFzeW5jIChfLCB7IGxvZ2luSW5wdXQgfSkgPT4ge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luVXNlcihsb2dpbklucHV0KTtcblxuICAgICAgY29uc3QgeyBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuIH0gPSBnZW5lcmF0ZVRva2Vucyh7IHVzZXJJZDogdXNlci5pZCB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICAgICAgYWNjZXNzVG9rZW4sXG4gICAgICAgIHJlZnJlc2hUb2tlbixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHtcbiAgSW5wdXRNYXliZSxcbiAgTG9naW5JbnB1dCxcbiAgU2lnblVwSW5wdXQsXG59IGZyb20gJ34vZXhwcmVzcy1hcHAvc3JjL2dyYXBocWwvZ2VuZXJhdGVkLXR5cGVzL2dyYXBocWwnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L2V4cHJlc3MtYXBwL3NyYy9saWInO1xuaW1wb3J0IHsgY29tcGFyZVBhc3N3b3JkLCBoYXNoUGFzc3dvcmQgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQnlJZChpZDogbnVtYmVyKSB7XG4gIHJldHVybiBkYi51c2VyLmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKFxuICBjcmVhdGVVc2VySW5wdXQ6IElucHV0TWF5YmU8U2lnblVwSW5wdXQ+IHwgdW5kZWZpbmVkXG4pIHtcbiAgaWYgKCFjcmVhdGVVc2VySW5wdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZVVzZXJJbnB1dCBpcyByZXF1aXJlZCcpO1xuICB9XG5cbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWF0ZVVzZXJJbnB1dDtcblxuICBjb25zdCBbaGFzaEVyciwgaGFzaGVkUGFzc3dvcmRdID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKTtcbiAgaWYgKGhhc2hFcnIgfHwgIWhhc2hlZFBhc3N3b3JkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBzYXZpbmcgZGF0YScpO1xuICB9XG5cbiAgcmV0dXJuIGRiLnVzZXIuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpblVzZXIoXG4gIGxvZ2luSW5wdXQ6IElucHV0TWF5YmU8TG9naW5JbnB1dD4gfCB1bmRlZmluZWRcbikge1xuICBpZiAoIWxvZ2luSW5wdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvZ2luSW5wdXQgaXMgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBsb2dpbklucHV0O1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gIH0pO1xuXG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBFcnJvcignVXNlciBub3QgZm91bmQnKTtcbiAgfVxuXG4gIGNvbnN0IFtlcnIsIGlzQ29ycmVjdF0gPSBhd2FpdCBjb21wYXJlUGFzc3dvcmQoe1xuICAgIHBhc3N3b3JkLFxuICAgIGhhc2hlZFBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICB9KTtcblxuICBpZiAoZXJyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBsb2dnaW5nIGluJyk7XG4gIH1cblxuICBpZiAoIWlzQ29ycmVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgcGFzc3dvcmQgb3IgZW1haWwnKTtcbiAgfVxuXG4gIHJldHVybiB1c2VyO1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgbmFtZXNwYWNlIE5vZGVKUyB7XG4gICAgaW50ZXJmYWNlIEdsb2JhbCB7fVxuICB9XG59XG5cbi8vIGFkZCBwcmlzbWEgdG8gdGhlIE5vZGVKUyBnbG9iYWwgdHlwZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5pbnRlcmZhY2UgQ3VzdG9tTm9kZUpzR2xvYmFsIGV4dGVuZHMgTm9kZUpTLkdsb2JhbCB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG4vLyBQcmV2ZW50IG11bHRpcGxlIGluc3RhbmNlcyBvZiBQcmlzbWEgQ2xpZW50IGluIGRldmVsb3BtZW50XG5kZWNsYXJlIGNvbnN0IGdsb2JhbDogQ3VzdG9tTm9kZUpzR2xvYmFsO1xuXG5leHBvcnQgY29uc3QgZGIgPSBnbG9iYWwucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSBnbG9iYWwucHJpc21hID0gZGI7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9ycyAqL1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcbmltcG9ydCB7IGNvbXBhcmUsIGdlblNhbHQsIGhhc2ggfSBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHsgc2lnbiB9IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cbmNvbnN0IHNhbHRSb3VuZHMgPSBOdW1iZXIocHJvY2Vzcy5lbnYuU0FMVF9ST1VORFMpIHx8IDg7XG5jb25zdCB0b2tlblNlY3JldCA9IHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVCB8fCAnc2VjcmV0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hQYXNzd29yZChcbiAgcGFzc3dvcmQ6IHN0cmluZ1xuKTogUHJvbWlzZTxbRXJyb3IgfCBudWxsLCBzdHJpbmcgfCBudWxsXT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGdlblNhbHQoc2FsdFJvdW5kcywgKGVyciwgc2FsdCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoW2VyciwgbnVsbF0pO1xuICAgICAgfVxuICAgICAgaGFzaChwYXNzd29yZCwgc2FsdCwgKGhhc2hFcnIsIGhhc2hlZFBhc3N3b3JkKSA9PiB7XG4gICAgICAgIGlmIChoYXNoRXJyKSB7XG4gICAgICAgICAgcmVqZWN0KFtoYXNoRXJyLCBudWxsXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShbbnVsbCwgaGFzaGVkUGFzc3dvcmRdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVQYXNzd29yZCh7XG4gIHBhc3N3b3JkLFxuICBoYXNoZWRQYXNzd29yZCxcbn06IHtcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgaGFzaGVkUGFzc3dvcmQ6IHN0cmluZztcbn0pOiBQcm9taXNlPFtFcnJvciB8IG51bGwsIGJvb2xlYW5dPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQsIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoW2VyciwgbnVsbF0pO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbbnVsbCwgcmVzdWx0XSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb2tlbnMoeyB1c2VySWQgfTogeyB1c2VySWQ6IG51bWJlciB9KToge1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICByZWZyZXNoVG9rZW46IHN0cmluZztcbn0ge1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHNpZ24oeyB1c2VySWQgfSwgdG9rZW5TZWNyZXQsIHtcbiAgICBleHBpcmVzSW46ICcxNW0nLFxuICB9KTtcbiAgY29uc3QgcmVmcmVzaFRva2VuID0gc2lnbih7IHVzZXJJZCB9LCB0b2tlblNlY3JldCwge1xuICAgIGV4cGlyZXNJbjogJzdkJyxcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgYWNjZXNzVG9rZW4sXG4gICAgcmVmcmVzaFRva2VuLFxuICB9O1xufVxuXG4iLCAiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC1tb2R1bGVzJztcblxuZXhwb3J0IGNvbnN0IGF1dGhUeXBlZGVmcyA9IGdxbGBcbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgc2lnblVwKHNpZ25VcElucHV0OiBTaWduVXBJbnB1dCk6IEF1dGhQYXlsb2FkIVxuICAgIGxvZ2luKGxvZ2luSW5wdXQ6IExvZ2luSW5wdXQpOiBBdXRoUGF5bG9hZCFcbiAgfVxuXG4gIGlucHV0IFNpZ25VcElucHV0IHtcbiAgICBlbWFpbDogU3RyaW5nIVxuICAgIG5hbWU6IFN0cmluZyFcbiAgICBwYXNzd29yZDogU3RyaW5nIVxuICB9XG5cbiAgaW5wdXQgTG9naW5JbnB1dCB7XG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBwYXNzd29yZDogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBBdXRoUGF5bG9hZCB7XG4gICAgZG9uZTogQm9vbGVhbiFcbiAgICBhY2Nlc3NUb2tlbjogU3RyaW5nXG4gICAgcmVmcmVzaFRva2VuOiBTdHJpbmdcbiAgfVxuYDtcbiIsICJpbXBvcnQgeyBjcmVhdGVNb2R1bGUgfSBmcm9tICdncmFwaHFsLW1vZHVsZXMnO1xuaW1wb3J0IHsgdXNlclJlc29sdmVycyB9IGZyb20gJy4vcmVzb2x2ZXJzJztcbmltcG9ydCB7IHVzZXJUeXBlZGVmcyB9IGZyb20gJy4vdHlwZWRlZnMnO1xuXG5leHBvcnQgY29uc3QgVXNlck1vZHVsZSA9IGNyZWF0ZU1vZHVsZSh7XG4gIGlkOiAndXNlcicsXG4gIGRpcm5hbWU6IF9fZGlybmFtZSxcbiAgdHlwZURlZnM6IHVzZXJUeXBlZGVmcyxcbiAgcmVzb2x2ZXJzOiB1c2VyUmVzb2x2ZXJzLFxufSk7XG4iLCAiaW1wb3J0IHsgVXNlck1vZHVsZSB9IGZyb20gJy4uL2dlbmVyYXRlZC10eXBlcy9tb2R1bGUtdHlwZXMnO1xuXG5jb25zdCB1c2VyczogVXNlck1vZHVsZS5Vc2VyW10gPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnSm9obiBEb2UnLFxuICAgIGVtYWlsOiAnam9obkB0ZXN0LmNvbScsXG4gICAgcGFzc3dvcmQ6ICcxMjM0NTYnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHVzZXJSZXNvbHZlcnM6IFVzZXJNb2R1bGUuUmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIHVzZXJzOiAoKSA9PiB1c2VycyxcbiAgfSxcbn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC1tb2R1bGVzJztcblxuZXhwb3J0IGNvbnN0IHVzZXJUeXBlZGVmcyA9IGdxbGBcbiAgdHlwZSBVc2VyIHtcbiAgICBpZDogSW50IVxuICAgIG5hbWU6IFN0cmluZ1xuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgcGFzc3dvcmQ6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHVzZXJzOiBbVXNlciFdIVxuICB9XG5gO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL2JhaWphbmF0aC9sZWFybmluZ3MvcHJvamVjdHMtMjAyMi9leHByZXNzL3JlbWl4LXdpdGgtZXhwcmVzcy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9iYWlqYW5hdGgvbGVhcm5pbmdzL3Byb2plY3RzLTIwMjIvZXhwcmVzcy9yZW1peC13aXRoLWV4cHJlc3MvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL2JhaWphbmF0aC9sZWFybmluZ3MvcHJvamVjdHMtMjAyMi9leHByZXNzL3JlbWl4LXdpdGgtZXhwcmVzcy9hcHAvcm91dGVzL2Fib3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9iYWlqYW5hdGgvbGVhcm5pbmdzL3Byb2plY3RzLTIwMjIvZXhwcmVzcy9yZW1peC13aXRoLWV4cHJlc3MvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhYm91dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XG4gICAgICA8aDE+QWJvdXQgUGFnZTwvaDE+XG4gICAgICA8TGluayB0bz1cIi9cIj5HbyB0byBob21lPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJywgbGluZUhlaWdodDogJzEuNCcgfX0+XG4gICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIHRvPScvYWJvdXQnPkdvIHRvIEFib3V0PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YSBocmVmPSdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbCc+R3JhcGhxbCBBcGk8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicwOTJmNjA3ZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtMkRMS0VJMjQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU9NVzNFUVVZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSFE2TDVUSzMuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTdUUFo1VUZDLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWJvdXQnOnsnaWQnOidyb3V0ZXMvYWJvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWJvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWJvdXQtRk1XMlRBNzQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1DT01UWFo0NC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0wOTJGNjA3RS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNB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
