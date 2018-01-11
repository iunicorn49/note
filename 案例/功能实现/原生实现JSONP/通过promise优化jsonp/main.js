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

// 通过promis封装可以进行同步请求以及链式调用
function syncJsonp(url) {
  return new Promise((resolve, reject) => {
    jsonp({
      url,
      time: 3000,
      success(data) {resolve(data)},
      error() {reject('获取失败')}
    })
  })
}

let url1 = 'https://api.douban.com/v2/book/1220562'
let url2 = 'https://api.douban.com/v2/book/122056' // 这是一个错误的地址,获取不到数据
let url3 = 'https://api.douban.com/v2/book/1220564'

syncJsonp(url1)
  .then(data => {
    console.log(1,data)
    return syncJsonp(url2)
  }, err => {
    console.log(1,err)
    return syncJsonp(url2)
  })
  .then(data => {
    console.log(2,data)
    return syncJsonp(url3)
  }, err => {
    console.log(2,err)
    return syncJsonp(url3)
  })
  .then(data => {
    console.log(3,data)
  }, err => {
    console.log(3,err)
  })
