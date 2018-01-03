## 需要做笔记

### JS-apply & call & bind

### JS-Object.create()

### JQ-filter

### constructor





## 基本概念

> **JavaScript** 是一个单线程以事件驱动的语言。 

### 变量

#### 定义

- 只能是字母、`_`、`$`、组成，不能以数字开头
- 区分大小写
- 不能是关键字和保留字

#### 数据类型

##### 基本数据类型

- string
- number
- boolean
- undefined
- null

##### 复杂数据类型

- Object
- Function
- Array
- Date
- 基本包装类型：Number、String、Boolean

##### 类型检测

- typeof(基本数据类型)

  ```javascript
  console.log(typeof []); // object
  console.log(typeof {}); // object
  console.log(typeof function(){}); // function
  ```

- instanceof(复杂数据类型)

  `instanceof` 运算符，用来检测一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。

  ```javascript
  console.log({} instanceof Object); // true
  console.log({} instanceof Array); // false
  console.log([] instanceof Array); // true
  console.log([] instanceof Object); // true

  console.log(Array instanceof Object); // true
  console.log(String instanceof Object); // true
  console.log(Date instanceof Object); // true
  console.log(Number instanceof Object); // true
  console.log(Function instanceof Object); // true
  console.log(Object instanceof Function); // true
  console.log(Number instanceof Function); // true
  console.log(Array instanceof Function); // true
  console.log(Date instanceof Function); // true
  console.log(String instanceof Function); // true
  console.log(Math instanceof Object); // true
  console.log(Math instanceof Function); // false
  ```

##### 类型转换

字符串，数值，布尔值。

##### 运算符

- 算数运算符：`+ - * / % ++ --`

- 赋值运算符：`= += -= *= /= %=`

- 比较运算符：`== === != >= <=`

- 逻辑运算符：`&& || ！`

  - &&：从左到右开始判断，遇到 **false** 则停止。

    ```javascript
    function fun(callback) {
      // callback(); // 直接调用的话，如果不传递参数则报错
      callback && callback(); // 如果不传递 callback，则不会走到执行语句，避免报错
      console.log('success');
    }
    fun();
    fun(function () {
      console.log('callback');
    })
    ```

  - ||：从左到右开始判断，遇到 **true** 则停止。

###流程控制语句

####分支语句

- if...else
- switch...case

####循环语句

- while
- do...while
- for
- for...in
- break continue

### 内置对象

- Array
- Math
- Date
- String

### 比较运算符

- ==：只比较值，不比较类型，会产生隐式转换
- ===：比值的同时也比较类型

**==运算规则**

- **NaN** 不等于任何值，包括它本身。
- **null** 不等于任何值，除了 **null** 和 **undefined** 。
- **undefined** 不等于任何值，除了 **null** 和 **undefined** 。
- 如果操作符两边有数值，那么就转为数值比较。
- 如果操作符两边有布尔值，那么就转为数值比较。
- 如果操作符两边有字符串，那么就转为字符串比较。
- 如果两边是对象，那么就比较地址。

```javascript
console.log([] == ![]); // true
console.log([] == []); // false
console.log(![] == ![]); // true

console.log({} == !{}); // false
console.log({} == {}); // false
console.log(!{} == !{}); // true

let obj1 = {};
let obj2 = {};
console.log(obj1 == obj2); // false
let obj3 = obj1;
console.log(obj1 == obj3); // true

let obj = {
  name: 'atom',
}
obj.info = obj;
console.log(obj == obj.info); // true

let arr1 =[];
let arr2 = [];
console.log(arr1 == arr2); // false
let arr3 = arr1;
console.log(arr1 == arr3); // true
```

### 严格模式

```javascript
'use strict';
```

可以在script标签 或者 函数中开启，放在第一行即可。

#### 特性

- 全局变量必须显示声明(一定要用关键声明变量)
- 禁止 **this** 指向 **window**
- 禁止重名：包括函数参数与对象属性
- 禁止使用八进制
- 增加了保留字：`implements, interface, let, package, private, protected, public, static, yield`

## 对象

### 内置对象

> 通过 `typeof` 操作符, 来获取对象的类型, 返回一个字符串.

```javascript
console.log(typeof undefined); // undefined
console.log(typeof Math); // object
console.log(typeof Math.abs); // function
console.log(typeof null); // object
```

### 包装对象

- number
- boolean
- string

