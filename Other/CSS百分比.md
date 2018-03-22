### CSS单位
- 绝对单位
英寸、厘米、毫米

- 相对单位
px 像素与屏幕的DPI(像素密度)的值有关 em,rem，百分比

#### 可以取百分比的属性
定位 top、right、bottom、left
盒模型 width、height、margin、padding
字体 font-size

#### 百分比计算方式
计算方式
基于父块的宽度来计算的属性：width，left，right，margin，padding（不管是top/bottom还是left/right）
基于父块的高度来计算的属性：height,top，bottom
基于当前字体大小来计算的属性：line-height，但如果当前元素没有设置line-height,而父元素有设置，则继承父元素计算后的数字

