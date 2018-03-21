# html5语义化兼容性问题

```
<!-- 现象: IE8 以下版本不支持 html5 语义化标签 -->
<header>我是header标签， 我应该独占一整行</header>
```

解决方式:

1. 在浏览器解析标签之前, 动态创建一下 header 标签,  浏览器就认识了

   ```
   document.createElement("header");
   ```

2. 默认行内, 需要转成块级

   ```
   header {
     /* header 标签应该独占一整行 */
     display: block;
   }
   ```



但是 html5 新增了很多语义化标签, 一个个创建太麻烦了, html5shiv 插件很好的解决这个问题



## html5shiv解决兼容性问题

在head中 引入 html5shiv 插件包即可解决 IE 8 不识别 html5 语义化标签的问题

```
<script src="html5shiv.js"></script>
```



但是在支持html5语义化标签的浏览器中, 这个js的执行就没有必要, 消耗了性能

所以我们可以通过 CSS IE条件注释 做兼容性处理



## CSS条件注释

CSS IE条件注释  专门用于兼容IE 低版本 

所以只有 IE9 及 IE9以下版本 才认识，其他版本的浏览器或者 IE10以上 的版本会当成注释,  不会解析  

它里面有判断IE版本的方式

```
lte：就是Less than or equal to的简写，也就是小于或等于的意思。
lt ：就是Less than的简写，也就是小于的意思。
gte：就是Greater than or equal to的简写，也就是大于或等于的意思。
gt ：就是Greater than的简写，也就是大于的意思。
```

用法实例: 

在小于等于 IE 8 的浏览器中才会执行, 在IE9 中, 就是普通的注释, 不会解析执行

```
<!--[if lte IE 8]>
    <script>
      alert("呵呵, 小于等于IE8都会执行这段话");
    </script>
    <script src="html5shiv.js"></script>
<![endif]-->
```

大于 IE 8 的浏览器才执行, 只有 IE 9 认识, 其他浏览器, IE 10 及以上, 都将条件注释当成注释

```
<!--[if gt IE 8]>
   <script>
      alert("只有IE9才执行这句话");
   </script>
<![endif]-->
```

# html5 新增类名操作

```
四个操作样式类的方法, 很简单, 需要熟记
1. 添加类: dom.classList.add   
2. 移除类: dom.classList.remove
3. 判断类: dom.classList.contains
4. 切换类: dom.classList.toggle
```

# html5 自定义属性操作

将来在工作中, 有一种很常见的做法, 就是将数据绑定在标签自定义属性中, 我们之前都需要通过 getAttribute 或者 setAttribute 一个一个获取,  当数据很多时, 就很麻烦

```
html5 提供了一种更简单存取数据的方式 dataset
```

```
// 用法:
1. 存的时候, 在属性名前面加上 data-, 
   <div class="pp" data-uage="18" data-uname="鹏鹏" data-sex="男"></div>
	  
2. 取的时候, 通过 dataset.属性名取, 
   例如: box.dataset.uage 或者 box.dataset["uage"]
	  
3. 修改添加, 直接通过对象属性操作方式操作即可
   例如: box.dataset.uage=12
```

# 网络状态

> 在移动端，我们经常需要检测设置是在线还是离线，HTML5为此定义了一个navigator.onLine属性，这个属性用于检测设备是否联网。

## 网络状态
```javascript
navigator.onLine返回用户当前的网络状况，是一个布尔值
1. 如果浏览器连不上网(包括局域网)，就是离线状态，也就是脱机状态，会返回false
2. 否则就是在线状态，返回true
```

**注意：返回true不一定就是说一定能访问互联网，因为有可能连接的是局域网。但是返回false则表示一定没连上网。**

## 监听网络变化
> 为了更好的确定网络是否连接，HTML5还定义了两个事件，用于监听网络状态的变化。

```javascript
//网络连接时会被调用
window.addEventListener("online", function () {
    alert("online");
});
//网络断开时会被调用
window.addEventListener("offline", function () {
    alert("offline");
});
```

# 地理位置

> 在HTML规范中，增加了获取用户地理信息的API，这样使得我们可以基于用户位置开发互联网应用，即基于位置服务LBS(Location Base Service)

## 隐私
HTML5规范提供了一套保护用户隐私的机制。必须先得到用户明确许可，才能获取用户的位置信息。

**在获取地理位置之前，会询问用户，只有在获得许可之后，才能获取到用户的位置信息。**

## 相关的方法
```javascript
//successCallback:获取成功后会调用,并返回一个position对象，里面包含了地理位置信息
//获取失败了会调用，并返回error对象，里面包含了错误信息。
//获取当前的地理位置信息
navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
//重复的获取当前的地理位置信息
navigator.geolocation.watchPosition(successCallback, errorCallback)
```
实例：
```javascript
navigator.geolocation.getCurrentPosition(function(position){
    // 定位成功会调用该方法
    // position.coords.latitude 纬度
    // position.coords.longitude 经度
    // position.coords.accuracy 精度
    // position.coords.altitude 海拔高度
}, function(error){
    // 定位失败会调用该方法
    // error 是错误信息
});
```

PC端: **chrome,火狐定位请求的页面要求要是https协议的, 所以PC端测试在IE下测试**

移动端: **在iOS 10中，苹果对webkit定位权限进行了修改，定位请求的页面必须是https协议的。**

## 百度地图

