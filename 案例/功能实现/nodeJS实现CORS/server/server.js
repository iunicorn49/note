const http = require('http')
const data = {
  code: 0,
  msg: '来自端口8080的数据',
  list: [
    {name: 'zlk', age: 23},
    {name: 'atom', age: 24}
  ]
}

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:1337')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With')
  res.end(JSON.stringify(data))
}).listen(8080, () => {
  console.log('服务器地址: http://127.0.0.1:8080/')
})
