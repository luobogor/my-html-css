## 呈现引擎 
负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。

图：呈现引擎的基本流程。

呈现引擎将开始解析 HTML 文档，并将各标记逐个转化成“内容树”上的 DOM 节点。同时也会解析外部 CSS 文件以及样式元素中的样式数据。HTML 中这些带有视觉指令的样式信息将用于创建另一个树结构：呈现树。

呈现树包含多个带有视觉属性（如颜色和尺寸）的矩形。这些矩形的排列顺序就是它们将在屏幕上显示的顺序。

呈现树构建完毕之后，进入“布局”处理阶段，也就是为每个节点分配一个应出现在屏幕上的确切坐标。下一个阶段是绘制 - 呈现引擎会遍历呈现树，由用户界面后端层将每个节点绘制出来。


## 线程

`JavaScript引擎`是基于事件驱动单线程执行的，JavaScript引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JavaScript线程在运行JavaScript程序。

`GUI渲染线程`负责渲染浏览器界面，当界面需要重绘（Repaint）或由于某种操作引发回流(Reflow)时，该线程就会执行。但需要注意，GUI渲染线程与JavaScript引擎是互斥的，当JavaScript引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到JavaScript引擎空闲时立即被执行。

`事件触发线程`，当一个事件被触发时，该线程会把事件添加到待处理队列的队尾，等待JavaScript引擎的处理。这些事件可来自JavaScript引擎当前执行的代码块如setTimeout、也可来自浏览器内核的其他线程如鼠标点击、Ajax异步请求等，但由于JavaScript的单线程关系，所有这些事件都得排队等待JavaScript引擎处理（当线程中没有执行任何同步代码的前提下才会执行异步代码）。

## 时间线

优化的关键是尽快构建CSS tree，因为构建render tree同时需要DOM tree与CSS tree

javascript标签是同步执行的经过src请求再请求严重阻塞构建DOM tree 与 CSS tree，
所以会等待上面的CSSDOM构建完成才会往下继续执行

如果js在CSS上方，js会立即执行不会被CSS tree构建阻塞

