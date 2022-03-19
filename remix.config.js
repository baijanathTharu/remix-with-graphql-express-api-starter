/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  server: './graphqlServer.ts',
  // server: './server.ts',
  ignoredRouteFiles: ['.*'],
  devServerBroadcastDelay: 1000,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002
};
