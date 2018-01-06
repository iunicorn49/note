function jsonp(options) {
  //  给函数指定名字
  window[options.callbackName] = data => {
    console.log(data)  //  拿到服务器的返回数据
    window[options.callbackName] = null  //  将全局名称指向 null
    document.body.removeChild(script)  //  删除标签
  }
  const script = document.createElement('script')
  script.src = `${options.url}?callback=${options.callbackName}`
  document.body.appendChild(script)
}
jsonp({
  callbackName: 'jsonp',  // 这个方法是直接给全局调用的,因此需要设置函数名
  url: 'https://api.douban.com/v2/book/1220562'  //  测试地址, 豆瓣api
})
