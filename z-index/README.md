## <<深入理解z-index>>笔记
- 可选值  
  - z-index:auto
  - z-index:<interger>
  - z-index:inherit
  
- 特性
  - 支持负值
  - 支持CSS3 animation动画
  
  ````
    @keyframes zIndex{
        0%{z-index:-1;}
        100%{z-index:51;}
    }
  ````
  - 在CSS2.1时代，需要和定位元素配合使用(经实验postition:static也是可以设置z-index的)
  ![](https://ws3.sinaimg.cn/large/006tNbRwgy1fmqr962hubj30mm0ey79x.jpg)
  
- 如果定位元素没有z-index嵌套
    1. 后来居上的准则
    2. 哪个大，哪个在上面

- 如果定位元素有z-index嵌套
	 1. 祖先优先原则
	 
- 触发创建层叠水平上下文的条件
	- 根元素（即html元素）
	- z-index 值不为 "auto"的 绝对/相对定位，
	- position: fixed
		
- 7阶层叠水平
>重要性：内容>布局>装饰
![](https://ws4.sinaimg.cn/large/006tNbRwgy1fmqsaj9b5ij30pn0gy42v.jpg)


## 概述

屏幕是二维的，我们并不能真正看到z轴，z-index越大，元素离用户越近

每一个网页都有一个默认的层叠上下文。 这个层叠上下文（桌子）的根源就是html元素。 
 
z-index 需要配合非static定位使用
如果两个元素都有定位，而且没有设置z-index，那么后面在上
如果其中设置了，z-index大的在上面

如果定位元素有z-index嵌套的，就按照以上方式比较祖先。

当你给一个元素赋予了除 auto (自动) 外的z-index值时，你就创建了一个新的层叠上下文
当你将除了auto以外的z-index值赋给一个元素，你就创建了一个新的层叠上下文，它独立于其他的层叠上下文。