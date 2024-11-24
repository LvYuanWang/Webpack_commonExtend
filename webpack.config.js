const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "scripts/[name].[hash:5].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new CopyWebpackPlugin([
      { from: "./public", to: "./" }
    ])
  ],
  // 开发服务器配置
  devServer: {
    port: 8000,   // 监听端口
    open: true,  // 自动打开浏览器
    proxy: {  // 代理
      "/search": {
        target: "https://cn.bing.com",
        changeOrigin: true, // 是否改变请求源
      }
    }
  },
  // 输出配置
  stats: {
    modules: false,
    colors: true
  }
}