/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: ".",
    serverBuildPath: "../services/server/build",
    assetsBuildDirectory: "../services/server/static",
    cacheDirectory: "../.cache/remix",
    ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
    publicPath: "/static/",
    serverModuleFormat: "cjs",
    devServerPort: 3000,
    future: {
        v2_errorBoundary: true,
        v2_meta: true,
        v2_normalizeFormMethod: true,
        v2_routeConvention: true,
    },
    postcss: true,
    tailwind: true,
};