// 创建一个 XMLHttpRequest 实例
let xhr = new XMLHttpRequest
// 设置请求行, get请求需要带参数, post请求则将参数放在请求体中, open方法第三个参数默认为 true 执行异步请求
// 参数一请求方式, 参数二请求地址, 参数三是否异步: 默认 true
xhr.open('GET', './server.php', true)
// 如果是post请求需要设置请求头, 不然后端无法解析数据
// xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
// 发送请求体, get请求不需要, 设置为 null, 请求体一定要在监听响应事件之前设置, 不然可能导致无法接受响应
xhr.send(null)
// 监听状态
xhr.onreadystatechange = function () {
  let result = null
  if (this.readyState === 4 && this.status === 200) {
    // 获取响应体
    result = this.responseText
    console.log(result)
  }
} // onreadystatechange end
