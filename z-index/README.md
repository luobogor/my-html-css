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
- 如果定位元素没有z-index嵌套
	 1. 祖先优先原则
- 触发创建层叠水平上下文的条件
	- 根元素本身就是层叠水平上下文
	- z-index设置为数值
	- 其他属性？？
- 7阶层叠水平
>重要性：内容>布局>装饰
![](https://ws4.sinaimg.cn/large/006tNbRwgy1fmqsaj9b5ij30pn0gy42v.jpg)

