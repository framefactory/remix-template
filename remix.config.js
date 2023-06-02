/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "src/app",
    serverBuildPath: "services/server/build/index.js",
    assetsBuildDirectory: "services/server/static",
    cacheDirectory: ".cache/remix",
    ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
    publicPath: "/static/",
    serverModuleFormat: "cjs",
    devServerPort: 3001,
    future: {
        v2_errorBoundary: true,
        v2_meta: true,
        v2_normalizeFormMethod: true,
        v2_routeConvention: true,
    },
    postcss: true,
    tailwind: true,
};