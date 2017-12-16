## 未整理



### 新方法

Buffer.from() 字符串转换buffer

Buffer.concat() 拼接数组里的碎片buffer

----------------

##ES6

### 关键字

| 关键字   | 描述               | 备注                 |
| ----- | ---------------- | ------------------ |
| let   | 同 **var** , 声明变量 | 遇到 `{}` 就会生成单独的作用域 |
| const | 声明常量             |                    |
|       |                  |                    |

### 动态字符串

```javascript
var name = 'atom';
var str = `${name} is the best`;
console.log(str); // atom is the best
```

### 新增方法

#### string

#####startsWith

检测目标子字符串是否是目标字符串的开头或其他地方, 返回 布尔值.

```javascript
str.startsWith(searchString [, position]);
```

| 参数           | 描述                                       |
| ------------ | ---------------------------------------- |
| searchString | 要搜索的子字符串                                 |
| position     | 在 `str` 中搜索 `searchString` 的开始位置，默认值为 0，也就是真正的字符串开头处. |

示例

```javascript
var str = "To be, or not to be, that is the question.";

alert(str.startsWith("To be"));         // true
alert(str.startsWith("not to be"));     // false
alert(str.startsWith("not to be", 10)); // true
```

## 小技巧

1. 读取文件数据时, 若文件不存在, 可以用以下方式阻止系统抛出错误, 在后续写入数据时, 再处理一并创建文件. `if (err && err.code !== 'ENOENT') throw err;`
2. 处理 **post** 请求的时候, 数据都在请求体里面, 形式为 **buffer** , 需要监听, `req.on()` 的 **data** 和 **end** .
3. 跳转页面 -  `res.writeHead(301, 'Moved Permanently', {'location' : '/'});`

## 常用第三方模块

| 名称         | 描述     |
| ---------- | ------ |
| underscore | 模板引擎   |
| mime       | 检测文件类型 |



## 内置方法

### url - 网址

#### url.parse - 拆解 url 获取对象

```javascript
url.parse('...'); // 传入 url 字符串, 返回一个对象
url.parse('...', true); // 第二个参数, 可以将对象中的 query 转换成对象
url.parse('//imooc.com/course/list', true, true); // 第三个参数, 解析模糊地址的 host
```

#### url.format - 组合 url

```javascript
url.format({...}); // 传入对象, 返回一个 url 字符串

{            
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'nodejs.cn',
  port: null,
  hostname: 'nodejs.cn',
  hash: null,
  search: null,
  query: null,
  pathname: '/api/url.html',
  path: '/api/url.html',
  href: 'http://nodejs.cn/api/url.html'
 }
```

#### url.resolve - 拼接 url

```javascript
url.resolve('http://baidu.com/','/course/list'); // 返回一个 url 字符串
```

### fs - 文件系统

> const fs = require('fs');

#### fs.writeFile - 写入文件

```javascript
fs.writeFile(file, data[, options], callback);  
```

| 参数                      | 描述   |
| ----------------------- | ---- |
| 路径                      |      |
| 数据                      |      |
| 文件编码 (可选)               |      |
| function (err, data) {} |      |

- 该操作是异步执行
- 如果文件已经存在,则覆盖
- 默认写入的文件编码为utf8
- 回调函数只有一个参数: err, 表示在写入文件的操作过程中是否出错了

#### fs.readFile - 读取文件

```javascript
fs.readFile(file, [, options], callback);
```

| 参数                      | 描述     |
| ----------------------- | ------ |
| 路径                      |        |
| 文件编码 (可选)               | 'utf8' |
| function (err, data) {} |        |

- 异步操作
- 如果读取文件时没有指定编码，那么返回的将是原生的二进制数据 <Buffer> ; 如果指定了编码，那么会根据指定的编码返回对应的字符串数据

> **Buffer** 是一个缓冲, 一种二进制数据流格式, 用于发送或者接受文件
>
> 它类似于一个数组, 每一个元素是一个 **二位十六进制** 的字节
>
> 一个汉字占三个字节
>
> 通过 **toString()** 方法可以转换成 **utf8格式**

#### fs.readFileSync - 读取文件 (同步)

