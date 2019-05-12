## 盒子模型

### 基本概念：
- 标准模型(box-sizing默认为content-box)
- IE模型(box-sizing默认为border-box)

### 标准模型
- width属性的值 = content

### IE模型
- width属性的值 = content + padding + border

注意IE浏览下box-sizing默认为content-box，不是border-box，不要被IE模型混淆。
在怪异模式下，box-sizing默认才为border-box

## JS获取元素宽高
- dom.style.width/height 只能取内联样式的宽高
- dom.currentStyle.width/height 获取渲染后的宽高，不过只有IE有这个属性
- window.getComputedStyle(dom).width/height 兼容Chrome,Firefox(content-box时获取content宽高,border-box时连同padding、border一直计算)
- dom.getBoundingClientRect().width/height (无论是 content-box 还是 border-box，都是连同padding、border一直计算)
- dom.offsetWidth,dom.offsetHeight (与getBoundingClientRect计算结果相同)

## BFC
BFC定义：块级格式化上下文，它是指一个独立的块级渲染区域，只有Block-level Box参与，该区域拥有一套渲染规则来约束块级盒子的布局，且与区域外部无关。

满足下列CSS声明之一的元素便会生成BFC：

1. 根元素或其它包含它的元素(<html></html>是根元素，这个标签会生成一个BFC)
2. float的值不为none；
3. overflow的值不为visible；
4. position的值不为static；
5. display的值为inline-block、table-cell、table-caption；
6. flex boxes (元素的display: flex或inline-flex)；

> 注：也有人认为display: table能生成BFC，最主要原因是table会默认生成一个匿名的table-cell，正是这个匿名的table-cell生成了BFC。

### 应用
0. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
1. 属于同一个BFC的元素会发生边距重叠，无论是兄弟元素、还是父子元素
2. BFC的区域不会与float元素区域重叠
3. 计算BFC的高度时，浮动子元素也参与计算（清浮动）

####  margin折叠规则
- 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
- 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
- 两个外边距一正一负时，折叠结果是两者的相加的和。

## 参考
[CSS: 潜藏着的BFC](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651553261&idx=1&sn=5ca1a2a942d9943576fceacde8fc99ec&chksm=8025aa2cb752233a24002fc7b6755e4c1b1e336d6a3e0757b606718528a31931167f174a1d0b&scene=0&key=341be94069104575b318ad1886380c57ab496e27116321ca51c8e219e8cf132e61d99a5735ec1bb3f0503d35d103e039c963504ad7760d3e68c6d1f6da2fae47c1f5f440e52daddd08152d4726182b9a&ascene=0&uin=NjU4MTI5OTg1&devicetype=iMac+MacBookPro14%2C1+OSX+OSX+10.12.5+build(16F2073)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=Lti%2Fg%2Bng8AXqsUrVWicWjusA6np4NhWmSXpIWQk%2Bj24wMuoha5ALe2un0oZLkqYC)

[CSS 101: Block Formatting Contexts](https://yuiblog.com/blog/2010/05/19/css-101-block-formatting-contexts/)

[CSS清除浮动的原理与最佳实践](http://blog.staynoob.cn/post/2016/05/css-float-clearfix-best-in-practice/)


