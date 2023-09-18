/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  serverConditions: ['workerd', 'worker', 'browser'],
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
