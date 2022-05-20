import dotenv from "dotenv";

dotenv.config();

const { NODE_ENV } = process.env;
const IS_PROD = NODE_ENV === "production";

export default {
  mode: IS_PROD ? "production" : "development",
  devtool: IS_PROD ? "nosources-source-map" : "source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".scss"],
  },
  stats: "errors-warnings",
};
