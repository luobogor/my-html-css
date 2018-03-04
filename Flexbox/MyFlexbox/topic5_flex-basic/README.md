# flex-basic
- 初始化宽度
- flex:1的意思
  - flex-grow:1;flex-shrink:1;flex-basic:auto;
- 推荐写法

````css
.flex-child{
    flex:1 0 300px;
}

/*与这个写法是等效的*/
.flex-child{
    min-width: 300px;
    flex-grow:1;
}
````
- 当flex-flow: column时,flex-basic:100px相当于设置了min-height:100px