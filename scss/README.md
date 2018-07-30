````css
aside {
  background: blue;
  color: white;
}
````

然后把它导入到一个CSS规则内，如下所示：

````scss
.blue-theme {@import "blue-theme"}

//生成的结果跟你直接在.blue-theme选择器内写_blue-theme.scss文件的内容完全一样。

.blue-theme {
  aside {
    background: blue;
    color: #fff;
  }
}
````

静默注释

````scss
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
````

@mixin 定义 mixin， @include mixin 使用 mixin
