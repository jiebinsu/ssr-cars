import path from "path";
import webpackNodeExternals from "webpack-node-externals";
import { merge } from "webpack-merge";

// eslint-disable-next-line import/extensions
import baseConfig from "./webpack.base.config.babel.js";

const config = {
  target: "node",
  entry: "./src/server.js",
  output: {
    path: path.join(__dirname, "./build"),
    filename: "server.js",
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
  node: {
    __dirname: true,
  },
};

export default merge(baseConfig, config);
