// 生产环境文件配置
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "none",
  plugins: [
    new CleanWebpackPlugin()
  ]
}