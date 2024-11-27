// 开发环境配置文件
module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "https://study.duyiedu.com",
        changeOrigin: true,
        pathRewrite: {  // 路径重写
          "/api": "/api"
        }
      }
    },
    openPage: "list.html"
  }
}