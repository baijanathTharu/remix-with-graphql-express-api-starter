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

// express-app/src/index.ts
init_react();
var import_config2 = require("dotenv/config");
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// express-app/src/graphql/graphqlServer.ts
init_react();
var import_node = require("@graphql-yoga/node");

// express-app/src/graphql/modules/app.ts
init_react();
var import_graphql_modules5 = require("graphql-modules");

// express-app/src/graphql/modules/auth/auth.module.ts
init_react();
var import_graphql_modules2 = require("graphql-modules");

// express-app/src/graphql/modules/auth/resolvers/index.ts
init_react();
var import_client2 = require("@prisma/client");

// express-app/src/graphql/modules/auth/services/index.ts
init_react();

// express-app/src/lib/db.ts
init_react();
var import_client = require("@prisma/client");
var db = global.prisma || new import_client.PrismaClient();
if (true)
  global.prisma = db;

// express-app/src/graphql/modules/auth/utils.ts
init_react();
var import_config = require("dotenv/config");
var import_bcrypt = require("bcrypt");
var saltRounds = Number(process.env.SALT_ROUNDS) || 8;
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

// express-app/src/graphql/modules/auth/services/index.ts
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

// express-app/src/graphql/modules/auth/resolvers/index.ts
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
        if (e instanceof import_client2.Prisma.PrismaClientKnownRequestError) {
          if (e.code === "P2002") {
            throw new Error("User already exists");
          }
        }
        throw new Error(e);
      }
    },
    login: async (_, { loginInput }) => {
      await loginUser(loginInput);
      return {
        done: true
      };
    }
  }
};

// express-app/src/graphql/modules/auth/typedefs/auth.ts
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
  }
