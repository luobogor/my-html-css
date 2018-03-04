
- strong与em

   样式上 
   
   <b> bold 和<i> italic 它们分别指定粗体和斜体。
   
   语义上
   
   i 元素代表在普通文本中具有不同语态或语气的一段文本，某种程度上表明一段不同特性的文本，比如一个分类学名称，一个技术术语，一个外语习语，一个音译，一个想法，或者西方文本中的一艘船名。
   
   
   <strong> 不仅样式上表现粗体，阅读器会以低沉语气读出，表示内容的重要性
   <strong> 标签和 <em> 标签一样，用于强调文本，但它强调的程度更强一些。em 默认用斜体表示，strong 用粗体表示
   
   
   
- 页面导入样式时，使用link和@import有什么区别？


		（1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;

		（2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;

		（3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;
		
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