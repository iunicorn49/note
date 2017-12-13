##ES6

### 动态字符串

```javascript
var name = 'atom';
var str = `${name} is the best`;
console.log(str); // atom is the best
```



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

