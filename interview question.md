## HTML + CSS

### 1. 让一个不定宽高的DIV, 垂直水平居中

1) 使用 flex 布局.

```Css
* {
  padding: 0;
  margin: 0;
}
html, body {
  width: 100%;
  height: 100%;
}
/* 父容器需要有宽高 */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 下面的代码只是为了看的清楚些 */
  background: #ff5d5d;
}
/* 子元素其实不用设置任何样式 */
div {
  width: 50%;
  background: #585858;
  padding: 10px;
  color: #fff;
  box-sizing: border-box;
}
```

2) 使用绝对定位.

### 2. position 几个属性的作用

> position 的常见四个属性值为, `relative` , `absolute` , `fixed` , `static` , 定位属性需要配合 `top` `left` `bottom` `right` 使用.

- **static:** 它始终会处于文档流给予的位置, 会忽略所有的方向属性.
- **relative:** 可以通过方向属性, 基于自己原来在页面流中的位置, 进行偏移, 不会影响其他元素, 在文档流中仍占据位置.
- **absolute:** 通过方向属性, 基于其最近的具有 **relative 或 absolute **的祖先元素的位置进行偏移, 如果这个元素没有带有的定位的祖先元素, 则基于 **body** 进行偏移, 设置这个属性的元素在文档流中不占据位置.
- **fixed:** 通过方向属性, 基于浏览器窗口(body?)进行偏移, 无论窗口滚动与否, 它的位置都不会变动, 设置这个属性的元素在文档流中不占据位置.

### 3. px, em, rem 的区别 - (待议)

- **px:** 像素(pixel). 绝对单位, px是相对于屏幕的分辨率而言的.
- **em:** 相对长度单位, 根据当前对象内文本的字体尺寸, 如果没有设置 **font-size** , 则会相对于浏览器默认的字体大小, 会继承父元素的 **font-size** 属性.
- **rem:** CSS3中新增的相对单位(root em), 它相对于 **HTML** 的 **font-size** 属性.

**IE** 无法调整那些使用 **px** 作为单位的字体大小, 而 **em** 和 **rem** 可以缩放, **rem** 相对于 **HTML** 的字体大小, 只要修改 **HTML** 的字体大小, 就可以调整页面中所有元素的字体大小, 又可以避免字体大小逐层复合的连锁反应, 除了 **IE8及以前的版本** 所有浏览器都支持 **rem** 属性.

## JavaScript



