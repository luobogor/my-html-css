# justify-content
- 注意:只要有一个子元素出现flex-grow,那么父元素设置的justify-content可以看作无效。因为flex-grow将剩余的空间都占满了。

````
@media screen and (min-width: 768px){
    nav ul{
        display: flex;
        /*默认左对齐*/
        /*justify-content:flex-start;*/

        /*右对齐*/
        /*justify-content:flex-end;*/

        /*居中*/
        /*justify-content:center;*/

        /*每个子元素等间距，把所有元素相连看成一个环*/
        /*justify-content:space-around;*/

        /*每个子元素等间距*/
        /*justify-content:space-between;*/
    }

    nav li{
        flex: 1 1 0;
    }

} /* end media 768 */

````