> 用 `new` 来创建, 他们的类型都会变成 object, 没事不要去用包装对象.

```javascript
console.log(typeof 123); // number
var n = new Number(123);
console.log(typeof n); // object
console.log(123 == n); // true
console.log(123 === n); // false
```

> 如果不用 `new` 调用, 则会当做普通函数, 把任何类型的数据强制转换为对象的类型.

```javascript
let str = '1a';
console.log(typeof str); // string
let n = Number(str);
console.log(typeof n);
let m = new Number(str); // number
console.log(typeof m); // object
console.log(str); // 1a
console.log(n); // NaN
console.log(m); // {}
```

不建议使用包装对象(new)来转换数据类型.

- 用 `parseInt()` 或 `parseFloat()` 来转换成 `number`
- 用 `string()` 或 `.toString()` 来转换成 `string`
- 判断 `Array` 使用 `Array.isArray(arr)`
- 判断 `null` 使用 `a === null`

`null` 和 `undefined` 没有 `.toString` 方法, `number` 对象直接调用 `.toString` 会报错.

```javascript
123..toString(); // 正常
(123).toString(); // 正常
123.toString(); // 报错
```



### 创建对象的方式

1. 通过 `new Object()` 创建.

2. 对象字面量创建.

   ```javascript
   let obj = {
     name: 'atom',
     age: '25'
   }
   // 缺点: 如果要批量创建, 代码冗余严重
   ```

3. 工厂函数

   ```javascript
   function PersonCreater(name, age) {
     return {
       name: name || 'nameless',
       age: age ? age + '岁' : '未知',
       action() {
         console.log(`${this.name}的年龄: ${this.age}`);
       }
     }
   }
   let a = PersonCreater();
   let b = PersonCreater('atom', 25);
   a.action(); // nameless的年龄: 未知
   b.action(); // atom的年龄: 25岁

   // 缺点: 没有解决对象识别的问题, 创建出来的对象都是 Object类型
   ```

4. 构造函数

   ```javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
     this.action = function () {
       console.log(`${this.name}的年龄: ${this.age}`);
     }
   }
   let a = new Person('atom', 25);
   let b = new Person('zlk', 26);
   ```

   构造函数需要配合 **new** 关键字才有作用, 首字母必须大写.

   构造函数有浪费内存的缺点.

### 面向对象编程

#### 基本概念

- 类: 对象的类型模板, 代表一个类型, 但是不表示任何具体的东西.
- 实例: 根据类创建的对象, 所诞生的实例都是独立的个体, 它们都属于同一个类.

面向对象编程 — Object Oriented Programming, 简称 **OOP** , 是一种编程的开发思想.

在面向对象程序开发思想中, 每一个对象都是功能中心, 具有明确的分工, 可以完成接受信息, 处理数据, 发出信息等任务.

因此, 面向对象程具有灵活, 代码可复用, 高度模块化等特点, 容易维护和开发, 比起由一系列函数或者指令组成的的传统的过程式编程, 更适合多人合作的大型软件项目.

- 面向过程: 所有事情都亲力亲为, 关注点在解决问题的过程上.
- 面向对象: 找一个对象, 指挥它去作事情, 关注点在对象上.

面向对象不是面向过程的替代, 而是面向过程的封装.

####面对对象的特性

- 封装性: 将功能具体实现, 全部封装到对象的内部, 外界使用对象时, 只需要关注对象提供的方法如何使用, 而不需要关心对象内部的具体实现.
- 继承性: 一个对象没有的属性和方法, 直接从其他对象哪里拿过来用, 就实现了继承.
- 多态性: 在 **JS** 中没有这个特性.

#### 例子



### 深度拷贝与浅拷贝

- 浅拷贝：将对象的各个属性一次进行复制，浅拷贝只复制了一层对象的属性。如果对象中有复杂类型的数据，则复制地址，会互相影响。

  ```javascript
  let obj = {
    name: 'atom',
    info: {money: 1000}
  }

  let cp = {};
  for (var k in obj) {
    cp[k] = obj[k];
  }

  obj.info.money = 0;
  console.log(cp.info.money); // 0
  ```

