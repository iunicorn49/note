# ES6

## 工具

ES6 在线编译工具: http://babeljs.io/

## 关键字

| 关键字     | 描述    | 备注                                       |
| ------- | ----- | ---------------------------------------- |
| let     | 声明变量  | 一个作用域中不允许出现同名变量, `{}` 可以生成作用域. 不会进行变量提升. |
| const   | 声明常量  | 定义的时候必须赋值,同一个作用域中只允许声明一次, 并且不允许被改变, 声明对象和数组的时候, 可以被拓展, 值也允许被改变, 不会提升, 常量一般用大写字母表示. |
| export  | 导出    | 从模块中, 导出函数,对象,原始值,其他程序可以通过 `import` 调用.  |
| as      | 导入重命名 | `import * as con from './config.js'` 将config.js的东西一次性导入, 并且重命名为 `con` . |
| Promise | 处理异步  | 一个构造函数, 处理异步请求, 返回成功或失败.                 |

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

> 通过 `[]` , 可以在 **Key** 的命名中, 使用表达式.

```javascript
let data = 23
let obj = {
  ['prop' + (arg => arg)(data)]: data
}
console.log(obj)  //  {prop23: 23}
```

> 方法简写

```javascript
let obj = {
  say: function(a) {
    console.log(a)
  }
}
//  可以简写成下面的写法
let obj = {
  say(a) {
    console.log(a)
  }
}
```

##class

```javascript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  say() {console.log(`my name is ${this.name}, I'm ${this.age}`)}
}

class child extends Person {
  constructor(name, age, id) {
    super(name, age)
    this.id = id
  }
}

let son = new child('zlk', 35, 1)
son.say()
```

### 关键字

| 关键字         | 描述          |
| ----------- | ----------- |
| class       | 声明          |
| constructor | 定义私有属性      |
| extends     | 继承          |
| super       | 继承者用于覆盖父级属性 |

- class的声明不能被提升
- class中的代码, 自带严格模式
- class中的方法是不可枚举的
- 每个类都有一个 [[construct]] 方法
- 必须使用 `new` 来调用
- 不能在类中修改类名

## 方法

### Object

#### Object.assign

讲多个对象合并成一个, 返回一个新的对象, 如果有相同的键, 则源属性会被覆盖.

```javascript
Object.assign(target, ...sources)
```

- target: 目标对象
- sources: 合并的对象, 可以有多个.

```javascript
let user = {
  name: 'atom',
  age: 25
}
let obj = Object.assign({}, user, {
  say () {
    console.log(`my name is ${this.name}`)
  },
  name: 'AXX' // 覆盖了之前的 user 里的 name
})
console.log(obj) // {name: "AXX", age: 25, say: ƒ}
obj.say() // my name is AXX
```

### Map

通过键值对存储数据, 类似 Object , 更有语义性, 提供了内置的 getter/setter, 迭代器等方法.

```javascript
let m = new Map
m.set('name', 'atom')
console.log(m.get('name'))  //  atom
```

###Set

类似数组, 会过滤掉重复的值.

```javascript
let s = new Set
s.add('zlk').add('zlk').add('atom')
console.log(s.size)  //  2
console.log(s.has('zlk'))  //  true
console.log(s)  //  {"zlk", "atom"}
```

这是一个强引用的集合, 通过 `new Set` 出来的实例, 只要引用一直存在, 内存就得不到释放, 可以通过 `WeakSet` 来解决.

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

> 可以在一个js文件中导出多个参数

config.js

```javascript
export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0
```

在另外一个 **JS文件** 中导入其中某些参数

```javascript
import {commonParams, options} from './config'
```

####Generators

解决回调地狱, 代码的执行和你书写的顺序有关.

```javascript
function * hello() {
  yield 'hello'
  yield 'world'
  yield 'ending'
}
let h = hello()
console.log(h.next())  //  {value: "hello", done: false}
console.log(h.next())  //  {value: "world", done: false}
console.log(h.next())  //  {value: "ending", done: false}
console.log(h.next())  //  {value: undefined, done: true}
```

### 构造函数

#### promise

> 异步编程解决方案.

**它有三个状态** 

- pending: 进行中
- fulfilled: 成功
- rejected: 失败

```javascript
let promise = new Promise(function(resolve, reject) {
  // resolve: 成功触发, reject: 失败触发
  resolve() // 调用后,将状态变为成功
  reject() // 调用后,将状态变为失败
})
```

**基本例子**

> 成功

```javascript
var p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('setTimeout成功')
  }, 2000)
})
// 调动 then 方法传入一个回调函数可以通过参数获取到, 上面 resolve返回的值
p.then(function(data) {
  console.log(data); // 2秒后打印 resolve
})
```

> 失败

```javascript
var p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('setTimeout失败')
  }, 2000)
})
// 调动 then 方法传入第二个回调函数, 可以通过参数获取 reject返回的值
p.then(function(data) {
  console.log(data);
}, function(err) {
  console.log(err); // 2秒后, 打印 reject
})
```

> 通过 **catch** 捕获 **reject** 的返回值.

```javascript
var p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('setTimeout失败')
  }, 2000)
})
// 通过catch来捕获 失reject 的返回值
p.then(function(data) {
  console.log(data);
}).catch(function(err) {
  console.log(err);
})
```

##### Promise.all()

如何知道所有请求都完成了?

```javascript
// all 方法的参数是一个数组, 当里面的请求都完成时, 可以触发 then 事件.
let p = Promise.all([
  axios(url),
  axios(url)
])
p.then(function(res){
  console.log(res); // res是一个数组,里面存放了所有异步操作的返回数据
})
```

#####Promise.race()

多个异步请求, 那个先完成?

```javascript
// race 方法的参数是一个数组, 其中一个请求都完成时, 可以触发 then 事件.
let p = Promise.race([
  axios(url),
  axios(url)
])
p.then(function(res){
  console.log(res); // 这边的res是最先完成的请求的返回数据
})
```

### 转码

#### encodeURIComponent()

**MDN文档:** https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

> 对统一资源标识符 (URI) 的组成部分进行编码, 它使用一到四个转义序列来表示字符串中的每个字符的 **UTF-8** 编码(只有由两个Unicode代理区字符组成的字符才用四个转义字符编码).

```javascript
encodeURIComponent(str);
```

