## 命名约定
命名约定的模式如下：

````css
.block{}
.block__element{}
.block--modifier{}	
.block__element--modifier{}	
````

- .block 代表了更高级别的抽象或组件。
- .block__element 代表.block的后代，用于形成一个完整的.block的整体。
- .block/element--modifier代表block或者element的不同状态或不同版本。
- 如果命名有多个单词用"-"分隔

## 不需要BEM的地方
- 可能在头部或底部出现的通用的Logo样式
    ````css
    .site-logo{}
    .site-logo--xmas{}
    ````
    
## 最佳实践
- BEM + 面向属性 + 命名空间
- 组合类不超过4个
- 不要出现层级选择
- 状态类直接使用单词，参考上面的关键词，如.active, .checked
- 图标以icon-为前缀
- .js－ 表示定义 JavaScript 钩子，不用于定义样式    

## BEM + 命名空间
命名空间定义 block 间的关系，这种方式网站上还没有大范围使用，最常见的如 .js－ 表示定义 JavaScript 钩子，不用于定义样式。常见命名空间：

- js-：表示一个 JavaScript 钩子。如 .js-modal。
- is-，has-：表示一种状态或条件样式。如 .is-active .has-loaded
- c-：表示一个组件（Component），指一个具体的、特定实现的 UI。如 .c-avatar .c-card .c-checklist
- t-：表示一个主题（Theme），如 .t-light。
- u-: 工具类，比如u-hide
- a-: 属性类 比如a-mt8
- s-：表示一个上下文或作用域（Scope），如 .s-cms-content。
- _：表示一个 hack，如 ._important。
- qa-：表示测试钩子。


### example
- modal头部 .modal-hd, modal 标题 .modal-tt


## 一些简写
- header hd
- title tt

## 常见class关键词：
- 布局类：header, footer, container, main, content, aside, page, section
- 包裹类：wrap, inner
- 区块类：region, block, box
- 结构类：hd, bd, ft, top, bottom, left, right, middle, col, row, grid, span
- 列表类：list, item, field
- 主次类：primary, secondary, sub, minor
- 大小类：s, m, l, xl, large, small
- 状态类：active, current, checked, hover, fail, success, warn, error, on, off
- 导航类：nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last
- 交互类：tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay,
- 星级类：rate, star
- 分割类：group, seperate, divider
- 等分类：full, half, third, quarter
- 表格类：table, tr, td, cell, row
- 图片类：img, thumbnail, original, album, gallery
- 语言类：cn, en
- 论坛类：forum, bbs, topic, post
- 方向类：up, down, left, right
- 其他语义类：btn, close, ok, cancel, switch; link, title, info, intro, more, icon; form, label, search, contact, phone, date, email, user; view, loading...

## Example

一个Block下应该是多个Element，Element不能嵌套

````html
<!-- DO THIS -->
<figure class="photo">
  <img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">
    <blockquote class="photo__quote">
      Look at me!
    </blockquote>
  </figcaption>
</figure>

<style>
  .photo { }
  .photo__img { }
  .photo__caption { }
  .photo__quote { }
</style>


<!-- DON'T DO THIS -->
<figure class="photo">
  <img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">
    <blockquote class="photo__caption__quote"> <!-- never include more than one child element in a class name -->
      Look at me!
    </blockquote>
  </figcaption>
</figure>

<style>
  .photo { }
  .photo__img { }
  .photo__caption { }
  .photo__caption__quote { }
</style>
````

````html
<!-- DO THIS -->
<style>
    .block__list{
    
    }
    
    .block__list-item{
    
    }
</style>

<!-- DON'T DO THIS -->
<style>
    .block__list{
    
    }
    
    .block__list__item{
    
    }
</style>
````

## 线束语
BEM最难的部分之一是明确作用域是从哪开始和到哪结束的，以及什么时候使用（不使用）它。随着接触的多了，有了经验积累，你慢慢就会知道怎么用，这些问题也不再是问题

## 参考
[BEM思想之彻底弄清BEM语法](https://www.w3cplus.com/css/mindbemding-getting-your-head-round-bem-syntax.html)
[什么鬼，又不知道怎么命名class了](https://www.w3cplus.com/css/css-class-name.html)
[CSS 命名规范总结](https://jiandanxinli.github.io/2016-08-11.html)
[BEM Example](https://seesparkbox.com/foundry/bem_by_example)
[响应式命名](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)

