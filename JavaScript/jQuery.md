## 选择器

### 选择器的第二个参数

下面例子表示从 **main** 中去寻找 **<div>** , 可以略微增加性能.

```javascript
var main = $('.main');
var div = $('div', main); 
```

## ajax

### 配置

| 参数          | 描述        | 备注                      |
| ----------- | --------- | ----------------------- |
| url         | 请求地址      | 字符串                     |
| async       | 是否异步      | 默认为true, 执行异步           |
| type        | 请求方式      | get,post,put等           |
| data        | 发送数据      |                         |
| contentType | 发送请求的数据格式 | post请求需要用到              |
| dataType    | 接受的数据格式   | html, xml, json, text 等 |



### 全局方法

下面表示当页面中产生 **ajax** 请求时触发.

```javascript
 $(document).ajaxStart(function(){
   //code
 });
```

| 名称           | 描述   | 备注   |
| ------------ | ---- | ---- |
| ajaxStart    | 开始   |      |
| ajaxStop     | 结束   |      |
| ajaxSuccess  | 成功   |      |
| ajaxComplete | 完成   |      |

### serialize()

自动将表单中的所有带有属性 **name** 的元素, 提取出来拼成字符串.

```javascript
$(form).serialize();
```



## 给jQuery拓展方法

1. 给 `$.fn` 绑定函数, 实现插件的代码逻辑.
2. 插件函数最后要 `return this` 支持链式调用.
3. 插件函数要有默认值, 绑定在 `$.fn.<pluginName>.defaults` 上.
4. 用户在调用时可传入设定值以便覆盖默认值.

###$.fn

> 通过 **fn** 方法拓展, 定义完以后, 所有 **jquery对象** 皆可使用这个方法.

```javascript
$(selector).fn.funName = function () {
  // code...
  return this // 返回一个jquery对象, 以便后续的链式调用
}
```

### $.extend

> 通过 **extend** 辅助配置自定义方法的默认参数.

```javascript
$.fn.highlight = function (options) {
    // 合并默认值和用户设定值: 后面的(options)会覆盖前面的默认值
    var opts = $.extend({}, $.fn.highlight.defaults, options);
    this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
    return this;
}

// 设定默认值:
$.fn.highlight.defaults = {
    color: '#d85030',
    backgroundColor: '#fff8de'
}
```

