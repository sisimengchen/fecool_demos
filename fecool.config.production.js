const proxy = require("http-proxy-middleware");

const config = {
  context: process.cwd(),
  entry: {
    path: "./src",
    common: "./src/common",
  },
  output: {
    path: "./docs",
    common: "./docs/common",
    publicPath: "https://sisimengchen.github.io/fecool_demos",
    sourceMapDirName: "./.sourcemaps",
    imagemin: false,
    hasha: false,
    args: {
      x: 1
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
    directory: true,
    https: false,
    middleware: []
  }
};

module.exports = config;
