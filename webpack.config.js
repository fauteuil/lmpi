// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// // const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// module.exports = {
//   entry: "./src/index.tsx",
//   target: "web",
//   mode: "development",
//   output: {
//     path: path.resolve(__dirname, "build"),
//     filename: "bundle.js"
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         loader: "awesome-typescript-loader"
//       },
//       {
//         enforce: "pre",
//         test: /\.js$/,
//         loader: "source-map-loader"
//       }
//       //   {
//       //     test: /\.css$/,
//       //     loader: "css-loader",
//       //   },
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "src", "index.html")
//     })
//     // new MiniCssExtractPlugin({
//     //   filename: "./src/yourfile.css",
//     // }),
//   ]
// };

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
