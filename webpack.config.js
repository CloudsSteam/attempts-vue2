// const dev = {}//开发环境
// const prod = {}//生产环境

// 判断当前环境来进行导出

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
if (process.env.NODE_ENV === "production") {//process.env.NODE_ENV是Nodejs中production生产环境 development开发环境
  module.exports = {
    devtool: "none",//源码地图？
    plugins: [new BundleAnalyzerPlugin()],
    externals: { //首先告诉webpack不要对公共库进行打包
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      axios: "axios",
    },
  };
} else {
  module.exports = {};  //开发环境不需要配置
}