##疑问

- mac 和 window 下, 怎么管理npm和homebrew下载的东西, 如何一劳永逸的解决下载路径 (现在下载到它自己默认的文件夹, 怎么改成自己设置的文件夹) 的问题.
- Xcode好用吗.

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

## 设置字符集

```javascript
res.setHeader('content-type','text/html;charset=utf-8');
```

| 参数         | 描述   |
| ---------- | ---- |
| text/plain | 纯文本  |
| text/html  | html |

## 内置方法

### url

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

### fs - 文件

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

