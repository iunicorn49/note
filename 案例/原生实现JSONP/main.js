let url = 'https://api.douban.com/v2/book/1220562'
let url2 = 'https://api.douban.com/v2/book/1220563'
let url3 = 'https://api.douban.com/v2/book/1220564'

function getJSONP(url, callbackName, callback) {
  window[callbackName] = data => {
    callback(data)
    document.body.removeChild(script)
    window[callbackName] = null
  }
  let src = `${url}?callback=${callbackName}`
  let script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
}
//  异步请求, 返回的顺序是不固定的
getJSONP(url, 'js1', function (data) {
  console.log(1, data)
})
getJSONP(url2, 'js2', function (data) {
  console.log(2, data)
})
getJSONP(url3, 'js3', function (data) {
  console.log(3, data)
})
