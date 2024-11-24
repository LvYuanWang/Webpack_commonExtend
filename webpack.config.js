const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].[hash:5].js"
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}