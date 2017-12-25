## 概览



##方法

###res

####res.send - 结束请求

#####end 和 send 的区别

| 区别   | end                              | send                                     |
| ---- | -------------------------------- | ---------------------------------------- |
| 结束响应 | ok                               | ok                                       |
| 乱码问题 | 不设置响应头的情况下, 会出现乱码问题.             | 不能存在乱码问题, **send** 方法在内部处理了很多问题, 直接调用即可. |
| 返回型  | 只能发送: 字符串, buffer.<br />直接输出至页面. | buffer: 直接下载.<br />字符串: 直接输出至页面. <br />数组: 直接输出至页面.<br />对象: 直接输出至页面. |


####res.redirect([status,]path) - 重定向

```javascript
res.redirect(301, url);
```

#### res.sendFile(path[,options]…[,fn]) - 读取文件

#### res.status() - 设置状态

```javascript
res.status(404).send('访问的页面不存在');
```

