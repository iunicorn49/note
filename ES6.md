## 关键字

| 关键字   | 描述   | 备注                                       |
| ----- | ---- | ---------------------------------------- |
| let   | 声明变量 | 一个作用域中不允许出现同名变量, `{}` 可以生成作用域. 不会进行变量提升. |
| const | 声明常量 | 定义的时候必须赋值,同一个作用域中只允许声明一次, 并且不允许被改变, 声明对象和数组的时候, 可以被拓展, 值也允许被改变, 不会提升, 常量一般用大写字母表示. |

### 方法

#### Array

##### Array.from()

> 将带有 **length** 属性的东西转化为数组, json格式对象, 可以手动添加 length属性.

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

## 新增

###  解构赋值

> 按照一定结构进行 **单个/多个** 变量的赋值.
>
> 可以用 数组 和 json 格式来赋值, 但是并不是真正的 数组 或 json格式 .

```javascript
'use strict';

let [a,b,c] = [1,2,3];
console.log("a:", a); // 1
console.log("b:", b); // 2
console.log("c:", c); // 3

let [a2,[b2],c2] = ['A',['B'],'C'];
console.log("a2:", a2); // A
console.log("b2:", b2); // B
console.log("c2:", c2); // C

let {a3} = {a3:1};
console.log("a3:", a3); // 1

/** 在 undefined 的情况下, 将会由默认值 1 进行赋值 */
let [z = 1] = [];
console.log("z:", z); // 1

/**
 * 一个函数只允许有一个返回值.
 * 但是可以利用结构赋值, 一次性返回多个值.
 */
function fun([fna, fnb, fnc]) {
  return [fna, fnb, fnc];
}

/** 只接受对象的部分属性 */
function user({name, age}) {
  console.log(name,age);
}
let userObj = {
  name: 'atom',
  age: 24,
  hobby: 'sleep',
  say: 'hello'
}
user(userObj);
```

### 箭头函数

> 带有返回值的函数的简写.

```javascript
'use strict';

let fun = function(a) {
  return a;
}

let fun2 = (a) => 1;

console.log('fun',fun(1));
console.log('fun2',fun2(1));

let fun3 = (a, b) => a + b;

/** 返回一个对象, 由于 {} 代表一个单独的作用域, 需要将其用 () 包裹变成表达式, 否则会编译失败 */
let objFun = (a, b) => ({name:a ,age:b});
console.log(objFun('atom', 25));

/** 部分使用场景 */
setTimeout(() => {
  console.log('hehe');
}, 1000);

/** 只有一个参数的时候, 小括号 可以省略
 * 函数只有一行的情况下, 大括号 和 return也可以省略
 */

let arr = [1,2,3,4,5];

// arr = arr.map(function(item) {
//   return item + 10;
// })

arr = arr.map(item => item + 10);
console.log('arr:', arr);

```

### 函数默认参数

```javascript
function add(x = 1,y = 2) {
  console.log(x + y);
}
add(10); // 12
```



### Rest & Spread

> 两种方法用法类似.
>
> Rest: 将参数变为数组.
>
> Spread: 将数组变为参数. 

```javascript
'use strict';

/** Rest */
function fun(...a) {
  console.log(a);
}
fun(1,2,3,4,5); // [1,2,3,4,5]

/** Spread */
let arr = [1,2,3,4,5];
console.log(...arr); // 1,2,3,4,5 
```

### 模板字符串

```javascript
'use strict';
let name = 'atom';
console.log(`my name is ${name}`);
```

### 对象

> 当 **key** === **value** 的情况下, 可以只写一个.

```javascript
let name = 'atom';
let age = 25;

let obj = {
  name,
  age
}

console.log(obj); // { name: 'atom', age: 25 }
```

### 类

```javascript
class Father {
  // 构造函数
  constructor() {
    this.money = 100000;
  } // constructor end
}

class Son extends Father {
  constructor() {
    // 上面用 extends 继承了 Father的属性, 这里就需要用 super 属性
    super();
    this.love = 'atom';
  }
}

let f = new Father();
let s = new Son();
console.log('f:',f);
console.log('s:',s);
```

## 工具

ES6 在线编译工具: http://babeljs.io/



