## Gecko
DOM Tree + CSS Rule Tree = Style Context Tree
Style Context Tree + Render Tree（Frame Tree） = 完成

Rendering Tree 渲染树并不等同于DOM树，因为一些像Header或display:none的东西就没必要放在渲染树中了。

最后通过调用操作系统Native GUI的API绘制。

Javascript动态修改了DOM属性或是CSS属会导致重新Layout。修改后的CSS rule没有被匹配到不会导致重新Layout


Repaint——屏幕的一部分要重画，比如某个CSS的背景色变了。但是元素的几何尺寸没有变。

Reflow——意味着元件的几何尺寸变了，我们需要重新验证并计算Render Tree。


注：display:none会触发reflow，而visibility:hidden只会触发repaint，因为没有发现位置变化。

repaint(重绘) ，repaint发生更改时，元素的外观被改变，且在没有改变布局的情况下发生，如改变outline,visibility,background color，不会影响到dom结构渲染。

reflow(渲染)，与repaint区别就是他会影响到dom的结构渲染，同时他会触发repaint，他会改变他本身与所有父辈元素(祖先)，这种开销是非常昂贵的，导致性能下降是必然的，页面元素越多效果越明显。

所以display:none才会产生reflow