const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  plugins: [
    // DefinePlugin 用于定义环境变量
    new webpack.DefinePlugin({
      PI: `Math.PI`,
      VERSION: JSON.stringify("1.0.0"),
      SCHOOL: JSON.stringify("清华大学")
    }),
    // BannerPlugin 用于在打包文件的顶部添加注释信息
    new webpack.BannerPlugin({
      banner: `
      hash:[hash]
      chunkhash:[chunkhash]
      name:[name]
      author:yuanjin
      corporation:duyi
      `
    }),
    // ProvidePlugin 用于在每个模块中注入变量
    new webpack.ProvidePlugin({
      $: "jquery",
      _: 'lodash'
    })
  ]
}