```javascript
fs.readFileSync(path[, options])
```

| 参数        | 描述   |
| --------- | ---- |
| 路径        |      |
| 文件编码 (可选) |      |

由于同步没有 **err** , 无法捕捉到错误, 需要用下面的方法来捕获.

##### try…catch - 捕获异常, 抛出错误

- 同步捕获

  ```javascript
  // 一旦出错,后面的代码不执行了..
  console.log(111)

  try {
    var data = fs.readFileSync('./abcd.txt','utf8');

    console.log(data)

  }catch(err){

    // throw err
    console.log('读取时:'+err)
  }

  console.log(222)
  ```

- 异步捕获

  ```javascript
  console.log(111)

  try {

    fs.readFile(file,'utf8',function (err,data) {
      // 异步 try...catch
      // 如果正确: err 没有值  data 有值
      // 如果错误: err 有值 ,data 没有值
      // 不管怎么样,都会走这个回调方法,,, try catch 没有用
      console.log(333)
      console.log(data) // 不要拼字符串,会转化为字符串的
    })

  } catch(err){
    console.log(err)
  }

  console.log(222)
  ```

### path - 路径

> const path = require('path');

#### __dirname - 获取当前 JS 文件的路径

#### path.join - 路径拼接

```javascript
path.join([...paths]);
// 例如
path.join(__dirname, 'index.html');
```

| 参数     | 描述   |
| ------ | ---- |
| 多个路径序列 | 字符串  |

### http 

#### request

> 一个对象, 获取用户请求相关的数据.
>
> request 对象类型 <http.IncomingMessage>, 继承自stream.Readable

```javascript
request.headers // 请求头 (对象)
request.rawHeaders // 请求头 (数组)
request.httpVersion // http版本
request.method // 请求方式
request.url // 请求路径
```

#### 获取 post 数据

```javascript
req.on('data', function(chunk) {}); // 监听请求体的 data 获取碎片, 在函数里扔进数组里
req.on('end', function() {}); // 监听请求体的 end
var buffer = Buffer.concat(arr); // 将碎片组装起来, 字符串
var obj = querystring.parse(buffer); // 字符串转对象, 需要引入模块.
```

#### response

> 一个对象, 响应客户端的操作.
>
> response 对象类型 <http.ServerResponse>.

##### response.write - 写入数据

```javascript
response.write(chunk[, encoding]_[, callback]);
```

| 参数        | 描述         |
| --------- | ---------- |
| 数据        | 字符串或者二进制数据 |
| 文件编码 (可选) | 默认 utf8    |
| 回调函数 (可选) |            |

##### response.end - 结束响应

**每次响应都必须使用这个方法来结束响应.**

```javascript
response.end([data][, encoding][, callback]);
```

| 参数            | 描述         |
| ------------- | ---------- |
| 响应前发送的数据 (可选) | 字符串或者二进制数据 |
| 文件编码 (可选)     |            |
| 回调函数 (可选)     |            |

##### response.setHeader - 设置响应头

```javascript
response.setHeader(name, value);
res.setHeader('content-type','text/html;charset=utf-8');
```

| 可选 value   | 描述   |
| ---------- | ---- |
| text/plain | 纯文本  |
| text/html  | html |
| ...        |      |

##### response.statusCode - 设置或读取 http 状态码

##### response.statusMessage - 设置或读取 http 响应状态消息

