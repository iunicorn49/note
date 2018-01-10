const http = require('http')
const config = require('./common/config.js')
const path = require('path')
const fs = require('fs')

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, './htmls/index.html'), (err, data) => {
      if (err) throw err
      res.end(data)
    })
  } else if (req.url.startsWith('/public')) {
    fs.readFile(path.join(__dirname, req.url), (err, data) => {
      if (err) throw err
      res.end(data)
    })
  }
}).listen(config.port, () => {
  console.log('请访问地址: http://127.0.0.1:1337/')
})
