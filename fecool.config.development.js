const proxy = require("http-proxy-middleware");

const config = {
  context: process.cwd(),
  entry: {
    path: "./src",
    common: "./src/common",
  },
  output: {
    path: "./dist",
    common: "./dist/common",
    publicPath: "//feresource.com:8093",
    sourceMapDirName: "./.sourcemaps",
    hasha: false,
    args: {
      param: '我是构建参数'
    },
    ignoreExt: [".md"]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
    }
  },
  optimization: {
    imagemin: false, // 启用图片压缩，会导致编译速度慢
    retainExtname: false // 保留扩展名
  },
  server: {
    port: 8093,
    single: true, // 启用单页面模式
    open: "external", // 启动浏览器 "external"
    host: "feresource.com",
    watch: false,
    // directory: true,
    https: false,
    middleware: []
  }
};

module.exports = config;
