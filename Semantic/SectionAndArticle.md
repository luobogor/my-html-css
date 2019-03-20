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


- title与h1的区别、b与strong的区别、i与em的区别？

    title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响；
    
    strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<b>是展示强调内容。
    
    i内容展示为斜体，em表示强调的文本；


- 页面重构怎么操作？

		网站重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。
		也就是说是在不改变UI的情况下，对网站进行优化，在扩展的同时保持一致的UI。

		对于传统的网站来说重构通常是：

		表格(table)布局改为DIV+CSS
		使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对IE6有效的)
		对于移动平台的优化
		针对于SEO进行优化
		深层次的网站重构应该考虑的方面

		减少代码间的耦合
		让代码保持弹性
		严格按规范编写代码
		设计可扩展的API
		代替旧有的框架、语言(如VB)
		增强用户体验
		通常来说对于速度的优化也包含在重构中

		压缩JS、CSS、image等前端资源(通常是由服务器来解决)
		程序的性能优化(如数据读写)
		采用CDN来加速资源加载
		对于JS DOM的优化
		HTTP服务器的文件缓存