![](https://ws2.sinaimg.cn/large/006tNc79gy1fou41l3s1cj30ph0d7n1d.jpg)

![](https://ws4.sinaimg.cn/large/006tNc79gy1fou4q81pf7j30q00ewwjn.jpg)

![](https://ws4.sinaimg.cn/large/006tNc79gy1fou58ns2qvj30po0e2wqf.jpg)

从耗时的角度，浏览器请求、加载、渲染一个页面，时间花在下面五件事情上：

DNS 查询
TCP 连接
HTTP 请求即响应
服务器响应
客户端渲染
本文讨论第五个部分，即浏览器对内容的渲染，这一部分（渲染树构建、布局及绘制），又可以分为下面五个步骤：

1. 处理 HTML 标记并构建 DOM 树。
2. 处理 CSS 标记并构建 CSSOM 树。
3. 将 DOM 与 CSSOM 合并成一个渲染树。
4. 根据渲染树来布局，也就是为每个节点分配一个应出现在屏幕上的确切坐标。
5. 将各个节点绘制到屏幕上。


## 脚本加载
- 网络的模型是同步的。网页作者希望解析器遇到 <script> 标记时立即解析并执行脚本。文档的解析将停止，直到脚本执行完毕。如果脚本是外部的，那么解析过程会停止，直到从网络同步抓取资源完成后再继续。此模型已经使用了多年，也在 HTML4 和 HTML5 规范中进行了指定。
作者也可以将脚本标注为“defer”，这样它就不会停止文档解析，而是等到解析结束才执行。HTML5 增加了一个选项，可将脚本标记为异步，以便由其他线程解析和执行。

- Firefox 在样式表加载和解析的过程中，会禁止所有脚本。而对于 WebKit 而言，仅当脚本尝试访问的样式属性可能受尚未加载的样式表影响时，它才会禁止该脚本。

### 呈现树和 DOM 树的关系
呈现器是和 DOM 元素相对应的，但并非一一对应。非可视化的 DOM 元素不会插入呈现树中，例如“head”元素。如果元素的 display 属性值为“none”，那么也不会显示在呈现树中（但是 visibility 属性值为“hidden”的元素仍会显示）。

在 WebKit 中，解析样式和创建呈现器的过程称为“附加”。每个 DOM 节点都有一个“attach”方法。附加是同步进行的，将节点插入 DOM 树需要调用新的节点“attach”方法。

### 呈现器

````
class RenderObject{
  virtual void layout();//布局
  virtual void paint(PaintInfo);//绘制
  virtual void rect repaintRect();
  Node* node;  //DOM节点
  RenderStyle* style;  // the computed style
  RenderLayer* containgLayer; //the containing z-index layer
}
````

 布局是一个递归的过程。它从根呈现器（对应于 HTML 文档的 <html> 元素）开始，然后递归遍历部分或所有的框架层次结构，为每一个需要计算的呈现器计算几何信息。
 
 根呈现器的位置左边是 0,0，其尺寸为视口（也就是浏览器窗口的可见区域）。
 所有的呈现器都有一个“layout”或者“reflow”方法，每一个呈现器都会调用其需要进行布局的子代的 layout 方法。


## 布局
### 全局布局(同步)和增量布局(异步)
全局布局是指触发了整个呈现树范围的布局，触发原因可能包括：

影响所有呈现器的全局样式更改，例如字体大小更改。
屏幕大小调整。
布局可以采用增量方式，也就是只对 dirty 呈现器进行布局

异步布局和同步布局
增量布局是异步执行的。Firefox 将增量布局的“reflow 命令”加入队列，而调度程序会触发这些命令的批量执行。WebKit 也有用于执行增量布局的计时器：对呈现树进行遍历，并对 dirty 呈现器进行布局。 


当你增加、删除、修改DOM结点时，会导致Reflow或Repaint
当你移动DOM的位置，或是搞个动画的时候。
当你修改CSS样式的时候。
当你Resize窗口的时候（移动端没有这个问题），或是滚动的时候。
当你修改网页的默认字体时。

基本上来说，reflow有如下的几个原因：

Initial。网页初始化的时候。
Incremental。一些Javascript在操作DOM Tree时。
Resize。其些元件的尺寸变了。
StyleChange。如果CSS的属性发生变化了。
Dirty。几个Incremental的reflow发生在同一个frame的子树上。
好了，我们来看一个示例吧：

````js
var bstyle = document.body.style; // cache
 
bstyle.padding = "20px"; // reflow, repaint
bstyle.border = "10px solid red"; //  再一次的 reflow 和 repaint
 
bstyle.color = "blue"; // repaint
bstyle.backgroundColor = "#fad"; // repaint
 
bstyle.fontSize = "2em"; // reflow, repaint

// new DOM element - reflow, repaint
document.body.appendChild(document.createTextNode('dude!'));
````

当然，我们的浏览器是聪明的，它不会像上面那样，你每改一次样式，它就reflow或repaint一次。一般来说，浏览器会把这样的操作积攒一批，然后做一次reflow，这又叫异步reflow或增量异步reflow。但是有些情况浏览器是不会这么做的，比如：resize窗口，改变了页面默认的字体，等。对于这些操作，浏览器会马上进行reflow。

但是有些时候，我们的脚本会阻止浏览器这么干，比如：如果我们请求下面的一些DOM值：

- offsetTop, offsetLeft, offsetWidth, offsetHeight
- scrollTop/Left/Width/Height
- clientTop/Left/Width/Height
- IE中的 getComputedStyle(), 或 currentStyle

因为，如果我们的程序需要这些值，那么浏览器需要返回最新的值，而这样一样会flush出去一些样式的改变，从而造成频繁的reflow/repaint(触发增量布局)

### 减少reflow/repaint
下面是一些Best Practices：

1）不要一条一条地修改DOM的样式。与其这样，还不如预先定义好css的class，然后修改DOM的className。

````
// bad
var left = 10,
top = 10;
el.style.left = left + "px";
el.style.top  = top  + "px";
 
// Good
el.className += " theclassname";
 
// Good
el.style.cssText += "; left: " + left + "px; top: " + top + "px;";
2）把DOM离线后修改。如：
````

使用documentFragment 对象在内存里操作DOM
先把DOM给display:none(有一次reflow)，然后你想怎么改就怎么改。比如修改100次，然后再把他显示出来。
clone一个DOM结点到内存里，然后想怎么改就怎么改，改完后，和在线的那个的交换一下。
3）不要把DOM结点的属性值放在一个循环里当成循环里的变量。不然这会导致大量地读写这个结点的属性。

4）尽可能的修改层级比较低的DOM。当然，改变层级比较底的DOM有可能会造成大面积的reflow，但是也可能影响范围很小。

5）为动画的HTML元件使用fixed或absoult的position，那么修改他们的CSS是不会reflow的。

6）千万不要使用table布局。因为可能很小的一个小改动会造成整个table的重新布局。

### 事件循环
浏览器的主线程是事件循环。它是一个无限循环，永远处于接受处理状态，并等待事件（如布局和绘制事件）发生，并进行处理。这是 Firefox 中关于主事件循环的代码：

````
while (!mExiting)
    NS_ProcessNextEvent(thread);
````

Reflow——意味着元件的几何尺寸变了，我们需要重新验证并计算Render Tree。

注：display:none会触发reflow，而visibility:hidden只会触发repaint，因为没有发现位置变化。

repaint(重绘) ，repaint发生更改时，元素的外观被改变，且在没有改变布局的情况下发生，如改变outline,visibility,background color，不会影响到dom结构渲染。

reflow(渲染)，与repaint区别就是他会影响到dom的结构渲染，同时他会触发repaint，他会改变他本身与所有父辈元素(祖先)，这种开销是非常昂贵的，导致性能下降是必然的，页面元素越多效果越明显。

所以display:none才会产生reflow


## 特异性
选择器的特异性由 CSS2 规范定义如下：

- 如果声明来自于“style”属性，而不是带有选择器的规则，则记为 1，否则记为 0 (= a)
- 记为选择器中 ID 属性的个数 (= b)
- 记为选择器中其他属性和伪类的个数 (= c)
- 记为选择器中元素名称和伪元素的个数 (= d)

将四个数字按 a-b-c-d 这样连接起来（位于大数进制的数字系统中），构成特异性。
您使用的进制取决于上述类别中的最高计数。 
例如，如果 a=14，您可以使用十六进制。如果 a=17，那么您需要使用十七进制；当然不太可能出现这种情况，除非是存在如下的选择器：html body div div p ...（在选择器中出现了 17 个标记，这样的可能性极低）。

一些示例：

````
 *             {}  /* a=0 b=0 c=0 d=0 -> specificity = 0,0,0,0 */
 li            {}  /* a=0 b=0 c=0 d=1 -> specificity = 0,0,0,1 */
 li:first-line {}  /* a=0 b=0 c=0 d=2 -> specificity = 0,0,0,2 */
 ul li         {}  /* a=0 b=0 c=0 d=2 -> specificity = 0,0,0,2 */
 ul ol+li      {}  /* a=0 b=0 c=0 d=3 -> specificity = 0,0,0,3 */
 h1 + *[rel=up]{}  /* a=0 b=0 c=1 d=1 -> specificity = 0,0,1,1 */
 ul ol li.red  {}  /* a=0 b=0 c=1 d=3 -> specificity = 0,0,1,3 */
 li.red.level  {}  /* a=0 b=0 c=2 d=1 -> specificity = 0,0,2,1 */
 #x34y         {}  /* a=0 b=1 c=0 d=0 -> specificity = 0,1,0,0 */
 style=""          /* a=1 b=0 c=0 d=0 -> specificity = 1,0,0,0 */
 ````

## 参考
Wikipedia layout reflow
https://zhuanlan.zhihu.com/p/29418126
https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=zh-cn
https://cn.udacity.com/course/website-performance-optimization--ud884



为什么会阻塞
js在浏览器中需要被下载、解释、执行这三部。 html中的script标签是阻塞的， 也就是说顺序下载、解释、执行。

浏览器会在js执行后决定当前文档是否需要进行重新渲染或者重排。 
js引擎线程和UI线程是互斥的， 所以js执行时会阻塞页面的渲染。

下载虽然是异步的， 但是执行还是同步的。 先出现的SCRIPT标签一定是先执行。 即使它是最后一个下载完成。
js执行中终端浏览器html解析

图片不会影响render关键路径


DOMContentLoaded and styles
External style sheets don’t affect DOM, and so DOMContentLoaded does not wait for them.

But there’s a pitfall: if we have a script after the style, then that script must wait for the stylesheet to execute:

<link type="text/css" rel="stylesheet" href="style.css">
<script>
  // the script doesn't not execute until the stylesheet is loaded
  alert(getComputedStyle(document.body).marginTop);
</script>
The reason is that the script may want to get coordinates and other style-dependent properties of elements, like in the example above. Naturally, it has to wait for styles to load.

As DOMContentLoaded waits for scripts, it now waits for styles before them as well.



规则层次越深，求值越慢
![](https://ws2.sinaimg.cn/large/006tNc79gy1fou3ak0ozmj30o90c2td0.jpg)

告诉浏览器布局视口宽度应该等于设备宽度
eg:假设设备宽度320px，页面也出现了下面的语句，浏览器会将布局视口设为320px
如果没有加如下语句，浏览器就会使用默认视口宽度，一般是980px。
有时候，网站呈现后内容就缩小了，需要放大才看得清，那是因为那个网站没有设置布局视口
````html
<!--initial-scale=1.0??-->
<meta name="viewport" content="width=device-width,initial-scale=1.0">
````

预加载扫描器会扫描文档一次请求所有JS文件，不会因为等待CSS tree构建而一个接一个地请求
![](https://ws3.sinaimg.cn/large/006tNc79gy1fou714f2m4j30um0hzaiw.jpg)

## 优化

Minify 缩小、 Compress 压缩、Cache 缓存，（关键在减少网络请求量）
HTML CSS JS

关键在减少关键资源的数量
MINIMIZE use of render blocking resources
1 在link中使用媒体查询来取消阻止render，比如打印样式都放在一个css文件，这些样式与构建当前CSS tree无关，可以加快构建CSS tree的速度
![](https://ws1.sinaimg.cn/large/006tNc79gy1fou65f0wn7j30qc0can0w.jpg)

2 内联CSS

缩小关键路径长度
MINIMIZE use of parser blocking resources
async 、 defer JS


脚本标记也可以采用 defer 属性，方法与采用 async 属性相同。差别在于对于 defer，脚本需要等到文档解析后执行，而 async 允许脚本在文档解析时位于后台运行。

defer这个布尔属性被设定用来通知浏览器该脚本将在文档完成解析后，触发 DOMContentLoaded 事件前执行