## 配置

####win

> 端口号: 27017
>
> 目录名字写死的

1. 创建目录 `c:\data\db\` .
2. 开启服务器: **bash** 中输入 `mongod` .
3. 关闭服务器: `ctrl + c` .
4. 使用中, 不能关闭终端, 需要另外开启一个终端, 用于操作.
5. 连接服务器: **bash** 中输入 `mongo` .

#####自定义配置

1. 创建自己的目录
2. 开启数据库: **bash** 中输入 `mongod --dbpath 自己的路径`  .
3. 连接他人的数据库: **bash** 中输入 `mongo --host 目标服务器地址 --port 27017`  .

####mac

1. 创建 `/data/db` . **bash** 中输入 `sudo mkdir -p /data/db` .
2. 开启服务器: **bash** 中输入 `sudo mongod` .
3. 关闭服务器: `ctrl + c` .
4. 使用中, 不能关闭终端, 需要另外开启一个终端, 用于操作.
5. 连接服务器: **bash** 中输入 `mongo` .

##### 自定义配置 - 同 win

## 语法

### 基础命令

```bash
show dbs # 查看所有数据库
use 库名 # 切换/创建数据库
db # 查看当前数据库
show collections # 查看当前数据库里的所有集合
db.集合名称.insertOne(数据文档) # 创建集合并插入一条数据
db.集合名称.insertMany(数据文档) # 创建集合并插入多条数据(数组)
db.集合名称.find() # 查看集合所有数据
db.集合名称.find().pretty() # 查看集合所有的数据(格式化后)
db.集合名称.remove({删除条件}) # 删除数据
db.集合名称.drop() # 删除集合
db.dropDatabase() # 删库, 需要先进库
```

#####db.集合名称.find(条件)

| 条件               | 描述     | 备注                                   |
| ---------------- | ------ | ------------------------------------ |
| {key:value}      | 单个条件查询 |                                      |
| gt: greater than | 大于     | `{age:{$gt:10}}` , `{age:{$gte:10}}` |
| lt: less than    | 小于     |                                      |
| e: equal         | 等于     |                                      |
| ne: not equal    | 不等于    |                                      |

#####db.集合名称.update({更新条件},{$set:{要更新的字段}})

```bash
db.testList.update({age:25},{$set:{age:30}}) # 更改一条
db.test.update({age:10},{$set:{name:'atom'}},{multi:true}) # 更改多条
db.testList.update({age:{$lte:30}},{$set:{name:'less'}},{multi:true})
```

## Node.js  操作 mongoDB

### 连接数据库模板

```javascript
/** 驱动 mongodb
 * 开启服务器的终端不要关闭
 * 1. 引入模块
 * 2. 获取连接对象
 * 3. 获取连接数据库服务器的地址
 * 4. 开始连接
 */
const mongodb = require('mongodb');
let mc = mongodb.MongoClient; // 获取连接对象
let url = 'mongodb://127.0.0.1:27017'; // 获取连接地址
mc.connect(url, function(err, client) { // 开始连接
  if (err) throw err;
  console.log('mongod success');
}) // mc.connect end
```

### 插入单条数据

```javascript
  /** 获取数据库.获取集合.插入单条数据*/
  // client.db('test').collection('demo').insertOne({name:'atom',age:20}, function(err) {
  //   if (err) throw err;
  //   client.close(); // 一定要先关闭数据库
  //   console.log('insertOne end');
  // });
```

### 插入多条数据

```javascript
  /** 插入多条数据 */
  // let insertArr = [{name: 'lick',age: 180},{name: 'godan',age: 200}];
  // client.db('test').collection('demo').insertMany(insertArr, function(err) {
  //   if (err) throw err;
  //   client.close();
  //   console.log('insertMany end');
  // })
```

### 查询所有数据

```javascript
  /** 查询所有数据, find里可以传入条件 */
  // client.db('test').collection('demo').find().toArray(function(err, data) {
  //   if (err) throw err;
  //   client.close();
  //   console.log(data);
  // })
```

### 查询一条数据

```javascript
  /** 查询单条数据, 如果有多条数据符合条件, 则返回最上面的一条 */
 client.db('test').collection('demo').findOne({name:'lick'},function(err, data) {
    if (err) throw err;
    client.close();
    console.log(data);
  })
```

### 替换

```javascript
// 第一个参数条件, 第二参数替换的数据
client.db('test').collection('demo').update({age: 25},{age:180}, function(err) {
  client.close();
  console.log('success');
})
```

### 更新一条数据

```javascript
client.db('test').collection('demo').update({age: 180},{$set:{name:'bigboss'}}, function(err) {
  client.close();
  console.log('success');
})
```

### 更新多条数据

```javascript
// 记得是 updateMany
client.db('test').collection('demo').updateMany({age: 180},{$set:{name:'snake'}}, function(err) {
  client.close();
  console.log('success');
})
```

### 删除一条数据

```javascript
// 删除数据
client.db('test').collection('demo').deleteOne({name:'snake'},function(err) {
  if (err) throw err;
  client.close();
  console.log('delete');
})
```