- 深拷贝：将对象中的各个属性依次进行复制，如果属性也是对象，则使用递归的方法进行拷贝，如此，可以复制一个一模一样的对象，并且完全独立。

  ```javascript
  let obj = {
    name: 'atom',
    info: { money: 1000 }
  }

  function cloneObj(obj) {
    /** 如果参数不是对象，则不调用 */
    if (typeof obj !== 'object') return;
    let tem = {};
    for (let k in obj) {
      /** 如果拷贝的东西是对象，则递归调用这个方法拷贝 */
      tem[k] = typeof obj[k] == 'object' ? cloneObj(obj[k]) : obj[k];
    }
    return tem;
  }

  let cp = cloneObj(obj);
  obj.info.money = 0;
  console.log(cp.info.money); // 1000
  ```


## 函数

### 创建函数的三种方法

#### 函数声明

> 函数式声明可以先调用, 再声明, 会产生变量提升.

```javascript
fn(); 
function fn() {
  //code
}
```

#### 函数表达式

> 函数表达式, 必须先声明在调用.

```javascript
var fn = function() {
  //code
}
fn();
```

#### 构造函数

```javascript
// 相当于 var fn = function() {}
var fn = new Function('a', 'b', 'console.log(a+b)');
/**
 * 所有参数都是字符串
 * 最后一个参数是代码本体, 前几个参数都是形参
 */
fn(1,2); // 3
```

### 调用函数的四种模式

> 根据函数内部this的指向不同, 可以将函数分为4中调用模式

- 函数调用模式 - this指向window
- 方法调用模式 - this指向调用者
- 构造函数调用模式 - this指向实例
- 上下文调用模式(借用方法调用模式) - this指向借用者

#### 函数调用模式

> this 指向 window

```javascript
function fn() {
  console.log(this);
}
fn(); // window
```

#### 方法调用模式

> 当一个函数被保存在一个对象内, 我们称之为这个对象的方法. 当这个方法被调用时, this 指向这个对象.

```javascript
let obj = {
  name: 'atom',
  fn: function () {
    console.log(this);
  }
}
obj.fn(); // obj
```

#### 构造函数调用模式

> 通过new来调用构造函数的时候, 会执行其中的代码, this 指向创建出来的实例.

```javascript
function User(name) {
  this.name = name;
  console.log(this.name);
}
let user = new User('atom'); // atom
```

#### 上下文调用 - call & apply

> 参数一: 改变 this 的指向, 如果不传, 指向 window.
>
> apply 和 call 的方法类似, apply 的后续参数是一个包含多个参数的数组,而, call 则是, 将多个参数直接放进去.

- 如果参数很少, 则使用 call
- 参数多的情况下, 使用 apply

#####关于伪数组

> 伪数组也叫类数组

- 伪数组是一个对象, 但是有 **length** 属性.
- 伪数组没有数组的方法, 如 `push/pop` .
- 伪数组可以遍历.
- 常见的伪数组 `arguments` `document.getElementByTagName` `jQuery对象` .

```javascript
let fakeArr = {
  0: '零',
  1: '一',
  2: '二',
  length: 3
};
// fakeArr.push('三') // 报错, 伪数组不具备数组的方法
[].push.call(fakeArr, '三');
[].push.apply(fakeArr, ['四']);
console.log(fakeArr); // {0: "零", 1: "一", 2: "二", 3: "三", 4: "四", length: 5}
```

#####bind

> 创建一个新的函数, 绑定 this 的指向, 无论怎么调用, this 都不会改变

```javascript
var master = 'window';
let obj = {
  master: 'obj',
  say() {
    console.log(this.master);
    function inside() {
      console.log(this.master);
    }
    inside();
  }
}
let newBee = {
  master: 'newBee'
}
obj.say(); // 第一次调用 say: obj, 第二次调用 inside: window

console.log('下面是bind');
let fn = obj.say.bind(newBee);
fn(); // 第一次调用 say: newBee, 第二次调用 inside: window
```

```javascript
var master = 'window';
let obj = {master: 'obj'};
function say() {
  console.log(this.master);
}
obj.say = say;
obj.say(); // obj
obj.say = say.bind(window);
obj.say(); // window
```

#### 调用模式的面试题

```javascript
let obj = {
  sayHi: function () {
    console.log(this);
  }
}
let fn = obj.sayHi;
fn(); // window
obj.sayHi(); // obj
/**
 * 虽然 sayHi 是obj的方法, 但是通过函数名调用, 所以指向window
 */
```

```javascript
let fn = function () {
  console.log(this);
}
let obj = {
  sayHi: fn
}
obj.sayHi(); // obj
fn(); // window
```

