// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")  //1
//   .BundleAnalyzerPlugin;

//vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.my-sitee.com",
      },
    },
  },
  // configureWebpack:{
  //   plugins:[new BundleAnalyzerPlugin()],  //2无论开 发还是成产环境都能分析
  // },
  configureWebpack: require("./webpack.config"),//根据当前开发环境判断是否需要使用分析插件
};