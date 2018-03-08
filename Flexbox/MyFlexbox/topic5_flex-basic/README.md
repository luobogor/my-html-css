# flex-basic
- 默认值0%;任何可用于 width 和 height 的值都可接受
- 初始化宽度
- 推荐写法

````css
.flex-child{
    flex:1 0 300px;
}

/*与这个写法是等效的*/
.flex-child{
    min-width: 300px;
    flex-grow:1;
    flex-shrink:0;
}
````
- 当flex-flow: column时,flex-basic:100px相当于设置了min-height:100px


````
当 flex 取值为 none，则计算值为 0 0 auto，如下是等同的：

.item {flex: none;}
.item {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
}
当 flex 取值为 auto，则计算值为 1 1 auto，如下是等同的：

.item {flex: auto;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}

当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，如下是等同的：

.item {flex: 1;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
````