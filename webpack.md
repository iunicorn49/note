## webpack

**webpack** 是一种预编译模块化处理方案. 可以实现代码分离, 按需加载, 以及静态资源的模块化处理.

- **在线编译方案:** 例如 **requirejs** , 上线项目的时候, 需要依赖这个文件.
- **预编译方案:** 就是 **webpack** , 仅在开发期间使用, 项目上线后不需要使用, 开发完成后, 所有文件都会被打包成静态资源, 他们相互没有任何依赖关系.

**JS模块化方案**

- ES2015: import => export
- CommonJS: require() => module.exports
- AMD: define => require

**其他静态资源的模块化方案**

- css/sass/less: @import
- 图片链接: url , src , 等
- 字体

### 语法

#### 命令行

打包

```bash
webpack 初始文件地址 目标文件地址
webpack ./src/js/main.js ./dist/bundle.js #会输出到命令行所启动的目录
```

#### 配置文件用法

1. 在项目根目录创建 **webpack.config.js** 文件, 其中不能用 **ES6** 的模块化语法, 这个文件基于 **nodejs** .
2. 在项目根目录 使用 命令行 webpack 即可.

> webpack.config.js

```javascript
const path = require('path');
// webpack的配置对象, 就是下面导出的对象
module.exports = {
  // 入口, 一般写绝对路径
  entry: path.join(__dirname, './src/js/main.js'),
  // 出口
  output: {
    // 生成到目标目录
    path: path.join(__dirname, './dist'),
    // 文件名称
    filename: 'bundle.js'
  }
}
```

webpack-dev-server

下载

```bash
npm i -D webpack-dev-server
```

在根目录创建并配置 webpack.config.js

```javascript
const path = require('path');
// webpack的配置对象, 就是下面导出的对象
module.exports = {
  // 入口, 一般写绝对路径
  entry: path.join(__dirname, './src/js/main.js'),
  // 出口
  output: {
    // 生成到目标目录
    path: path.join(__dirname, './dist'),
    // 文件名称
    filename: 'bundle.js'
  }
}
```

配置 package.json

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open --contentBase ./src --hot"
  },
#指定命令 --open 自动开启浏览器 --contentBase ./path 切换开启路径 --hot 热更新
```

启动脚本

```bash
npm run dev
```

### html-webpack-plugin

自动引入静态资源

```bash
npm i -D html-webpack-plugin
```

### loader - 加载器

```bash
npm i -D style-loader css-loader
```

在 **webpack.config.js** 中添加如下配置

```javascript
  module: {
    rules: [
      // test 配置项 正则表达式, 被匹配项使用 use 中的 loader 来处理
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
    ],
  },
```

## 示例

###基础配置示例

> webpack.config.js

```javascript
const path = require('path');
const webpack = require('webpack');
// 导入插件
const htmlWebpackPlugin = require('html-webpack-plugin');
// webpack的配置对象, 就是下面导出的对象
module.exports = {
  // 入口, 一般写绝对路径
  entry: path.join(__dirname, './src/js/main.js'),
  // 出口
  output: {
    // 生成到目标目录
    path: path.join(__dirname, './dist'),
    // 文件名称
    filename: 'bundle.js'
  },
  // 配置 webpack-dev-server
  devServer: {
    // 由于用插件渲染虚拟html的缘故,下面的配置暂时不需要
    // contentBase: './src',
    open: true,
    hot: true,
    port: 3000,
  },
  // 配置插件
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 通过 template 指定模板路径
    // 作用: 该插件会根据我们指定的模板路径, 在内存中生成一个与模板一样的HTML文件, 并且, 自动导入我们在项目中使用的JS文件,css文件等.
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
  ],
}
```

> package.json

```json
{
  "name": "webpackDemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^2.30.1",
    "webpack": "^3.10.0",
    "webpack-dev-server": "^2.9.7"
  },
  "dependencies": {
    "jquery": "^3.2.1"
  }
}
```

