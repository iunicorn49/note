let son = {
  template: '#son',
  data() {return {sonMsg: 'son'}},
  methods: {
    sonFn() {
      this.$emit('send', this.sonMsg)
    }
  },
  created() { // 创建完成后,直接把father组件的fatherMsg的数据改掉了
    this.$emit('send', this.sonMsg)
  }
}

let father = {
  template: '#father',
  data() {return {fatherMsg: 'father'}}, // 组件创建完成时,数据就已经被修改了
  components: {son},
  methods: {
    faFn(data) {
      this.fatherMsg = data
    }
  }
}

let app = new Vue({
  el: '#app',
  components: {
    father
  }
})
