window.onload = function(){

	// getElementsByClassName()ie9才支持
    //轮播的一个索引值
	var index = 0;
    //定时器
	var timer = null;
    //最外层容器
	var box = document.getElementById("box");
    //图片容器
	var imgbox = document.getElementById("imgbox");
    //图片的超链接
	var as = imgbox.getElementsByTagName("a");
    //数字导航的父容器
	var points = document.getElementById("points");
    //数字导航数组
	var pointsA = points.getElementsByTagName("a");
    //上一张，下一张
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");

    //循环播放核心
	timer = setInterval(nextSlider, 1000);
    //下一张
    function nextSlider(){

        index++;

        if(index>as.length-1){
            index = 0;
        }
        changeStyle(index);

    }
    //上一张
    function preSlider(){

        index--;
        if(index<0)
            index= as.length-1;
        changeStyle(index);
    }

    //具体控制图片的显示隐藏和按钮样式改变
    function changeStyle(index){

        for(var i=0;i<as.length;i++){
            if(index == i){
                as[i].className = "show";
                pointsA[i].className = "active";
            }else{
                as[i].className = "hide";
                pointsA[i].className = "";
            }
        }

    }

    //对数字导航按钮进行事件绑定，注意闭包

	for (var j = 0; j<pointsA.length; j++) {

		(function(j){
			pointsA[j].onclick =function(){

				changeStyle(j);
			}
		})(j);
	}

    //对上一张按钮进行事件绑定
	prev.onclick = function(){
		preSlider();
	}
    //对下一张按钮进行事件绑定
	next.onclick = function(){
			nextSlider();
	}
    //当鼠标放上去时清除定时器
    box.onmouseover = function(){

		clearInterval(timer);
	}
    //当鼠标离开时重新启动定时器
	box.onmouseout = function(){
        timer = setInterval(nextSlider, 1000);
	}




}