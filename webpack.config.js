const webpackBaseConfig = require("./webpack.base");
const webpackDevConfig = require("./webpack.dev");
const webpackProdConfig = require("./webpack.prod");

module.exports = env => {
  let configObj = {};
  if (env && env.prod) {
    // 生产环境
    configObj = {
      ...webpackBaseConfig,
      ...webpackProdConfig
    };
    configObj.plugins = [...webpackBaseConfig.plugins, ...webpackProdConfig.plugins];
  } else {
    // 开发环境
    configObj = {
      ...webpackBaseConfig,
      ...webpackDevConfig
    };
  }
  return configObj;
}