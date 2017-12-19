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

| 描述         | 属性                | 备注                |
| ---------- | ----------------- | ----------------- |
| 颜色         | color             | 新增 RGBA , HSLA 模式 |
| 文字阴影       | text-shadow       |                   |
| 圆角         | border-radius     |                   |
| 盒子阴影       | box-shadow        |                   |
| 盒子模型       | box-sizing        |                   |
| 背景         | background-size   | 背景图片尺寸            |
|            | background-origin | 背景的原点             |
|            | background-clip   | 背景裁切              |
| 渐变         | linear-gradient   | 线性渐变              |
|            | radial-gradient   | 径向渐变              |
| 过渡         | transition        |                   |
| 动画         | animation         |                   |
| 伪元素        | ::selection       |                   |
| 媒体查询, 多栏布局 |                   |                   |
|            | border-image      |                   |
| 2D与3D转换    | translate         |                   |
|            | rotale            |                   |
|            | skew              |                   |
|            | scale             |                   |

### 12. xhtml 与 html 的区别

> XHTML 比 HTML 更规范.

### 13. CSS 引入的方式

> link: 内联, 外链, 无兼容性. 可以被js改变样式.
>
> @import: 内嵌, 导入, CSS2.1以下不支持, 不可被js改变样式.

### 14. 标签上的 title 与 alt 属性的区别

> alt: 当图片不显示时, 用文字代替.
>
> title: 图片的提示信息, (鼠标hover时触发).

### 15. css reset的作用

> 干掉浏览器CSS的默认属性.

### 16. css sprites

> 精灵图, 所有常用图标放在一张 透明 PNG 上, 这样只需要请求一次就可以了.

### 17. 清除浮动

1. 给父元素设置 height : 解决父元素无法获取高度的问题.
2. 在结尾处设置一个空的div, 设置 clear: both : 用伪元素同理.
3. 父元素设置overflow:hidden: 触发BFC.
4. 等

### 18. z-index

> 只有position 为 relative | absolute | fixed 的元素才有小, 类似于图层.数值越高, 优先级越高.

### 19. 简述一套设计方案, 适应不同屏幕的分辨率

> 参考bootstrap, 采用响应式设计.
>
> 可以使用css的媒体查询功能, 设置元素在不同分辨率下的样式.

### 20. 描述渐进增强和优雅降级的不同 - (待议)

- 优雅降级: 应该针对主流和高级浏览器来设计网站.
- 渐进增强: 设计时更加注重于内容.

### 21. 在新窗口打开页面的方式

> 给 a标签 设置 target="_blank"

### 22. 简述 web 语义化的理解 - (待议)

> 让浏览器更好的读懂代码, 易于SEO, 让人更好的维护代码, 见名识意.

### 23. DOCTYPE 的作用

> DOCTYPE标签是一种标准通用标记语言的文档类型声明, 它的目的是要告诉标准通用标记语言解析器, 它应该使用什么样的文档类型定义（DTD）来解析文档.

### 24. 盒模型

> 由 内容(content) 内边距(padding) 边框(border) 和 外边距(margin) 组成.
>
> 元素框的最内部分是实际的内容，直接包围内容的是内边距。内边距呈现了元素的背景。内边距的边缘是边框。边框以外是外边距，外边距默认是透明的，因此不会遮挡其后的任何元素。

### 25. display: inline-block 为何有间隙

> 由于, html中换行或者空格导致的, 将父元素的 font-size 设置为0 可以解决.

### 26. overflow 的属性值

| 参数      | 描述              |
| ------- | --------------- |
| visible | 默认值: 子元素全部可见    |
| hidden  | 子元素超出父元素的部分会被隐藏 |
| scroll  | 同上, 会出现竖向滚动条    |
| auto    | 同上, 会出现横向和竖向滚动条 |
| inherit | 继承父元素的值         |



## JavaScript

### 1. console的方法



