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

