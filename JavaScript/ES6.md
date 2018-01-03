# ES6

## 关键字

| 关键字     | 描述   | 备注                                       |
| ------- | ---- | ---------------------------------------- |
| let     | 声明变量 | 一个作用域中不允许出现同名变量, `{}` 可以生成作用域. 不会进行变量提升. |
| const   | 声明常量 | 定义的时候必须赋值,同一个作用域中只允许声明一次, 并且不允许被改变, 声明对象和数组的时候, 可以被拓展, 值也允许被改变, 不会提升, 常量一般用大写字母表示. |
| export  | 导出   | 从模块中, 导出函数,对象,原始值,其他程序可以通过 `import` 调用.  |
| Promise | 处理异步 | 一个构造函数, 处理异步请求, 返回成功或失败.                 |

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

let fun2 = (a) => a;

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
 * 箭头函数不能使用 arguments
 * 箭头函数不能用作于构造函数
 */

let arr = [1,2,3,4,5];

// arr = arr.map(function(item) {
//   return item + 10;
// })

arr = arr.map(item => item + 10);
console.log('arr:', arr);

/**
 * 箭头函数 => 读作: goes to
 * 箭头后面是函数体
 * 不要在 Vue 中的 methods 中定义方法的时候使用 箭头函数
 */
;(function () {
  // let fn = item => item;
  // // 上面的语法等同于下面的
  // let fn = function (item) {
  //   return item;
  // }
  // // 如果没有参数或者有多个参数
  // let fn = () => item;
  // let fn = (item, index) => item;
  // // 如果是函数体
  // let fn = () => {console.log('我是函数体');};
  // // 等同于下面
  // let fn = function () {
  //   console.log('我是函数体');
  // }
  // // 如果函数体中只有一行代码, {} 可以省略
  // let fn => console.log('我是函数体');
  // // 如果省略了 {} , 会自动将返回值返回, return 可以省略
  // let fn => 1;
  // console.log(fn()); // 1;
})();

/** 箭头函数的 this 指向, 箭头函数的 this 由它所处的环境决定, 在全局环境中, this => window, 在一个函数内部创建, this 指向 外部函数的 this */
;(function () {
  let obj = {
    fn:function () {
      console.log('fn:', this.name);
      let fnInSide = () => console.log('fnInSide:', this.name);
      fnInSide();
    },
    name: 'obj',
  }
  obj.fn();
  let outSide = () => console.log('outSide:', this);
  outSide(); // 在严格模式下是 unidentified, 在非严格模式下, 指向window
})();
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

## 方法

### 关键字

#### export

**MDN文档:** https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export

**export default**

> 默认导出: 这种方式导出的时候, 不需要设定名字, 而且只能导出一样东西, 可以是字符串, 数值, 函数,类等.
>
> 在接受的时候, 可以自己定义名称.

```javascript
// 在test.js中导出
export default 12;

// 在另外一个 js文件中 接受
import a from './test.js'
console.log(a) // 12
```

**export {}**

> 命名导出: 这种导出方式可以一次性导出多个, 接收方也可以选择部分接受, 需要变量名, 接收方的变量名不能随意更改.

```javascript
// 在test.js中导出
let a = 'a'
let b = () => {console.log('b')}
let c = {
  name: 'c',
  say: function () {
    console.log(this.name);
  }
}
export {a,b,c}

// 在另外一个 js文件中 接受
import {a,b,c} from './config.js'
console.log(a) // a
b() // b
c.say() // c
```

### 构造函数

#### promise



### 转码

#### encodeURIComponent()

**MDN文档:** https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

> 对统一资源标识符 (URI) 的组成部分进行编码, 它使用一到四个转义序列来表示字符串中的每个字符的 **UTF-8** 编码(只有由两个Unicode代理区字符组成的字符才用四个转义字符编码).

```javascript
encodeURIComponent(str);
```