```javascript
var age = 38; // 如果用 let , this 会禁止指向 window, 导致函数foo获取不到 age
let obj = {
  age: 18,
  getAge: function () {
    console.log(this.age); // 18
    function foo() {
      console.log(this.age); // 38
    }
    foo();
  },
}
obj.getAge();
```

## this

> 每一个语言都需要一个环境，而 **javascript** 的环境(宿主环境)就是浏览器，浏览器提供了很多 **API** 接口，好让 **JS引擎** 与 **宿主环境** 对接，而 **JS引擎** 才是 **JS代码** 真正执行的地方。

参考文档：https://segmentfault.com/a/1190000002640298

###关于 this 的指向

#### 全局环境

在全局环境中，**this** 指向 **window**，用 **var** 声明的变量就等同于给 **window** 或者 **this** 添加属性。

```javascript
console.log(this == window); // true
var a = 10;
console.log(a); // 10
console.log(this.a); // 10
console.log(window.a); // 10
```

在全局环境中，没有使用 **var** 或者 **let** 声明一个变量时，你就是在给全局的 **this** 和 **window** 改变值。

```javascript
a = 10;
console.log(a); // 10
console.log(this.a); // 10
console.log(window.a); // 10
```

总结：在浏览器的全局环境中，**this** 就是老大，它等同于 **window对象** ，如果你声明了一些全局变量，它们就会作为 **this的属性** 存在。

####function 环境

如果函数不是通过 **new** 调用，则函数中的 **this** 指向 **window** 。

```javascript
var foo = 'foo';
function testThis() {
  this.foo = 'function';
}
console.log(this.foo); // foo
testThis();
console.log(this.foo); // function
```

在严格模式下，函数中的 **this** 会禁止指向 **window** ，这时，**this** 指向 **undefined** 导致程序报错。

```javascript
'use strict';
var foo = 'foo';
function testThis() {
  this.foo = 'function'; 
}
console.log(this.foo); // foo
testThis(); // 报错
console.log(this.foo);
```

在用 **new** 调用函数时，这时 **this** 指向 **new** 出来的对象。

```javascript
var foo = 'foo';
function testThis() {
  this.foo = 'function';
}
console.log(this.foo); // foo
new testThis();
console.log(this.foo); // foo
console.log(new testThis().foo); // function
var fun = new testThis();
console.log(fun.foo); // function
```

总结：函数中的 **this** 会根据函数的调用方式改变指向。直接调用 **this** 指向 **window** ，用 **new** 调用，**this** 指向实例化的对象，在绑定事件的时候，**this** 指向处理事件的对象。

####prototype this

我们创建的所有函数都是一个函数对象，它们会自动获得一个 **prototype** 属性，你可以给这个属性赋值，当你用 **new** 创建一个实例化对象的时候，可以通过 **this** 访问你给 **prototye** 赋的值。

```javascript
function Thing() {
  console.log(this.foo);
}
Thing.prototype.foo = 'foo';
var thing = new Thing(); // foo
console.log(thing.foo); // foo
```

当你给一个函数的 **prototype** 赋予属性被设定值的时候，这个函数所实例出来的对象会共享这些属性与值，知道你通过某个方式了改变了这些值。

```javascript
function Thing(name) {
  this.name = name || 'nameless';
}
Thing.prototype.foo = 'foo';
Thing.prototype.logFoo = function () {
  console.log(`${this.name}:${this.foo}`);
}
Thing.prototype.setFoo = function (newFoo) {
  this.foo = newFoo;
}
var a = new Thing('a');
var b = new Thing('b');
a.logFoo(); // a:foo
b.logFoo(); // b:foo
a.setFoo('changeA');
a.logFoo(); // a:changeA
b.logFoo(); // b:foo
```

当你直接在一个实例里面给 **this** 添加属性的时候，会隐藏 **prototype** 中与之同名的属性，如果想访问 **prototype** 上原始的属性，需要删除后来自己添加的属性。

```javascript
function Thing(name) {
  this.name = name || 'nameless';
}
Thing.prototype.foo = 'foo';
Thing.prototype.logFoo = function () {
  console.log(`${this.name}:${this.foo}`);
}
Thing.prototype.setFoo = function (newFoo) {
  this.foo = newFoo; 
}
Thing.prototype.delFoo = function () {
  delete this.foo; // this 指向 实例化出来的对象
}
var a = new Thing('a');
var b = new Thing('b');
a.setFoo('changeA');
b.setFoo('changeB');
a.logFoo(); // changeA
b.logFoo(); // changeB
a.delFoo(); // 方法一
delete b.foo; // 方法二
a.logFoo(); // foo
b.logFoo(); // foo
```

