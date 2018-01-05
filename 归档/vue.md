### vue的核心

- 双向数据绑定
- MVVM思想
- 组件化开发
- 虚拟DOM树
- 自定义指令
- 生命周期

### 常见指令

#### v-if

根据表达式在DOM中生成或移除元素, 当一个元素不经常变化时使用.

经常配合 v-else 一起使用.

#### v-show

根据表达式来控制,显示或隐藏元素, 当一个元素经常需要变化的时候使用.

#### v-model

表单元素中, 双向绑定数据.

#### v-bind

响应更新 HTML 的特性, 可以简写成 `:` .

#### v-on

绑定事件, 可以简写成 `@` . 事件都放在 **methods** 中 .

#### v-text v-html {{}}

用于实现数据绑定.

v-html会解析标签.

`{{}}` 在网速较慢的情况下会一闪而过, 可以用 **v-cloak** 来解决.

**v-cloak** 需要在 CSS 中加入 `[cloak]: {display:none}` 来使用.

### 生命周期

- beforeCreate
- created：实例创建完成
- beforeMount
- mounted: 可以获取 DOM 元素
- beforeUpdate
- updated
- beforeDestroy
- destroyed

### 创建全局组件

1. 使用 Vue.extend({}) 定义全局组件, 通过 Vue.componentd 注册到全局中.
2. 直接使用 Vue.componentd('组件名', {...组件模板}) 来定义全局组件.
3. Vue.componentd('组件名', {..组件id}) 来定义全局组件, 需要在 html页面中创建 <template> 标签, 并指定 id, 多个元素需要先用一个大容器包裹.

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