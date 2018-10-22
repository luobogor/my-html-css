# flex-basis
- 默认值0%;任何可用于 width 和 height 的值都可接受
- flex-basis 指定了 flex 元素在`主轴方向`上的初始大小
- 推荐写法

````css
.flex-child{
    flex:1 0 300px;
}

/*与这个写法是等效的*/
.flex-child{
    flex-grow:1;
    flex-shrink:0;
    flex-basis: 300px;
}
````

- 当flex-flow: column时,flex-basis:100px相当于设置了min-height:100px

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

## Flex Items的应用准则
content –> width –> flex-basis (limted by max|min-width)

也就是说

- 如果没有设置flex-basis属性，那么flex-basis的大小就是项目的width属性的大小
- 如果没有设置width属性，那么flex-basis的大小就是项目内容(content)的大小
- 同时设置 width 和 flex-basis 时，取 flex-basis 的值，但是 min-width 与 max-width 又可以限制 flex -basis