参考资料:  [MDN-HTTP response status codes](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

```javascript
  // 设置响应报文头
  res.statusCode = 400;
  res.statusMessage = 'hehe'
  res.setHeader('Content-Type','text/plain;charset=utf-8')

  // 设置响应报文头  (约等于上面)
  res.writeHead(200,'OK',{
    'Content-Type':'text/plain;charset=utf-8'
  })
 
  // 写入数据,,返回给浏览器
  res.write('哈哈哈')

  // 结束响应
  res.end('over')
```

##### response.writeHead - 设置响应头信息

```javascript
response.writeHead(statusCode [, statusMessage]_[, headers]);
```

| 参数   | 描述           |
| ---- | ------------ |
| 状态码  | 200, 300 等   |
| 状态信息 | 200 对应 ok    |
| 响应头  | Content-type |

```javascript
res.writeHead(200, 'OK', {
  'Content-Type': 'text/html; charset=utf-8',
  'Content-Length': Buffer.byteLength(msg)
});
```

- 这个方法每次响应前度必须被调用且只有一次, 必须在 **end** 方法之前.
- 如果在调用 **writeHead** 方法之前调用了 **write** 或 **end** 方法，系统会自动帮你调用writeHead()方法，并且会生成默认的响应头.


## 案例

### 开启简易服务器

```javascript
'use strict';
const http = require('http'); // 引入模块
const port = 1337; // 端口号
var html_ = '<meta charset="UTF-8">';
    html_ += '<h1 style="color:#ff5d5d;">你好呀</h1>';

// 创建服务器
http.createServer(function(req, res) {
  // 设置响应头
  res.writeHead(200, {'content-type': 'text/html'});
  // 设置响应体
  res.write(html_);
  // 结束响应
  res.end();
}).listen(port, function() { // 监听服务器
  console.log(`服务器已开启, 请访问: http://127.0.0.1:${port}`);
})
```

### 自定义模块

> 在node环境中, **js文件** 后缀是可以省略, 每一个 **js文件** 都是一个单独的模块.

server.js

```javascript
'use strict';
const test = require('./test'); // 引用自定义模块, 需要写路径, 后缀 js 可以省略
test.fun(); // 调用模块
```

test.js

```javascript
function fun() {
  console.log('测试模块');
}

// module.exports.fun = fun; // 抛出模块
exports.fun = fun; // module 可以 省略
```

### url模块

```javascript
'use strict';
const url = require('url');
var addr = 'https//127.0.0.1/test?name=atom&pwd=1334#top'; // 伪造的网址

var uParse = url.parse(addr); // 解析 url 地址, 返回一个对象

var data = { // 上面解析出来的对象
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: '#top',
  search: '?name=atom&pwd=1334',
  query: 'name=atom&pwd=1334',
  pathname: 'https//127.0.0.1/test',
  path: 'https//127.0.0.1/test?name=atom&pwd=1334',
  href: 'https//127.0.0.1/test?name=atom&pwd=1334#top' }

var uFormat = url.format(data); // 重组地址
console.log(uFormat);
// https//127.0.0.1/test?name=atom&pwd=1334#top

var uResolve = url.resolve('http://', 'www.baidu.com'); // 拼接地址
console.log(uResolve);
// http:///www.baidu.com
```

### 路由

> 根据url地址的后缀不同, 访问不同的页面.

```javascript
'use strict';
const http = require('http');
const url = require('url');
const port = 1337;

http.createServer(function(req, res) {
  let path_ = url.parse(req.url).pathname; // 获取请求路径
  // 根据路径做出分支
  switch (path_) {
  case '/': // 首页
    res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
    res.end('首页');
    break;
  case '/about': // about
    res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
    res.end('关于');
    break;
  case '/news': // news
    res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
    res.end('新闻');
    break;
  default: // 404
    res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
    res.end('404');
    break;
  } // switch end

  res.end();
}).listen(port, function() {
  console.log(`服务器开启, 端口号: ${port}`);
})
```

### fs模块

#### 文件读取

> 同步请求总在异步请求之前执行.

test.js

```javascript
Hello World !!!
```

server.js

```javascript
'use strict';
const fs = require('fs');

/**
 * 路径必须写后缀
 * 异步请求
 */
fs.readFile('./test.js', function(err, data) {
  if (err) throw err;
  console.log(data.toString() + '异步');
})

/**
 * 同步请求, 这个会先输出
 */
var str = fs.readFileSync('./test.js').toString();
console.log(str + '同步');
```

#### 文件写入

test.js

```Javascript
0 原始内容
```

server.js

```javascript
'use strict';
const fs = require('fs');

fs.appendFile('./test.js', '1 第一次写入, 异步 \n', function(err, data) {
  if (err) throw err;
  console.log('success');
})

