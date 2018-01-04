##第三方依赖

###jsonp

官方地址: https://github.com/webmodules/jsonp

```javascript
jsonp(url,opts,fn)
```

- url: 请求地址
- fn: 回调函数包含(err, data)参数

opts是一个配置对象

- param: 回调函数名称
- timeout: 超时时间, 默认一分钟

#### 封装成promise