可以通过访问实例对象的原型来获得属性的原始值。

```javascript
function Thing(name) {
  this.name = name || 'nameless';
}
Thing.prototype.foo = 'foo';
Thing.prototype.setFoo = function (newFoo) {
  this.foo = newFoo;
}
var a = new Thing('a');
a.setFoo('changeA');
console.log(a.foo); // changeA
console.log(a.__proto__.foo); // foo
console.log(Thing.prototype.foo); // foo
console.log(Thing.prototype === a.__proto__); // true
```

通过一个函数创建的实例会共享这个这个函数的 **prototype** ，如果给这个函数的 **prototype** 赋予一个 **Array**，那么所有实例都会共享这个 **Array** ，可以在实例中重写这个 **Array** ，这种情况下，**prototype** 上的 **Array** 会被隐藏掉。

```javascript
function Thing(name) {
  this.name = name || 'nameless';
}
Thing.prototype.arr = [0,4,0,9];
var a = new Thing('a');
var b = new Thing('b');
b.arr.push('B');
console.log(a.arr); // [0,4,0,9,'B']
console.log(b.arr); // [0,4,0,9,'B']
console.log(a.arr === b.arr); // true
console.log(Thing.prototype.arr); // [0,4,0,9,'B']
```

如果希望每一个实例都有一个专属的 **Array** ，需要在函数里面创建。

```javascript
function Thing(name) {
  this.name = name || 'nameless';
  this.arr = [0,4,0,9];
}
var a = new Thing('a');
var b = new Thing('b');
b.arr.push('B');
console.log(a.arr); // [0,4,0,9]
console.log(b.arr); // [0,4,0,9,'B']
console.log(a.arr === b.arr); // false
```

将多个函数的 **prototype** 链接起来，就形成了原型链接，如此 **this** 就会一直朝着原型链向上找。

```javascript
function Thing() {};
Thing.prototype.foo = 'foo';
function Thing2() {};
Thing2.prototype = new Thing();
var a = new Thing();
var b = new Thing2();
console.log(a.foo); // foo
console.log(b.foo); // foo
```

可以利用原型链的特性，自己模仿面向对象的继承方式，任何给用于构建原型链的函数的 **this** 赋值，都会隐藏原型链上的同名属性。

```javascript
function Thing1() {}
Thing1.prototype.target = 'Thing1';
Thing1.prototype.secTarget = 'secThing1';
function Thing2() {
  this.target = 'Thing2'; // 干掉 Thing1
}
Thing2.prototype = new Thing1();
function Thing3() {}
Thing3.prototype = new Thing2();
var a = new Thing1();
var b = new Thing2();
var c = new Thing3();
console.log(a.target); // Thing1
console.log(b.target); // Thing2
console.log(b.secTarget); // secThing1
console.log(c.target); // Thing2
console.log(c.secTarget); // secThing1
```

我们将把被赋值给 **prototype** 的函数叫做方法，在上述例子中，我们使用过方法了，例如 logFoo。这些方法都有着相同的 **prototype** ，即创建这些实例的原始函数。我们通常把这些原始函数叫做构造函数。在 **prototype** 里面定义的方法里使用 **this** 会影响当前实例原型链的上游 **this** ，这以为这你直接给 **this** 赋值的时候，隐藏了原型链上游的相同的属性值。这个实例的任何方法都会使用这个最新的值而不是原型里面定义的这个相同的值。

```javascript
function Thing1() {}
Thing1.prototype.target = 'Thing1';
Thing1.prototype.logTarget = function() {
  console.log(this.target);
}
function Thing2() {
  this.target = 'Thing2';
}
Thing2.prototype = new Thing1();
var a = new Thing1();
var b = new Thing2();
a.logTarget(); // Target1
b.logTarget(); // Target2
```

**JS** 中你可以嵌套函数，可以在函数里面定义函数。嵌套的函数可以通过闭包获取父函数的变量，但是这个函数没有继承 **this** 。

