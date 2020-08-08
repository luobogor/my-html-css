## 响应式
在CSS的世界里，这个答案通常是，看情况。rem只是你的工具箱中的其中一个。掌握CSS很重要的一点，就是学会分辨在什么场景下该使用什么工具。我的选择是，对font-size使用rem，对border使用px，对其他的度量方式如padding、margin、border-radius等使用em。然而在必要时，需要声明容器的宽度的话，我更喜欢使用百分比。

这样，字号大小就变得可预测，而当其他因素影响到元素的字号大小时，你也可以借助em去缩放元素的padding和margin。在border上使用像素是很合适的，尤其当你想要一根漂亮的线的时候。以上就是我对不同属性使用不同单位的理想方案，不过我要再次声明，这些都是工具，在某些特定场景下，利用不同的工具可能取到更好的效果。

## rem 计算方式
-

## em 计算方式
- em 的基准值是当前元素的字号大小，比如当前 div 的 font-size 为 12px，padding 为 1em，那么 padding 最终计算结果为 12px
- 如果 font-size 使用 em 单位，则按继承父标签计算。比如 ul 的 font-size: 16px，
li 的 font-size 为 1.2em，那么 li 最终计算结果 1.2 * 16 = 19.2px

## 参考
https://wuyuying.com/css-in-depth-relative-units/
