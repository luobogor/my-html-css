- 紧记，只要设置width属性(可以设置min-width)，就不会出现滚动条。

## Trick
当flex container只有两个子元素时，利用justify-content: space-between;可以使一个子元素左浮动，另一个右浮动
````css
.flex-container {
    display: flex;
    justify-content: space-between;
}
````

## 坑
当flex-direction为row时(即默认情况)，flex container的孩子是等高的，如果像下面button为flex container，那么这个按钮会随着section的高度变化而变化。
所以flex container下最好是放子容器，不要直接放真实需要显示的元素

````html
<article style="display: flex">
    <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque, dolore, dolorum ea ex fugit illo
        impedit minima natus odit porro quis rerum sint vel, voluptates. Ad aliquam deleniti harum hic id ipsum neque
        nobis non nostrum officia, quam quos reiciendis sequi, similique veniam, voluptatem voluptatum? Atque,
        blanditiis consectetur esse hic qui repellendus saepe similique sunt tempore temporibus. Accusantium corporis
        cumque ea est expedita iste itaque iusto libero necessitatibus, optio quod repudiandae, rerum sint, sunt
        voluptas! Corporis delectus distinctio, eveniet ipsa nihil omnis reprehenderit. Animi aut consequuntur dolorem
        eius iure maxime necessitatibus nisi omnis placeat quis? Aliquid commodi esse totam.
    </section>
    <button style="background: #00b4fd;color: white">ClickMe</button>
</article>
````
