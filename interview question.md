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

> **IE** 无法调整那些使用 **px** 作为单位的字体大小, 而 **em** 和 **rem** 可以缩放, **rem** 相对于 **HTML** 的字体大小, 只要修改 **HTML** 的字体大小, 就可以调整页面中所有元素的字体大小, 又可以避免字体大小逐层复合的连锁反应, 除了 **IE8及以前的版本** 所有浏览器都支持 **rem** 属性.

### 4.  什么是BFC

> 块级格式化上下文.
>
> 无论内部怎么玩, 都不会影响外面的盒子.
>
> 可以清除内部浮动, 高度根据内容决定.
>
> 可以清除margin塌陷, 也能用作自适应布局.

#### 触发方式

1. overflow: hidden | scroll | auto ;
2. float: left | right ;
3. position: absolute | fixed ;
4. display: inline-block ;

### 5. 实现表格自动换行

word-break: normal; 实现浏览器默认的换行规则;

​		       break-all; 允许单词换行

​                       keep-all; 只能在半角空格或连字符处换行

word-wrap: normal; 浏览器默认换行规则

​                      break-word; 在长单词或 **URL** 地址内部换行.

###6. box-sizing, transition, translate

#### box-sizing

> 当设置为 border-box 的时候, 会将 border 和 padding 算进宽度里.

#### transition

> 当元素的某些属性发生变化时, 可以平滑过渡

| 参数                         | 描述              |
| -------------------------- | --------------- |
| transition-propety         | 设置过渡属性          |
| transition-duration        | 设置过渡时间, ms \| s |
| transition-timing-function | 设置运动曲线          |
| transition-delay           | 设置延迟时间, ms \| s |

#### translate

> 改变元素移动位置, x, y, z

### 7. 选择器的优先级

> !important > 行内 > id > 类 > 标签 > 通配符(*) > 继承

### 8. CSS3新增的选择器

> 属性选择器, 伪类选择器, 伪元素选择器

### 9. Iframe的作用 - 略

### 10. 导航栏在 chrome 里样式正常, 在 IE 中文字就聚到了一起, 那个兼容性出了问题

> display: flex; 在 **IE10** 一下无效

### 11. CSS3新增特性

| 属性   | 描述                | 备注   |
| ---- | ----------------- | ---- |
| 颜色   | 新增 RGBA , HSLA 模式 |      |
| 文字阴影 | text-shadow       |      |
| 圆角   | border-radius     |      |
| 盒子阴影 | box-shadow        |      |



## JavaScript



