const webpack = require("webpack");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "example",
    projectName: "example.mf",
    webpackConfigEnv,
    argv,
  });

  // Single SPA automatically adds organisation packages to excludes. We're not entirely ready for this yet.
  defaultConfig.externals = defaultConfig.externals.filter(
    (e) => !e.toString().includes("@example"),
  );

  const standalonePlugin = defaultConfig.plugins.find(
    (p) => p.constructor.name === "StandaloneSingleSpaPlugin",
  );

  if (standalonePlugin) {
    // if any standalone puglin, place it here
    // standalonePlugin.options.importMapUrl = new URL(
    //   "https://someurl",
    // );
  }

  defaultConfig.entry = "./src/example-mf";
  defaultConfig.output.filename = "example-mf.js";

  return merge(defaultConfig, {
    externals: ["react", "react-dom"],
    output: { clean: true },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1, // disable creating additional chunks
      }),
    ],
    resolve: {
      plugins: [
        new TsconfigPathsPlugin({
          extensions: defaultConfig.resolve.extensions,
        }),
      ],
    },
    devServer: {
      proxy: [
        {
          context: ["/example/v1"],
          target: "http://localhost:3000",
        },
      ],
    },
  });
};
