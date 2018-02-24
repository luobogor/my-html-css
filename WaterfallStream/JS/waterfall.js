window.onload = function () {
    waterfall('main', 'box');
    //json
    var dataInt = {'data': [{'src': '1.jpg'}, {'src': '2.jpg'}, {'src': '3.jpg'}, {'src': '4.jpg'}]};

    window.onscroll = function () {
        if (chekScrollside()) {
            var oParent = document.getElementById('main');
            for (var i = 0; i < dataInt.data.length; i++) {
                var oPin = document.createElement('div'); //添加 元素节点
                oPin.className = 'box';                   //添加 类名 name属性
                oParent.appendChild(oPin);              //添加 子节点
                var oBox = document.createElement('div');
                oBox.className = 'pic';
                oPin.appendChild(oBox);
                var oImg = document.createElement('img');
                oImg.src = './images/' + dataInt.data[i].src;
                oBox.appendChild(oImg);
            }
            waterfall('main', 'box');
        }
    }
};

var slideTimes = 0;

function waterfall(parent, box) {
    console.log("slide times:" + ++slideTimes);
    //将main下所有class为box的元素取出来
    var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent, box);
    //计算整个页面显示的列数(页面宽/box宽)
    var oBoxW = oBoxs[0].offsetWidth;//一个盒子的宽度
    var cols = Math.floor(document.documentElement.clientWidth / oBoxW);
    //设置main宽度
    oParent.style.cssText = 'width:' + cols * oBoxW + 'px;margin:0 auto';
    var hArr = [];
    for (var i = 0; i < oBoxs.length; i++) {
        if (i < cols) {
            hArr.push(oBoxs[i].offsetHeight);
        } else {
            var minH = Math.min.apply(null, hArr);//Math.min的参数不能是数组，借助apply方法数组传参
            var indexMH = getMinHIdex(hArr, minH);
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            oBoxs[i].style.left = oBoxs[indexMH].offsetLeft + 'px';
            hArr[indexMH] += oBoxs[i].offsetHeight;
        }

    }
}

//getElementsByClassName方法兼容性比较差，IE9以下不支持，可以写一个类似的方法代替getElementsByClassName
//根据class获取元素,增强兼容性
function getByClass(parent, clsName) {
    var obj = parent.getElementsByTagName('*');
    var boxArray = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].className == clsName) {
            boxArray.push(obj[i]);
        }
    }
    return boxArray;
}

function getMinHIdex(arr, minH) {
    for (var i in arr) {
        if (arr[i] == minH) {
            return i;
        }
    }
}

function chekScrollside() {
    var oParent = document.getElementById('main');
    var aBox = getByClass(oParent, 'box');
    var lastBox = aBox[aBox.length - 1];
    var lastBoxH = lastBox.offsetTop + lastBox.offsetHeight / 2;
    //scrollTop指是的超出浏览器内容的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // clientHeight页面高度
    var documentH = document.documentElement.clientHeight;
    var measureHeight = scrollTop + documentH;
    return lastBoxH < measureHeight ? true : false;
}