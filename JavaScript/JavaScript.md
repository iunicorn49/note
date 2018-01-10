## 操作符

### in

判断某个属性是否属于某个对象, 可以是对象的具体属性, 也可以是通过prototype继承的, 返回布尔值.

```javascript
function Father(name, age) {
  this.name = name,
  this.age = age
}
Father.prototype.money = 998
function Son() {}
Son.prototype = Father.prototype
let atom = new Son
console.log('money' in atom)  //  true
```

## 内置方法

### Object

#### Object.create()

基于参数来创建一个新的对象.

### Array

#### Array.isArray()

> 判断传递的值是否是 **Array** , 返回布尔值.

`Array.isArray(obj)`

```javascript
console.log(Array.isArray([1,2,3]))  //  true
console.log(Array.isArray({foo: 123}))  //  false
console.log(Array.isArray(Function.prototype))  //  false
console.log(Array.isArray(Array.prototype))  //  true, 一般来说, 原型应该是一个对象, 但是数组的原型是一个特例, 它是一个数组
```

#### Array.from()

> 将带有 **length** 属性的东西转化为数组, json格式对象, 可以手动添加 length属性, 返回的是一个新的数组实例.

```javascript
'use strict';

let json = {
  '0': 'a',
  '1': 'b',
  length: 2 // 需要自行添加长度, 这个方法解析的是类json字符串.
}

let arr = Array.from(json);
console.log('arr:', arr); // ['a', 'b']

function fun() {
  console.log('fun', Array.from(arguments));
}
fun(1,2,3,4); // [1,2,3,4] arguments 自带 length 属性

let str = 'test';
console.log('str:', Array.from(str)); // ['t', 'e', 's', 't'] 字符串也自带 length 属性

/** 可以接受第二个参数, 回调函数, 会遍历数组作用于每个元素 */
let newArr = 'test';
Array.from(newArr, item => console.log('test:', item)); // 依次打印 t e s t

Array.from('heheda', function(item) {
  console.log('heheda:', item); // 依次打印 h e h e d a
})

console.log(Array.from(['a', 'b', , 1, 2])); // 留空的时候 将空元素自动填充 undefined

console.log(Array.from({length:3})); // 一个长度3的数组, 自动填充 undefined

console.log(Array.from({length:3}, item => 0)); // [0,0,0]
```

`Array.from(arrayLike, mapFn, thisArg)`

| 参数           | 描述                  |
| ------------ | ------------------- |
| arrayLike    | 伪数组或者可迭代对象          |
| mapFn — 可选   | 新数组中的每个元素都会执行这个回调函数 |
| thisArg — 可选 | 回调函数的 **this** 指向   |

```javascript
let str = 'atom'
let arr = Array.from(str, item => item.toUpperCase())
console.log(arr)  //  ["A", "T", "O", "M"]
```

#### Array.prototype.findIndex()

```javascript
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].findIndex(isBigEnough); 
// index of 4th element in the Array is returned,
// so this will result in '3'
```

`arr.findIndex(callback[, thisArg])`

| 参数          | 描述                           |
| ----------- | ---------------------------- |
| callback    | 回调函数                         |
| [, thisArg] | 当前元素                         |
| arr         | 调用的数组                        |
| thisArg     | 可选。执行`callback`时作为`this`对象的值 |

####Array.prototype.concat()

> 合并两个数组, 返回一个新的数组, 并不会改变原数组.



### String

#### stringWith()

```javascript
str.startsWith(searchString [, position]);
```

| 参数           | 描述                                       |
| ------------ | ---------------------------------------- |
| searchString | 要搜索的子字符串                                 |
| position     | 在 `str` 中搜索 `searchString` 的开始位置，默认值为 0，也就是真正的字符串开头处. |

```javascript
var str = "To be, or not to be, that is the question.";
alert(str.startsWith("To be"));         // true
alert(str.startsWith("not to be"));     // false
alert(str.startsWith("not to be", 10)); // true
```

## 本地存储

###方式

1. cookie

   大小: 4k .

   获取方式: 每次请求都会携带.

   生命周期: 默认是会话 cookie , 浏览器关闭就失效了, 设置过期时间.

   特性: 有路径问题, 子目录可以访问父目录的 cookie , 但是父目录无法访问子目录的 cookie , 通常设置路径为根路径.

2. sessionStorage

   大小: 5m 左右.

   获取方式: 必须手动获取, 不会自动携带, `getItem` 来获取.

   生命周期: 关闭浏览器失效, 多窗口不共享.

3. localStorage

   大小: 5m 左右.

   获取方式: 必须手动获取, 不会自动携带, `getItem` 来获取.

   生命周期: 只要不手动清除, 则永久存在, 并且多窗口共享.

###操作

####设置

```javascript
localStorage.setItem('username', 'atom');
```

####获取

```javascript
localStorage.getItem('username');
```

####删除

```javascript
localStorage.removeItem('username');
```

####设置对象

```javascript
localStorage.setItem('obj', JSON.stringify(obj));
localStorage.getItem('obj');
```

## H5方法

### dataset

```html
<input type="text" data-num="1">
<input type="text" data-num="2">
```

```javascript
let inputs = document.querySelectorAll('input')
inputs.forEach(item => {console.log(item.dataset.num)})
//  1
//  2
```

