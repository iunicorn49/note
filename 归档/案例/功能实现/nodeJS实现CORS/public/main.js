let xhr = new XMLHttpRequest
xhr.open('GET', 'http://127.0.0.1:8080/server/server.js')
xhr.send(null)
xhr.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    console.log(JSON.parse(this.responseText))
  }
}
