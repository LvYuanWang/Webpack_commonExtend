const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "scripts/[name].[hash:5].js",
    publicPath: "../",  // 打包后的资源的访问路径前缀
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "html/index.html"
    }),
    new CopyWebpackPlugin([
      { from: "./public/publicAssets", to: "./publicAssets" }
    ])
  ],
  // 模块配置
  module: {
    rules: [  // loader规则配置
      {
        test: /\.(png)|(jpg)|(gif)/, // 匹配文件的正则表达式
        use: [
          // {
          //   loader: "file-loader",
          //   options: {
          //     name: "[name].[hash:5].[ext]",
          //     outputPath: "images/"  // 输出目录
          //   }
          // },
          {
            loader: "url-loader",
            options: {
              // limit: false,  // 不限制任何大小, 所有经过loader的文件进行base64编码返回
              limit: 10 * 1024,  // 只要文件不超过 10KB, 则使用base64编码, 否则, 交给file-loader处理
              name: "[name].[hash:5].[ext]",
              outputPath: "images/"
            }
          }
        ]
      }
    ]
  },
  // 开发服务器配置
  devServer: {
    port: 8000,   // 监听端口
    open: true,  // 自动打开浏览器
    proxy: {  // 代理
      "/search": {
        target: "https://cn.bing.com",
        changeOrigin: true, // 是否改变请求源
      }
    },
    openPage: "html/index.html",  // 打开的页面
    publicPath: "/",  // 打包后的资源的访问路径前缀
  },
  // 输出配置
  stats: {
    modules: false,
    colors: true
  }
}