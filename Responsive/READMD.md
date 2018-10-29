## 响应式
在CSS的世界里，这个答案通常是，看情况。rem只是你的工具箱中的其中一个。掌握CSS很重要的一点，就是学会分辨在什么场景下该使用什么工具。我的选择是，对font-size使用rem，对border使用px，对其他的度量方式如padding、margin、border-radius等使用em。然而在必要时，需要声明容器的宽度的话，我更喜欢使用百分比。

这样，字号大小就变得可预测，而当其他因素影响到元素的字号大小时，你也可以借助em去缩放元素的padding和margin。在border上使用像素是很合适的，尤其当你想要一根漂亮的线的时候。以上就是我对不同属性使用不同单位的理想方案，不过我要再次声明，这些都是工具，在某些特定场景下，利用不同的工具可能取到更好的效果。

## 参考 
http://wuyuying.com/blog/archives/css-in-depth-relative-units/

https://www.zhangxinxu.com/wordpress/2016/08/vw-viewport-responsive-layout-typography/

### em 计算方式
em的基准值是当前元素的字号大小，当font-size使用em作为单位时，在font-size上的em会先从继承到的字号大小衍生出来

你已经使用过em声明font-size了（基于一个继承的字号大小值）。以及，你也曾经使用em声明其他属性，如padding和border-radius（基于当前元素的字号大小值）。当你针对同一个元素使用em声明font-size和其他属性的时候，em会变得很神奇。此时浏览器必须先计算font-size，然后基于这个值再去计算其他值。
