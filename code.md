##日志

### 开始时间: 11月30日 周四.



## 技巧

### 关于动效

1. 可以为一个元素, 定义两个 **class** , 使用 **transition** 属性来自动生成补间动画, 在触发事件时, 切换 **class** 即可.

### jQuery

1. `data('…')` , 获取 **html** 标签中的 **data-** 自定义属性.

## Code

### ajax验证用户登录

> 思路: 获取 **url** 字符串, 如果没有 **login.html** 这个字段, 则开始验证.

```javascript
$(function() {
  if (location.href.indexOf('login.html') != -1) return;
  $.ajax({
    type: 'get',
    url: '/employee/checkRootLogin',
    success: function(data) {
      if (data.error) location.href = './login.html';
    }, // success end
  }); // ajax end
}); // 登录验证 end
```

### 移动端全屏容器模板

```css
@charset "UTF-8";
/*全屏容器开始*/
html,body {
  height: 100%;
  width: 100%;
}
.lt_container {
  width: 100%;
  height: 100%;
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 45px;
  padding-bottom: 55px;
  position: relative;
}
.lt_header {
  height: 45px;
  width: 100%;
  background-color: #069;
  position: absolute;
  top: 0;
}
.lt_footer {
  height: 55px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #069;
}
.lt_main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
/*全屏容器 end*/
```

> html

```html
<div class="lt_container">
  <!-- 头部开始 -->
  <div class="lt_header"></div>
  <!-- 头部结束 -->
  <!-- 主体开始 -->
  <div class="lt_main"></div>
  <!-- 主体结束 -->
  <!-- 底部开始 -->
  <div class="lt_footer"></div>
  <!-- 底部结束 -->
</div>
```

## 移动端 Code

### 弹性滚动

```javascript
;(function() {

  scroll({
    main: '#box',
    content: '#content',
    limit: 40,
  });

  function scroll(options) {
    var main = document.querySelector(options.main);
    /**
    容器, 要求 overflow: hidden;
    */
    var content = document.querySelector(options.content); // 内容主体

    if (content.offsetWidth <= main.offsetWidth) return false;
    /** 如果内容小于容器, 则不触发 */
    var limit = options.limit || 100; // 顶部或左侧
    var maxBottom = -(content.offsetWidth - main.offsetWidth + limit); // 底部或右侧
    var start = 0; // 起点
    var center = 0; // 中继器
    var d = 0; // 差值

    content.addEventListener('touchstart', function(e) {
      content.style.transition = 'none';
      start = e.changedTouches[0].clientX;
      console.log(start);
    }); // touchstart end

    main.addEventListener('touchmove', function(e) {
      d = e.changedTouches[0].clientX - start;
      var temp = d + center;
      if (temp >= limit) temp = limit;
      if (temp <= maxBottom) temp = maxBottom;
      content.style.transform = 'translateX(' + temp + 'px)';
    }); // touchmove end

    main.addEventListener('touchend', function(e) {
      center = d + center;
      content.style.transition = '.5s';
      if (center >= 0) {
        content.style.transform = 'translateX(' + 0 + 'px)';
        center = 0;
      }
      if (center <= maxBottom + limit) {
        center = maxBottom + limit;
        content.style.transform = 'translateX(' + center + 'px)';
      }
    }); // touchend end
  }

})(); // end

```

