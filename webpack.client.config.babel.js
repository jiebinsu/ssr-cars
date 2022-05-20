import fs from "fs";
import path from "path";
import glob from "glob";
import { merge } from "webpack-merge";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import { EnvironmentPlugin } from "webpack";

// eslint-disable-next-line import/extensions
import baseConfig from "./webpack.base.config.babel.js";

const {
  PUBLIC_URL,
  WEBPACK_DEV_PORT = 9000,
  NODE_ENV,
  SSR_CLIENT_FILENAME = "client",
} = process.env;
const IS_PROD = NODE_ENV === "production";

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

const compositions = glob.sync(resolvePath("./src/compositions/*"));
const entries = compositions.reduce((acc, filePath) => {
  const clientBundle = `${resolvePath(filePath)}/${SSR_CLIENT_FILENAME}.js`;
  const fileId = `${path.basename(filePath)}`;

  if (fs.existsSync(clientBundle)) acc[fileId] = clientBundle;
  return acc;
}, {});

const config = {
  target: "web",
  entry: entries,
  output: {
    path: resolvePath("./build/public"),
    filename: "js/[name].js",
    publicPath: new URL(PUBLIC_URL).href,
  },
  devServer: {
    writeToDisk: true,
    hot: true,
    port: WEBPACK_DEV_PORT,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [IS_PROD ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new EnvironmentPlugin(process.env),
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new WebpackManifestPlugin({
      fileName: "asset-manifest.json",
      writeToFileEmit: true,
    }),
    // new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  optimization: {
    minimize: IS_PROD,
    minimizer: [new TerserPlugin()],
  },
};

export default merge(baseConfig, config);
