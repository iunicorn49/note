let url1 = 'https://api.douban.com/v2/book/1220562'
let url2 = 'https://api.douban.com/v2/book/1220563'
let url3 = 'https://api.douban.com/v2/book/1220564'

function getJSONP(options, callback) {
  let callbackName = options.callbackName ? options.callbackName : 'JSONP'  //  函数名其实无所谓,可以不传,只要有名字就可以
  window[callbackName] = data => {
    callback(data)
    document.body.removeChild(script)
    window[callbackName] = null  //  拿到结果后将这个属性清空留给以后的jsonp请求使用
  }
  let src = `${options.url}?callback=${callbackName}`
  let script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
}

function changePromise(url) {
  return new Promise((resolve, reject) => {
    getJSONP({url}, data => {
      resolve(data)
    })
  })
}

//  经过promise封装实现链式调用, 并保证顺序
changePromise(url1, 'js1')
  .then(data => {
    console.log(data)
    return changePromise(url2, 'js2')
  })
  .then(data => {
    console.log(data)
    return changePromise(url3, 'js3')
  })
  .then(data => {
    console.log(data)
  })
