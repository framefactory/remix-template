require('dotenv').config();

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "app",
    serverBuildPath: "../../services/server/build/index.js",
    assetsBuildDirectory: "../../services/server/static",
    cacheDirectory: "../../.cache/remix",
    ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
    publicPath: "/static/",
    serverModuleFormat: "cjs",
    devServerPort: process.env["DOCKER_SERVER_DEV_PORT"],
    future: {
        v2_errorBoundary: true,
        v2_meta: true,
        v2_normalizeFormMethod: true,
        v2_routeConvention: true,
    }
};