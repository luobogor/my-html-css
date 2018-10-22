![](https://ws4.sinaimg.cn/large/006tNc79gy1fp0uzh8iv5j30jx09m789.jpg)

### section
可嵌套section、atricle、aside。

section 应用的典型场景有文章的章节、标签对话框中的标签页、或者论文中有编号的部分。一个网站的主页可以分成简介、新闻和联系信息等几部分。

### article
可嵌套section、atricle、aside。

article 是一个特殊的 section 标签，它比 section 具有更明确的语义, 它代表一个独立的、完整的相关内容块。

例如，一篇博客文章中，包含用户提交的评论的 article 就应该嵌套在包含博客文章 article 之中。



### aside
表示次要的内容(不一定是放在侧栏)

### 总结
div 无任何语义，仅仅用作样式化或者脚本化的钩子(hook)，对于一段主题性的内容，则就适用section，而假如这段内容可以脱离上下文，作为完整的独立存在的一段内容，则就适用 article。

来源：[HTML5 中 div section article 的区别](https://www.qianduan.net/html5-differences-in-the-div-section-article/)
