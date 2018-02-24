## 盒子模型

### 基本概念：
- 标准模型(box-sizing默认为content-box)
- IE模型(box-sizing默认为border-box)

### 标准模型
- width属性的值 = content

### IE模型
- width属性的值 = content + padding + border


## JS获取元素宽高
- dom.style.width/height 只能取内联样式的宽高
- dom.currentStyle.width/height 获取渲染后的宽高，不过只有IE有这个属性
- window.getComputedStyle(dom).width/height 兼容Chrome,Firefox
- dom.getBoundingClientRect().width/height

## 满足下列CSS声明之一的元素便会生成BFC：
1. 根元素或其它包含它的元素(<html></html>是根元素，这个标签会生成一个BFC)
2. float的值不为none；
3. overflow的值不为visible；
4. position的值不为static；
5. display的值为inline-block、table-cell、table-caption；
6. flex boxes (元素的display: flex或inline-flex)；
>参考:[CSS: 潜藏着的BFC](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651553261&idx=1&sn=5ca1a2a942d9943576fceacde8fc99ec&chksm=8025aa2cb752233a24002fc7b6755e4c1b1e336d6a3e0757b606718528a31931167f174a1d0b&scene=0&key=341be94069104575b318ad1886380c57ab496e27116321ca51c8e219e8cf132e61d99a5735ec1bb3f0503d35d103e039c963504ad7760d3e68c6d1f6da2fae47c1f5f440e52daddd08152d4726182b9a&ascene=0&uin=NjU4MTI5OTg1&devicetype=iMac+MacBookPro14%2C1+OSX+OSX+10.12.5+build(16F2073)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=Lti%2Fg%2Bng8AXqsUrVWicWjusA6np4NhWmSXpIWQk%2Bj24wMuoha5ALe2un0oZLkqYC)
