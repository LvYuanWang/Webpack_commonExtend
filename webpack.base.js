// 公共配置代码
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    detail: "./src/detail/index.js",
    list: "./src/list/index.js",
    areaDetail: "./src/areaDetail/index.js"
  },
  output: {
    filename: "scripts/[name].[chunkhash:5].js"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/detail.html",
      filename: "detail.html",
      chunks: ["detail"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/list.html",
      filename: "list.html",
      chunks: ["list"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/areaDetail.html",
      filename: "areaDetail.html",
      chunks: ["areaDetail"]
    }),
    new CopyWebpackPlugin([
      { from: "public", to: "./" }
    ])
  ],
  stats: {
    modules: false,
    colors: true
  }
}