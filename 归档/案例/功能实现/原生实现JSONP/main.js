let url1 = 'https://api.douban.com/v2/book/1220562'
let url2 = 'https://api.douban.com/v2/book/1220563'
let url3 = 'https://api.douban.com/v2/book/1220564'

function jsonp(options) {
  let callbackName = options.callbackName ? options.callbackName : 'callbackName' // 设置回调函数名称(可选),如果不通过Promise进行同步请求必须设置
  let src = `${options.url}?callback=${callbackName}` // 设置script标签的src地址
  if (options.time) { // 可以选择设置请求超时时间,用来监测jsonp的错误
    var timer = setTimeout(() => { // let会导致块级作用域,为了后续能监测到timer,这里用var
      document.body.removeChild(script)
      window[callbackName] = null
      options.error && options.error()
    }, options.time)
  }
  let script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
  window[callbackName] = data => {
    if (options.time) clearTimeout(timer)
    document.body.removeChild(script)
    window[callbackName] = null
    options.success && options.success(data)
  }
}

//  异步请求, 返回的顺序是不固定的
jsonp({
  url: url1,
  time: 3000,
  callbackName: 'jsonp1',
  success(data) {console.log(1,data)},
  error() {console.log(1,'获取失败')}
})
jsonp({
  url: url2,
  time: 3000,
  callbackName: 'jsonp2',
  success(data) {console.log(2,data)},
  error() {console.log(2,'获取失败')}
})
jsonp({
  url: url3,
  time: 3000,
  callbackName: 'jsonp3',
  success(data) {console.log(3,data)},
  error() {console.log(3,'获取失败')}
})