`;

// express-app/src/graphql/modules/auth/auth.module.ts
var AuthModule = (0, import_graphql_modules2.createModule)({
  id: "auth",
  dirname: __dirname,
  typeDefs: authTypedefs,
  resolvers: authResolvers
});

// express-app/src/graphql/modules/user/user.module.ts
init_react();
var import_graphql_modules4 = require("graphql-modules");

// express-app/src/graphql/modules/user/resolvers/index.ts
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

// express-app/src/graphql/modules/user/typedefs/user.ts
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

// express-app/src/graphql/modules/user/user.module.ts
var UserModule = (0, import_graphql_modules4.createModule)({
  id: "user",
  dirname: __dirname,
  typeDefs: userTypedefs,
  resolvers: userResolvers
});

// express-app/src/graphql/modules/app.ts
var application = (0, import_graphql_modules5.createApplication)({
  modules: [UserModule, AuthModule]
});
var applicationSchema = application.createSchemaForApollo();

// express-app/src/graphql/graphqlServer.ts
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

// express-app/src/index.ts
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9leHByZXNzLWFwcC9zcmMvaW5kZXgudHMiLCAiLi4vZXhwcmVzcy1hcHAvc3JjL2dyYXBocWwvZ3JhcGhxbFNlcnZlci50cyIsICIuLi9leHByZXNzLWFwcC9zcmMvZ3JhcGhxbC9tb2R1bGVzL2FwcC50cyIsICIuLi9leHByZXNzLWFwcC9zcmMvZ3JhcGhxbC9tb2R1bGVzL2F1dGgvYXV0aC5tb2R1bGUudHMiLCAiLi4vZXhwcmVzcy1hcHAvc3JjL2dyYXBocWwvbW9kdWxlcy9hdXRoL3Jlc29sdmVycy9pbmRleC50cyIsICIuLi9leHByZXNzLWFwcC9zcmMvZ3JhcGhxbC9tb2R1bGVzL2F1dGgvc2VydmljZXMvaW5kZXgudHMiLCAiLi4vZXhwcmVzcy1hcHAvc3JjL2xpYi9kYi50cyIsICIuLi9leHByZXNzLWFwcC9zcmMvZ3JhcGhxbC9tb2R1bGVzL2F1dGgvdXRpbHMudHMiLCAiLi4vZXhwcmVzcy1hcHAvc3JjL2dyYXBocWwvbW9kdWxlcy9hdXRoL3R5cGVkZWZzL2F1dGgudHMiLCAiLi4vZXhwcmVzcy1hcHAvc3JjL2dyYXBocWwvbW9kdWxlcy91c2VyL3VzZXIubW9kdWxlLnRzIiwgIi4uL2V4cHJlc3MtYXBwL3NyYy9ncmFwaHFsL21vZHVsZXMvdXNlci9yZXNvbHZlcnMvaW5kZXgudHMiLCAiLi4vZXhwcmVzcy1hcHAvc3JjL2dyYXBocWwvbW9kdWxlcy91c2VyL3R5cGVkZWZzL3VzZXIudHMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvYmFpamFuYXRoL2xlYXJuaW5ncy9wcm9qZWN0cy0yMDIyL2V4cHJlc3MvcmVtaXgtd2l0aC1leHByZXNzL2FwcC9yb290LnRzeCIsICJyb3V0ZTovaG9tZS9iYWlqYW5hdGgvbGVhcm5pbmdzL3Byb2plY3RzLTIwMjIvZXhwcmVzcy9yZW1peC13aXRoLWV4cHJlc3MvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGU6L2hvbWUvYmFpamFuYXRoL2xlYXJuaW5ncy9wcm9qZWN0cy0yMDIyL2V4cHJlc3MvcmVtaXgtd2l0aC1leHByZXNzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5pbXBvcnQgZXhwcmVzcywgeyBBcHBsaWNhdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ0ByZW1peC1ydW4vZXhwcmVzcyc7XG5pbXBvcnQgeyBncmFwaFFMU2VydmVyIH0gZnJvbSAnLi9ncmFwaHFsJztcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCc7XG5cbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwO1xuXG5hcHAudXNlKCcvcmVzdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBkYXRhOiAnSGVsbG8gV29ybGQhJyB9KTtcbn0pO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gICcvYnVpbGQnLFxuICBleHByZXNzLnN0YXRpYygnLi4vLi4vcHVibGljL2J1aWxkJywgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogJzF5JyB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljL2J1aWxkJywgeyBtYXhBZ2U6ICcxaCcgfSkpO1xuXG5hcHAudXNlKG1vcmdhbigndGlueScpKTtcblxuLy8gQmluZCBHcmFwaFFMIFlvZ2EgdG8gYC9ncmFwaHFsYCBlbmRwb2ludFxuLy8gSGVyZSBpdCB0YWtlcyB0aGUgcmVxdWVzdCBhbmQgcmVzcG9uc2Ugb2JqZWN0cyBhbmQgaGFuZGxlcyB0aGVtIGludGVybmFsbHlcbmFwcC51c2UoJy9ncmFwaHFsJywgZ3JhcGhRTFNlcnZlci5yZXF1ZXN0TGlzdGVuZXIpO1xuXG5hcHAuYWxsKFxuICAnKicsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG4vLyBTdGFydCBzZXJ2ZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fSFgKSk7XG4iLCAiaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSAnQGdyYXBocWwteW9nYS9ub2RlJztcbmltcG9ydCB7IGFwcGxpY2F0aW9uU2NoZW1hIH0gZnJvbSAnLi9tb2R1bGVzJztcblxuZXhwb3J0IGNvbnN0IGdyYXBoUUxTZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoe1xuICBtYXNrZWRFcnJvcnM6IGZhbHNlLFxuICBzY2hlbWE6IGFwcGxpY2F0aW9uU2NoZW1hLFxufSk7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQXBwbGljYXRpb24gfSBmcm9tICdncmFwaHFsLW1vZHVsZXMnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgeyBVc2VyTW9kdWxlIH0gZnJvbSAnLi91c2VyJztcblxuLy8gVGhpcyBpcyB5b3VyIGFwcGxpY2F0aW9uLCBpdCBjb250YWlucyB5b3VyIEdyYXBoUUwgc2NoZW1hIGFuZCB0aGUgaW1wbGVtZW50YXRpb24gb2YgaXQuXG5jb25zdCBhcHBsaWNhdGlvbiA9IGNyZWF0ZUFwcGxpY2F0aW9uKHtcbiAgbW9kdWxlczogW1VzZXJNb2R1bGUsIEF1dGhNb2R1bGVdLFxufSk7XG5cbi8vIFRoaXMgaXMgeW91ciBhY3R1YWwgR3JhcGhRTCBzY2hlbWFcbmV4cG9ydCBjb25zdCBhcHBsaWNhdGlvblNjaGVtYSA9IGFwcGxpY2F0aW9uLmNyZWF0ZVNjaGVtYUZvckFwb2xsbygpO1xuIiwgImltcG9ydCB7IGNyZWF0ZU1vZHVsZSB9IGZyb20gJ2dyYXBocWwtbW9kdWxlcyc7XG5pbXBvcnQgeyBhdXRoUmVzb2x2ZXJzIH0gZnJvbSAnLi9yZXNvbHZlcnMnO1xuaW1wb3J0IHsgYXV0aFR5cGVkZWZzIH0gZnJvbSAnLi90eXBlZGVmcyc7XG5cbmV4cG9ydCBjb25zdCBBdXRoTW9kdWxlID0gY3JlYXRlTW9kdWxlKHtcbiAgaWQ6ICdhdXRoJyxcbiAgZGlybmFtZTogX19kaXJuYW1lLFxuICB0eXBlRGVmczogYXV0aFR5cGVkZWZzLFxuICByZXNvbHZlcnM6IGF1dGhSZXNvbHZlcnMsXG59KTtcbiIsICJpbXBvcnQgeyBQcmlzbWEgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vZ2VuZXJhdGVkLXR5cGVzL21vZHVsZS10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVVc2VyLCBsb2dpblVzZXIgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjb25zdCBhdXRoUmVzb2x2ZXJzOiBBdXRoTW9kdWxlLlJlc29sdmVycyA9IHtcbiAgTXV0YXRpb246IHtcbiAgICBzaWduVXA6IGFzeW5jIChfLCB7IHNpZ25VcElucHV0IH0pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBjcmVhdGVVc2VyKHNpZ25VcElucHV0KTtcblxuICAgICAgICBpZiAoIWNyZWF0ZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIHNhdmluZyBkYXRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgUHJpc21hLlByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yKSB7XG4gICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ1AyMDAyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUgYXMgc3RyaW5nKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvZ2luOiBhc3luYyAoXywgeyBsb2dpbklucHV0IH0pID0+IHtcbiAgICAgIGF3YWl0IGxvZ2luVXNlcihsb2dpbklucHV0KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHtcbiAgSW5wdXRNYXliZSxcbiAgTG9naW5JbnB1dCxcbiAgU2lnblVwSW5wdXQsXG59IGZyb20gJ2V4cHJlc3MtYXBwL3NyYy9ncmFwaHFsL2dlbmVyYXRlZC10eXBlcy9ncmFwaHFsJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliJztcbmltcG9ydCB7IGNvbXBhcmVQYXNzd29yZCwgaGFzaFBhc3N3b3JkIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckJ5SWQoaWQ6IG51bWJlcikge1xuICByZXR1cm4gZGIudXNlci5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihcbiAgY3JlYXRlVXNlcklucHV0OiBJbnB1dE1heWJlPFNpZ25VcElucHV0PiB8IHVuZGVmaW5lZFxuKSB7XG4gIGlmICghY3JlYXRlVXNlcklucHV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVVc2VySW5wdXQgaXMgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSBjcmVhdGVVc2VySW5wdXQ7XG5cbiAgY29uc3QgW2hhc2hFcnIsIGhhc2hlZFBhc3N3b3JkXSA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XG4gIGlmIChoYXNoRXJyIHx8ICFoYXNoZWRQYXNzd29yZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgc2F2aW5nIGRhdGEnKTtcbiAgfVxuXG4gIHJldHVybiBkYi51c2VyLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5Vc2VyKFxuICBsb2dpbklucHV0OiBJbnB1dE1heWJlPExvZ2luSW5wdXQ+IHwgdW5kZWZpbmVkXG4pIHtcbiAgaWYgKCFsb2dpbklucHV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdsb2dpbklucHV0IGlzIHJlcXVpcmVkJyk7XG4gIH1cblxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gbG9naW5JbnB1dDtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBlbWFpbCB9LFxuICB9KTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gIH1cblxuICBjb25zdCBbZXJyLCBpc0NvcnJlY3RdID0gYXdhaXQgY29tcGFyZVBhc3N3b3JkKHtcbiAgICBwYXNzd29yZCxcbiAgICBoYXNoZWRQYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgfSk7XG5cbiAgaWYgKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgbG9nZ2luZyBpbicpO1xuICB9XG5cbiAgaWYgKCFpc0NvcnJlY3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIHBhc3N3b3JkIG9yIGVtYWlsJyk7XG4gIH1cblxuICByZXR1cm4gdXNlcjtcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIG5hbWVzcGFjZSBOb2RlSlMge1xuICAgIGludGVyZmFjZSBHbG9iYWwge31cbiAgfVxufVxuXG4vLyBhZGQgcHJpc21hIHRvIHRoZSBOb2RlSlMgZ2xvYmFsIHR5cGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuaW50ZXJmYWNlIEN1c3RvbU5vZGVKc0dsb2JhbCBleHRlbmRzIE5vZGVKUy5HbG9iYWwge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudDtcbn1cblxuLy8gUHJldmVudCBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgUHJpc21hIENsaWVudCBpbiBkZXZlbG9wbWVudFxuZGVjbGFyZSBjb25zdCBnbG9iYWw6IEN1c3RvbU5vZGVKc0dsb2JhbDtcblxuZXhwb3J0IGNvbnN0IGRiID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgZ2xvYmFsLnByaXNtYSA9IGRiO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnMgKi9cbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5pbXBvcnQgeyBjb21wYXJlLCBnZW5TYWx0LCBoYXNoIH0gZnJvbSAnYmNyeXB0JztcblxuY29uc3Qgc2FsdFJvdW5kcyA9IE51bWJlcihwcm9jZXNzLmVudi5TQUxUX1JPVU5EUykgfHwgODtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hQYXNzd29yZChcbiAgcGFzc3dvcmQ6IHN0cmluZ1xuKTogUHJvbWlzZTxbRXJyb3IgfCBudWxsLCBzdHJpbmcgfCBudWxsXT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGdlblNhbHQoc2FsdFJvdW5kcywgKGVyciwgc2FsdCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoW2VyciwgbnVsbF0pO1xuICAgICAgfVxuICAgICAgaGFzaChwYXNzd29yZCwgc2FsdCwgKGhhc2hFcnIsIGhhc2hlZFBhc3N3b3JkKSA9PiB7XG4gICAgICAgIGlmIChoYXNoRXJyKSB7XG4gICAgICAgICAgcmVqZWN0KFtoYXNoRXJyLCBudWxsXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShbbnVsbCwgaGFzaGVkUGFzc3dvcmRdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVQYXNzd29yZCh7XG4gIHBhc3N3b3JkLFxuICBoYXNoZWRQYXNzd29yZCxcbn06IHtcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgaGFzaGVkUGFzc3dvcmQ6IHN0cmluZztcbn0pOiBQcm9taXNlPFtFcnJvciB8IG51bGwsIGJvb2xlYW5dPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQsIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoW2VyciwgbnVsbF0pO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbbnVsbCwgcmVzdWx0XSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtbW9kdWxlcyc7XG5cbmV4cG9ydCBjb25zdCBhdXRoVHlwZWRlZnMgPSBncWxgXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIHNpZ25VcChzaWduVXBJbnB1dDogU2lnblVwSW5wdXQpOiBBdXRoUGF5bG9hZCFcbiAgICBsb2dpbihsb2dpbklucHV0OiBMb2dpbklucHV0KTogQXV0aFBheWxvYWQhXG4gIH1cblxuICBpbnB1dCBTaWduVXBJbnB1dCB7XG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgcGFzc3dvcmQ6IFN0cmluZyFcbiAgfVxuXG4gIGlucHV0IExvZ2luSW5wdXQge1xuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgcGFzc3dvcmQ6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgQXV0aFBheWxvYWQge1xuICAgIGRvbmU6IEJvb2xlYW4hXG4gIH1cbmA7XG4iLCAiaW1wb3J0IHsgY3JlYXRlTW9kdWxlIH0gZnJvbSAnZ3JhcGhxbC1tb2R1bGVzJztcbmltcG9ydCB7IHVzZXJSZXNvbHZlcnMgfSBmcm9tICcuL3Jlc29sdmVycyc7XG5pbXBvcnQgeyB1c2VyVHlwZWRlZnMgfSBmcm9tICcuL3R5cGVkZWZzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJNb2R1bGUgPSBjcmVhdGVNb2R1bGUoe1xuICBpZDogJ3VzZXInLFxuICBkaXJuYW1lOiBfX2Rpcm5hbWUsXG4gIHR5cGVEZWZzOiB1c2VyVHlwZWRlZnMsXG4gIHJlc29sdmVyczogdXNlclJlc29sdmVycyxcbn0pO1xuIiwgImltcG9ydCB7IFVzZXJNb2R1bGUgfSBmcm9tICcuLi9nZW5lcmF0ZWQtdHlwZXMvbW9kdWxlLXR5cGVzJztcblxuY29uc3QgdXNlcnM6IFVzZXJNb2R1bGUuVXNlcltdID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ0pvaG4gRG9lJyxcbiAgICBlbWFpbDogJ2pvaG5AdGVzdC5jb20nLFxuICAgIHBhc3N3b3JkOiAnMTIzNDU2JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB1c2VyUmVzb2x2ZXJzOiBVc2VyTW9kdWxlLlJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICB1c2VyczogKCkgPT4gdXNlcnMsXG4gIH0sXG59O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtbW9kdWxlcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VyVHlwZWRlZnMgPSBncWxgXG4gIHR5cGUgVXNlciB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBlbWFpbDogU3RyaW5nIVxuICAgIHBhc3N3b3JkOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICB1c2VyczogW1VzZXIhXSFcbiAgfVxuYDtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9iYWlqYW5hdGgvbGVhcm5pbmdzL3Byb2plY3RzLTIwMjIvZXhwcmVzcy9yZW1peC13aXRoLWV4cHJlc3MvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvYmFpamFuYXRoL2xlYXJuaW5ncy9wcm9qZWN0cy0yMDIyL2V4cHJlc3MvcmVtaXgtd2l0aC1leHByZXNzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9iYWlqYW5hdGgvbGVhcm5pbmdzL3Byb2plY3RzLTIwMjIvZXhwcmVzcy9yZW1peC13aXRoLWV4cHJlc3MvYXBwL3JvdXRlcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvYmFpamFuYXRoL2xlYXJuaW5ncy9wcm9qZWN0cy0yMDIyL2V4cHJlc3MvcmVtaXgtd2l0aC1leHByZXNzL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9hYm91dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiBcIjEuNFwiIH19PlxuICAgICAgPGgxPkFib3V0IFBhZ2U8L2gxPlxuICAgICAgPExpbmsgdG89XCIvXCI+R28gdG8gaG9tZTwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsIGxpbmVIZWlnaHQ6ICcxLjQnIH19PlxuICAgICAgPGgxPkhvbWUgUGFnZTwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayB0bz0nL2Fib3V0Jz5HbyB0byBBYm91dDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaHJlZj0naHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnPkdyYXBocWwgQXBpPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMDkyZjYwN2UnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTJETEtFSTI0LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PTVczRVFVWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhRNkw1VEszLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC03VFBaNVVGQy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fib3V0Jzp7J2lkJzoncm91dGVzL2Fib3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fib3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fib3V0LUZNVzJUQTc0LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtQ09NVFhaNDQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMDkyRjYwN0UuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdB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
