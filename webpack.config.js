const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// import createStyledComponentsTransformer from "typescript-plugin-styled-components";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "awesome-typescript-loader" }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }

      //   {
      //     test: /\.(js|jsx|ts|tsx)$/,
      //     exclude: /node_modules/,
      //     use: "babel-loader"
      //   }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};
