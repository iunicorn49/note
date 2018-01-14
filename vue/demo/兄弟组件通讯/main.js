let Bus = new Vue

let send = {
  template: '#send',
  data() {return {faMsg: 'send'}},
  created() { // 如果需要组件创建完成就完成数据传输,需要在html中,将数据接收方放在数据发送方的上面,这个结构暂时无解
    this.faSend()
  },
  methods: {
    faSend() {
      Bus.$emit('faToSon', this.faMsg)
    }
  }
}

let get = {
  template: '#get',
  data() {return {sonMsg: 'get'}},
  created() {
    Bus.$on('faToSon', data => this.sonMsg = data)
  },
}

let app = new Vue({
  el: '#app',
  components: {
    send,
    get
  }
})