> 仅仅获取到经纬度对于用户来说意义并不大，因为用户也不知道经度和纬度表示的是地球上的哪一个地方，因为我们可以结合百度地图，准确的将用户的位置显示出来。

百度地图官网：[http://lbsyun.baidu.com/](http://lbsyun.baidu.com/)

```javascript
1. 在开发中，找到javascript API
2. 直接查看示例demo
3. 复制相应的代码，替换掉秘钥就行，秘钥只需创建一个新的应用就可以了。
```

# web存储
> 在代码执行的时候，数据都是存储在内存中的，当页面关闭或者浏览器关闭的时候，内存就被释放掉了。数据只有存储在硬盘上，才不会被释放。

web存储初体验

```javascript
//存储在内存中，会被释放
var str = "hello world";
console.log(str);

//存储在硬盘上，不会被释放
localStorage.setItem("name", "张三");
console.log(localStorage.getItem("name"));
```

## cookie

> 传统方式，我们以document.cookie进行存储，但是存储起来特别麻烦，并且，存储大小只有4k，常用来做自动登录，即存储用户的账号和密码信息。每次请求都会带上cookie


cookie是以字符串形式存在的，这个字符串有固定的格式：key=value;key1=value1;

在获取cookie内容时，一般需要通过正则或者字符串的方法进行处理，转换成对象，最终得到数据。

```javascript
document.cookie = "name=zhangsan";
document.cookie = "age=18";
document.cookie = "sex=23";

//读取cookie
var result = document.cookie;
console.log(result);
```

使用原生js操作cookie太过麻烦，尤其是cookie的获取和删除操作，使用jquery.cookie插件，能够简化我们的操作。

```javascript
//设置cookie
$.cookie("name", "zs");
//获取cookie
console.log($.cookie("name"));
//删除cookie
$.removeCookie("name");
```
使用cookie：操作太麻烦，最多只能存储4k ,每次请求都会带上cookie

## sessionStorage与localStorage

> HTML5规范提出了解决方案，使用sessionStorage和localStorage存储数据。设置、读取、删除操作很方便

window.sessionStorage的特点
```javascript
1. 声明周期为关闭浏览器窗口
2. 不能在多个窗口下共享数据。
3. 大小为5M
```

window.localStorage的特点
```javascript
1. 永久生效，除非手动删除
2. 可以多个窗口共享
3. 大小为5M
```

window.sessionStorage与window.localStorage的方法
```javascript
setItem(key, value) //设置存储内容
getItem(key) //读取存储内容
removeItem(key) //删除键值为key的存储内容
clear() //清空所有存储内容
```

**面试题：请描述一下cookies，sessionStorage和localStorage的区别？**

# 自定义播放器

全屏切换API：
```javascript
video.requestFullScreen()
```
方法：load()、play()、pause()
属性：

```javascript
currentTime:当前时间
duration：总长时间
timeupdate:播放进度更改时触发
volume：控制音量
```


参考文档
http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp

推荐网站：[https://www.awesomes.cn/](https://www.awesomes.cn/)

video.js 

# 文件读取

> 通过FileReader对象我们可以读取本地存储的文件，可以使用 File 对象来指定所要读取的文件或数据。其中File对象可以是来自用户在一个 <input> 元素上选择文件后返回的FileList 对象，也可以来自由拖放操作生成的  DataTransfer

## files

对于file类型的input框，在这个DOM对象中，存在一个files属性，这个属性是FileList对象，是一个伪数组，里面存储着上传的所有文件，当input框指定了multiple属性之后，就可以上传多个文件了。

也就是说，通过files这个属性，我们就可以获取到所有上传的文件。

## file对象

File对象中包含了文件的最后修改时间、文件名、文件类型等信息。

## FileReader对象

FileReader是一个HTML5新增的对象，用于读取文件。
```javascript
//创建一个fileReader对象
var fr = new FileReader;
//读取文件的两个方法
readAsText() 以文本的方式读取文件
readAsDataURL() 以DataURL形式读取文件
//文件读取完成事件：
fr.onload = function(){}
//当文件读取完成，可以通过result属性获取结果
fr.result
```
参考资料：
https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader#toc

案例：

```javascript
var file = document.getElementById("file");
    var box = document.getElementById("box");

    file.addEventListener("change", function () {
        console.dir(file);
        
        //files:里面存储了所有上传的文件
        //这个data就是我们上传的那个文件
        var data = file.files[0]
      
        //1. 创建一个文件读取器
        var fr = new FileReader();

        //2. 让文件读取器读取整个文件
        fr.readAsDataURL(data);

        //3. 等待文件读取完
        //onload：文件读取完成后，就会触发
        fr.onload = function () {
            var img = document.createElement("img");
            img.src = fr.result;
            box.innerHTML = "";
            box.appendChild(img);
        }
    });
```

# 拖拽

在HTML5的规范中，我们可以通过为元素增加draggable="true"来设置此元素是否可以进行拖拽操作，其中图片、链接默认是开启的。

## 拖拽元素

页面中设置了draggable="true"属性的元素，其中`<img>`、`<a>`标签默认是可以被拖拽的

## 目标元素, 事件监听

页面中任何一个元素都可以成为目标元素

```
ondragover	应用于目标元素，当停留在目标元素上时调用
ondrop		应用于目标元素，当在目标元素上松开鼠标时调用(浏览器默认不让拖拽，需要组织dragover的默认行为。)
```