```javascript
function Thing() {}
Thing.prototype.target = 'Thing';
Thing.prototype.logTarget = function () {
  var info = "inside:";
  function doIt() {
    console.log(info, this.target);
    console.log(this); // window
  }
  doIt();
}
var a = new Thing();
a.logTarget(); // undefined，通过闭包无法获取 this
console.log(a.target); // Thing
```

可以通过预选储存 **this** 的方式来捕获 **this** 。

```javascript
function Thing() {}
Thing.prototype.target = 'Thing';
Thing.prototype.logTarget = function () {
  var info = "inside:";
  var that = this;
  function doIt() {
    console.log(info, that.target);
    console.log(that); // Thing构造函数
  }
  doIt();
}
var a = new Thing();
a.logTarget(); // Thing
console.log(a.target); // Thing
```

但是当你需要把一个方法作为一个值传递给一个函数的时候并不管用。

```javascript
function Thing() {}
Thing.prototype.target = 'Thing';
Thing.prototype.logTarget = function () {
  var info = "inside:";
  var that = this;
  function doIt() {
    console.log(info, that.target);
  }
  doIt();
}
function doItOut(callback) {
  callback();
}
var a = new Thing();
a.logTarget(); // Thing
doItOut(a.logTarget); // undefined
```

可以通过 **bind** 方法讲实例和方法一切传递给函数来解决这个问题，**bind** 是一个函数定义在所有函数和方法的函数对象上面。

```javascript
function Thing() {}
Thing.prototype.target = 'Thing';
Thing.prototype.logTarget = function () {
  console.log(this.target);
}
function doIt(callback) {
  callback();
}
var a = new Thing();
doIt(a.logTarget); // undefined
doIt(a.logTarget.bind(a)); // Thing
```

通过 **apply** 和 **call** 来解决这个问题。

```javascript
function Thing() {}
Thing.prototype.target = 'Thing';
Thing.prototype.logTarget = function () {
  function doIt() {
    console.log(this.target);
  }
  doIt.apply(this); // 通过 apply 改变 this 的指向
}
function doItOut(callback) {
  callback();
}
var a = new Thing();
doItOut(a.logTarget.bind(a)); // Thing
```

**bind** 可以代替任何一个函数或者方法的 **this** ，即便它没有赋值给实例的初始 **prototype** 。

```javascript
function Thing() {}
Thing.prototype.info = 'Thing';
function logInfo(aStr) {
  console.log(aStr, this.info);
}
var a = new Thing();
logInfo.bind(a)('a'); // a Thing
logInfo.apply(a,['a']); // a Thing
logInfo.call(a,'a'); // a Thing
logInfo('a'); // a undefined
```

你应该避免在构造函数里返回任何东西，这可能代替本来应该返回的实例。如果返回一个原始值，则不会具备后续添加给原型的属性。

```javascript
function Thing() {
  return {};
}
Thing.prototype.info = 'Thing';
Thing.prototype.log = function () {
  console.log(this.info);
}
var thing = new Thing();
console.log(thing); // {} 不具有任何我们添加给原型的属性
```

可以通过 **Object.create** 来创建一个实例，这种时候不会调用构造函数，原型上的属性不会被覆盖。

```javascript
function Thing() {
  this.info = 'inside';
}
Thing.prototype.info = 'Thing';
Thing.prototype.log = function () {
  console.log(this.info);
}
var thing = Object.create(Thing.prototype);
thing.log(); // Thing
```

可以利用上述的特点，来通过原型链重写构造函数。

```javascript
function Thing1() {
  this.info = 'Thing1';
}
Thing1.prototype.info = 'Thing1-prototype';
function Thing2() {
  this.log(); // 第一次: Thing1-prototype
  Thing1.apply(this);
  this.log(); // 第二次: Thing1
}
Thing2.prototype = Object.create(Thing1.prototype);
Thing2.prototype.log = function () {
  console.log(this.info);
}
var thing = new Thing2();

/**
 * 第10行，给 Thing2 的原型赋予属性的时候，并没有用 new 关键字，所以没有调用 Thing 这个函数，但是把 Thing1 的原型上的属性继承到了 Thing2 的原型上。所以，此时 Thing2.info = Thing1-prototype
 * 所以第一次打印的是 Thing1-prototype
 * 第7行 通过 apply 方法 改变了 this 的指向，将其指向 Thing1 构造函数，从而导致 第二次打印的是 Thing1
 */
```

#### object this

