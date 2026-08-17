const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./script.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  watchOptions: {
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    static: "./dist",
    port: 8080,
    hot: true,
    liveReload: true,
    watchFiles: {
      paths: ["./index.html", "./script.js", "./style.css"],
      options: {
        usePolling: true,
        interval: 1000,
      },
    },
    client: {
      overlay: true,
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
