# flex-flow
- 主轴(main axis)，交错轴(cross axis)
- justify-content只工作在主轴
- align-item只工作在交错轴
- flex-flow默认值row
- flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

````
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
````

````
flex-flow:row
    主轴
 _____________\
 |            /  
 |
 |
\|/
交错轴


flex-flow:column
    交错轴
 _____________\
 |            /  
 |
 |
\|/
主轴

````
