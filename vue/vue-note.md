##文档概述

### vue的核心

vue.js 只给予开发者最核心的功能, 所以非常轻便, 拓展功能需要配合其他插件或者第三方库.

- 双向数据绑定
- MVVM思想
- 组件化开发
- 虚拟DOM树: 页面中你所看到的结构都是被 vue 编译过, 并不是代码中写的.
- 自定义指令
- 生命周期: 每一个 vue 实例都有自己的声明周期, 从被创建到被卸载.

### 常见指令

- v-text: 解析文本.

- v-html: 可以解析标签.

- v-show: visibility, 元素经常改变时使用, 元素存在于 DOM树中.

- v-if: display, 元素不经常改变时使用, 元素直接在 DOM树中被移除或创建.

- v-else v-else-if: 配合上面.

- v-for: 循环, `(item, index) in Array` 或 `(val, key, index) in Object`  , `:key` : 相当于给每一项绑定一个唯一的 **ID标识** , 以后列表发生重排时更加高效.

- v-on: 绑定事件, 可以简写成 `@` , 可以添加修饰符, 可以直接给事件传值.

- v-bind: 动态绑定一个或多个特性, 可以简写成 `:` , 绑定 `style` 或 `class` 的时候, 可以传入简单的表达式.

  ```html
  <div :class="{ red: isRed }"></div>
  <div :class="[classA, classB]"></div>
  <div :class="[classA, { classB: isB, classC: isC }]">
  ```

- v-model: 给表单控件绑定值, 值存在于 `data` 中, 只有创建实例时设定的属性是响应式的.

- v-pre: 禁止 Vue 编译这个元素, `{{}}` 会直接被输出, 可以提高效率.

- v-cloak: 解决 `{{}}` 有时会一闪而过的情况, 需要配合 CSS `[v-cloak]:{display:none;}` 来使用, 本质就是,  Vue 编译完毕, 才让元素在dom中显示.

- v-once: 让元素只被渲染一次, 可以提高性能.

### 特殊特性

- key: https://cn.vuejs.org/v2/guide/list.html#key
- ref: https://cn.vuejs.org/v2/api/#ref
- slot: https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9
- slot-scope: 作用域插槽, 2.5.0 版本中新增
- is: https://cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6

### 生命周期

钩子函数的 **this** 指向调用它的实例, 不要使用 **箭头函数** , 会使 **this** 失效.

####钩子函数

- beforeCreate: 在实例初始化之后, 数据观测和 **event/watch** 之前.
- created: 实例创建完成, 可以用于触发请求等行为. 可以观测数据, 使用 **watch/event** , 但是还没开始挂载, 无法获取 `$el` .
- beforeMount: 挂载之前, `render` 被调用, 这个钩子在服务器端渲染不被调用.
- mounted: 可以获取 DOM 元素.
- beforeUpdate: 数据更新时调用, 但是 `DOM` 还没重新渲染, 可以进一步进行数据操作, 而不会重复渲染 `DOM` .
- updated: `DOM` 被更新, 可以在这里继续执行 `DOM` 操作, 但是不推荐.
- activated: `keep-alive` 组件激活时调用.
- deactivated: `keep-alive` 组件停用时调用.
- beforeDestroy
- destroyed

### 组件 (component)

####创建组件

1. 全局: `Vue.component`
2. 局部: 在容器实例中,  **components** 下配置.

```html
<div id="app">
  <father></father>
  <son></son>
</div>
<template id="father">
  <h1>the father</h1>
</template>
<template id="son">
  <span>It's son</span>
</template>
```

```javascript
Vue.component('father', {
  template: '#father'
})
let son = {template: '#son'}
let app = new Vue({
  el: '#app',
  components: {son}
})
```

#### 通信

##### 父子通信

父组件通过 `v-bind` 将数据绑定到子组件上.

子组件通过 `props` 拿到数据, `props` 是一个数组.

```html
<div id="father">
  <input type="text" v-model="msg">
  <son :from="msg"></son>
</div>
<template id="son">
  <h1>{{from}}</h1>
</template>
```

```javascript
let son = {
  template: '#son',
  props: ['from']
}
let father = new Vue({
  el: '#father',
  data: {msg: 'hello'},
  components: {son}
})
```

##### 子父通信

结构上, 父组件将自己的事件通过一个中间事件绑定到子组件上.

子组件通过自己的事件触发 `$.emit` , 这个方法可以通过中间事件将自己的数据抛出, 并触发父组件的事件, 从而拿到数据.

```html
<div id="father">
  <son @fn="get"></son>
  <h1>{{msg}}</h1>
</div>
<template id="son">
  <input type="text" v-model="sonMsg" @keyup="push">
</template>
```

```javascript
let son = {
  template: '#son',
  data() {return {sonMsg: 'hello'}},
  created() {this.$emit('fn', this.sonMsg)},
  methods: {push() {this.$emit('fn', this.sonMsg)}}
}
let father = new Vue({
  el: '#father',
  data: {msg: ''},
  components: {son},
  methods: {get(data) {this.msg = data}}
})
```

##### 兄弟通信

通过事件总线, 一个空的 vue 实例.

`$emit` 将数据抛出, 另一方, 通过 `$on` 接受.

```html
<div id="app">
  <first></first>
  <second></second>
</div>
<template id="first">
  <input type="text" v-model="firMsg" @keyup='push'>
</template>
<template id="second">
  <h1>{{secMsg}}</h1>
</template>
```

```javascript
let bus = new Vue
let first = {
  template: '#first',
  data() {return {firMsg: 'hello'}},
  mounted() {bus.$emit('fn', this.firMsg)},
  methods: {
    push() {bus.$emit('fn', this.firMsg)}
  }
}
let second = {
  template: '#second',
  data() {return {secMsg: ''}},
  created() {
    let that = this
    bus.$on('fn', function (data) {
      that.secMsg = data
    })
  }
}
let app = new Vue({
  el: '#app',
  components: {first, second}
})
```

###计算属性与观察者 (computed & watch)

文档: https://cn.vuejs.org/v2/guide/computed.html

所有复杂的逻辑运算, 应该使用 **computed** , 它会将结果保存在内存中, 可以提升性能.

**watch** 则是, 当被绑定的数据变化时就触发相应的行为.

##面试题

### 如何发起请求

vue-resource.

现在常用vue2.0版本, 我们用官方推荐的 axios, 如果要发起跨域请求的话, 会使用第三方包, 如 jsonp.

### 什么是路由

官方提供 vue-router 插件

通过 `#` 哈希值, 来切换当前页面里的组件.

在组件中引入 <router-view> 标签.

### 什么是 vuex

是一个数据仓库, 通过 `state` 来存储页面中的数据, 而且提供了`motation` 方法来处理异步事件, `motation` 来处理同步事件.

### 双向数据绑定原理

通过ES5的语法 `Object.defineProperty` 来劫持每个属性的 `getter` 和 `setter` .