在一个对象中, 你可以通过 **this** 来访问这个对象的其他属性, 这个和 **new** 出来的实例是不一样的.

```javascript
let obj = {
  name: 'atom',
  say() {
    console.log(`${this.name}: Hello`);
  }
}
obj.say(); // atom: Hello
```

不用 **new** , 不用 **Object.create** , 也不用函数创建对象, 你也可以将对象当做一个实例将函数绑定在上面.

```javascript
let obj = {name: 'atom'}
function say() {
  console.log(this.name);
}
say(); // 空
say.apply(obj); // atom
```

对象中的对象是访问不到父元素的 **this** 的.

```javascript
let obj = {
  name: 'atom',
  deeper: {
    say() {console.log(`${this.name}: Hello`)}
  }
}
obj.deeper.say(); // underfined: Hello
```

可以通过对象直接引用需要的属性.

```javascript
let obj = {
  name: 'atom',
  deeper: {
    say() {console.log(`${obj.name}: Hello`)}
  }
}
obj.deeper.say(); // atom: Hello
```

## 继承

> 自己没有的属性和方法, 从别人那里拿来用, 就是继承. 

###继承的方法

#### 混入式继承

```javascript
function extend (obj1, obj2){
  for(var k in obj2){
    obj1[k] = obj2[k];
  }
}
```

####原型链继承

> 让子类继承父类的属性和方法, 定义一个构造函数, 然后, 将父类的新实例赋值给构造函数的原型.
>
> 缺点: 字面量重写原型会终端关系, 使用引用类型的原型, 并且子类型无法给超类型传递参数.

```Javascript
function Parent() {
  this.money = 10000;
}
function Child() {
  this.age = 12;
}
// Child 通过原型继承 Parent
Child.prototype = new Parent;
let son = new Child;
console.log('son:', son.money); // 10000

function Brother() {
  this.name = 'brother';
}
Brother.prototype = new Child;
let brother = new Brother;
console.log('brother:', brother.money); // 10000
console.log('brother:', brother.age); // 12

console.log(brother instanceof Object); // true
console.log(brother instanceof Parent); // true
console.log(brother instanceof Child); // true
```

#### 经典继承

> 通过 Object.create(), 指定原型对象及其属性, 去创建一个新的对象.

```javascript
function Parent() {
  this.name = 'atom';
}
Parent.prototype.money = 10000;
let father = new Parent;

let son = Object.create(Parent);
console.log(son.name); // atom
console.log(son.prototype.money); // 10000
console.log(son.__proto__); // Parent 构造函
```

###拓展内置对象

```javascript
function MyArr() {} // 自定义构造函数
MyArr.prototype = []; // 将数组放在自己的原型上
MyArr.prototype.say = function () { // 给原型添加方法
  console.log('hello');
}
let arr = new MyArr;
arr.push(1,2,3);
console.log(arr); // [1,2,3]
arr.say(); // hello
```

## 原型链

### 概念

当用 `obj.xxx` 访问一个对象的属性时候, **JS引擎** 会在当前对象上查找, 如果找不到, 就一直往上朝着原型对象上找, 最终, 追溯到 `Object.prototype` , 如果没有找到, 就返回 `undefined` .

```javascript
var arr = [1,2,3];
// arr => Array.prototype => Object.prototype => null
console.log(arr.__proto__); // 可以看到所有 Array 的方法
console.log(arr.__proto__.__proto__); // 可以看到所有 Object 的方法
console.log(arr.__proto__.__proto__.__proto__); // null
```

 函数也是一个对象, 它也有原型链

```javascript
function foo() {
  return 'foo';
}
console.dir(foo.__proto__); // 可以看到所有函数的方法
console.dir(foo.__proto__.__proto__); // 可以看到所有对象的方法
console.dir(foo.__proto__.__proto__.__proto__); // null
```

### 方法

#### prototype

#### proto

####constructor



###构造函数创建对象

> 通过 `new` 来调用函数, 称之为构造函数, 返回一个对象,.

```javascript
function Person(name) {
  this.name = name || 'nameless';
  this.say = function () {
    console.log(`${this.name}: Hello!`);
  }
}
let a = new Person;
// a => Person.prototype => Object.prototype => null
console.log(a.__proto__); // Person 构造函数
console.log(a.__proto__.__proto__); // Object
console.log(a.__proto__.__proto__.__proto__); // null
```

这个构造函数诞生的所有实例的原型链都是一样的.