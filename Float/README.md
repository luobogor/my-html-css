absolute与float都有block化能力

### 脱离文本流
#### float
文字环绕效果是很明显的，这里要注意一个地方:浮动的块虽然脱离的正常的文档流，但是还会占有正常文档流的文本空间，可以看到上面第二种图，p的区域其实是顶到了img的底下的，因为float让img脱离文档流，但是p上的文字却没有顶过去，也就是说p上的一部分文字空间仍然被img占据着，所以从这里也可以看出float的脱离文档流不是完全脱离。
#### absolute
而absolute则直接覆盖到文字上面，完全脱离文档流

如果不需要支持I6/7，这样写已经足够了，不需要在before也做动作

````css
.clearfix:after{
  /*content与display为了解决Opera浏览器的BUG*/
  content:" "; /*注意里面的空格*/
  display:block;
  clear:both;
}
````

https://segmentfault.com/a/1190000008424822
http://blog.staynoob.cn/post/2016/05/css-float-clearfix-best-in-practice/