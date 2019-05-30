# fecool_demo

一个用fecool构建的demo [访问地址](https://sisimengchen.github.io/fecool_demos/)

## fecool

fecool前端工程构建工具。解决前端工程中，资源加载、依赖管理，代码合并，资源压缩、模块化开发、代码部署、访问代理、mock生成等问题

[项目源码访问](https://github.com/sisimengchen/fecool)

## 本地开发使用

host 配置 127.0.0.1 feresource.com

### 开发环境环境部署
```shell
git clone https://github.com/sisimengchen/fecool_demos.git
cd fecool_demos
npm install
```

### 开发环境环境构建
```shell
npm run dev
```

### 开发环境监听文件变化构建
```shell
npm run watch
```

### 启用开发服务器（需要打开新终端）
```shell
npm run server
```

## 生产环境构建
```shell
npm run build
```