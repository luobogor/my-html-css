- resetCSS Normalize

reset.css 直接把所有的样式全部初始化了，
Normalize.css 修正了一些bug及主流浏览器在渲染上的不一致，并保留了一些浏览器默认样式。

- 有些浏览器不完全支持css3，现在可以用哪个工具去检测浏览器是否支持，以及支持哪些项？

Modernizr.js


- 页面导入样式时，使用link和@import有什么区别？

		（1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;

		（2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;

		（3）link兼容性比import好;
		
- title与h1的区别、b与strong的区别、i与em的区别？

		title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响；

		strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容。
		strong展示为粗体，b展示为斜体

		i内容展示为斜体，em表示强调的文本；

		Physical Style Elements -- 自然样式标签
		b, i, u, s, pre
		Semantic Style Elements -- 语义样式标签
		strong, em, ins, del, code
		应该准确使用语义样式标签, 但不能滥用, 如果不能确定时首选使用自然样式标签。


- rem与em的区别

    rem相对于根元素大小，em相对于父元素大小
   
   
- href与src的区别

    src用于替换当前元素，href用于在当前文档和引用资源之间确立联系 relation = "stylesheet"
    
    script脚本阻塞，link非阻塞 