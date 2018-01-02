## 选择器

### 选择器的第二个参数

下面例子表示从 **main** 中去寻找 **<div>** , 可以略微增加性能.

```javascript
var main = $('.main');
var div = $('div', main); 
```

## ajax

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