fs.appendFileSync('./test.js', '2 第二次写入, 同步 \n');
```

#### 文件操作权限

| 参数   | 描述                               |
| ---- | -------------------------------- |
| r    | 以读取模式打开文件                        |
| r+   | 以读写模式打开文件                        |
| rs   | 使用同步模式打开并读取文件. 指示操作系统忽略本地文件系统缓存. |
| rs+  | 以同步的方式打开, 读取 并 写入文件.             |
| w    | 以读取模式打开文件, 如果文件不存在则创建.           |
| wx   | 同上, 文件不存在时, **返回失败** .           |
| w+   | 以读写模式打开文件, 如果文件不存在则创建.           |
| wx+  | 同上, 文件不存在时, **返回失败** .           |
| a    | 以追加模式打开文件, 如果文件不存在时则创建.          |
| ax   | 同上, 文件不存在时, **返回失败** .           |
| a+   | 以读取追加模式打开文件, 如果文件不存在时则创建.        |
| ax+  | 同上, 文件不存在时, **返回失败** .           |
| mode | 用于创建文件时制定权限, 默认 **0666** .       |

test.js

```javascript
Hello World !!!
```

server.js

```javascript
'use strict';
const fs = require('fs');

fs.open('./test.js', 'rs+', function(err, file) {
  if (err) throw err;
  let str = fs.readFileSync(file).toString();
  console.log(str, '读取成功');
  fs.appendFileSync(file, '写入成功');
});
```

#### 文件名修改和删除

> 需要自己准备测试文件, test.js

#####修改

```javascript
'use strict';
const fs = require('fs');

/**
 * 修改文件 异步
 */
fs.rename('test.js', 'testNew.js', function(err) {
  if (err) throw err;
  console.log('success');
})

/**
 * 修改文件 同步
 */
// fs.renameSync('test.js', 'testNew.js');
```

#####删除

```javascript
'use strict';
const fs = require('fs');

/**
 * 删除文件 异步
 */
fs.unlink('test.js', function(err) {
  if (err) throw err;
  console.log('success');
})

/**
 * 删除文件 同步
 */
// fs.unlinkSync('test.js');
```

#### 文件检测和创建文件

```javascript
'use strict';
const fs = require('fs');

/**
 * 检测并创建
 */
fs.exists('test.js', function(file) {
  if (!file) {
    fs.open('test.js', 'w', function(err) { // 打开目标文件, 如果没有就创建.
      if (err) throw err;
      console.log('success');
    })
  } else {
    console.log('no');
  }
})
```

#### 读取网页模板

自行准备 html文件.

```javascript
'use strict';
const http = require('http');
const fs = require('fs');

let html = fs.readFileSync('./index.html');

http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write(html);
  res.end();
}).listen(3000, function() {
  console.log('success');
})
```

#### 读取文件目录

自行准备目录, 以及下面的文件.

##### 读取当前目录, 获取某个目录的详细信息

> 返回值: 对象.

```javascript
'use strict';
const fs = require('fs');

/**
 * 读取当前目录
 */
fs.stat('test', function(err, data) {
  console.log(data);
});
// var Stats = { // 拿到的对象
//   dev: 16777220,
//   mode: 16877,
//   nlink: 3,
//   uid: 501,
//   gid: 20,
//   rdev: 0,
//   blksize: 4194304,
//   ino: 8592432208,
//   size: 96,
//   blocks: 0,
//   atimeMs: 1513238860724.4377,
//   mtimeMs: 1513238860603.2942,
//   ctimeMs: 1513238860603.2942,
//   birthtimeMs: 1513238854578.3784,
//   atime: 2017-12-14T08:07:40.724Z,
//   mtime: 2017-12-14T08:07:40.603Z,
//   ctime: 2017-12-14T08:07:40.603Z,
//   birthtime: 2017-12-14T08:07:34.578Z }

/** 同步读取 */
// fs.statSync('test');
```

##### 读取目标目录, 获取目标目录下的文件

> 返回值: 数组.

```javascript
'use strict';
const fs = require('fs');

/**
 * 读取目标目录, 返回目录中的文件 (数组)
 */
fs.readdir('test', function(err, data) {
  if (err) throw err;
  console.log(data); // [ 'test01.html' ]
})


/**
 * 同步读取
 */
console.log(fs.readdirSync('test')); // [ 'test01.html' ]
```

### path模块
