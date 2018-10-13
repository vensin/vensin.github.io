window.onload = initPage();

function initPage() {
	var inputList = document.getElementsByTagName("input");
	for (var i = inputList.length - 1; i >= 0; i--) {
		if(inputList[i].type == "text"){
			inputList[i].style.backgroundColor = "#2e2e2e";
		}
	}
}
var canvas = null;//画布
var bg = document.getElementById("background").getElementsByTagName("div")[0];//canvas元素的父级div

/**************************
 *函数名:newCanvas()
 *函数参数：button
 *功能：点击新建按钮，新建画布
 *返回值：无
 *************************/
function  newCanvas(button){
	var  tip= document.getElementsByClassName("window")[0];	//窗口面板
	var ensure = tip.getElementsByTagName("button")[0];		//确定按钮
	var cancel = tip.getElementsByTagName("button")[1];		//取消按钮

	/*实例化拖拽条对象*/
	new scale("btn","red","redPerc");
	new scale("btn","green","greenPerc");
	new scale("btn","blue","bluePerc");
	button.disabled = "true";//禁用新建按钮


	showDrawDiv("newCanvas");//显示输入窗口

	/*点击确定所执行函数*/
	ensure.onclick = function(){
		var height = document.getElementById("height").value;
		var width = document.getElementById("width").value;

		/*验证输入*/
		if(isNumber(height) && isNumber(width) && height<= 600 && width<= 1100){
				
				var color = document.getElementsByClassName("palette")[0].style.backgroundColor ;
		
				initCanvas(height,width,color);
				showObject("window","none");
				button.style.display = "none";
		
		}
		else{

			alert("输入有误，请重新输入");

		}

		clearInput("window");//清除数据

		cancel.onclick = function(){
			showObject("window","none");
		}
	}
	
	/*点击取消所执行的函数*/
	cancel.onclick = function(){

		showObject("window","none");
		button.disabled = "";
		clearInput("window");
	}

}

/********************************
 *函数名:initCanvas()
 *函数参数：height,width
 *功能：创建画布
 *返回值：无
 *******************************/
function initCanvas(height,width,color){


	canvas = document.createElement("canvas");	//新建画布

	canvas.id = "myCanvas";
	canvas.height = height;
	canvas.width = width;
	bg.style.height = height +"px";
	bg.style.width = width + "px";
	bg.style.display = "block";
	bg.appendChild(canvas);
	context = canvas.getContext("2d");//建立全局变量
	
	context.fillStyle = color;
	context.fillRect(0,0,width,height);
}

/********************************
 *函数名:scale()
 *函数参数 ：按钮button,进度条bar
 *功能：设置进度条拖动效果
 *返回值：无
 *******************************/
var scale = function(button,bar,percent){
	this.bar = document.getElementsByClassName(bar)[0];
	this.btn = this.bar.getElementsByClassName(button)[0];
	this.percent = document.getElementsByClassName(percent)[0];

	this.init = function(){
		
		var f = this;
		this.btn.onmousedown = function (e) {

			var x = (e||window.event).clientX;//获取进度块此时位置
			var l = this.offsetLeft;//开始时进度条长度
			var max = f.bar.offsetWidth-this.offsetWidth;//进度条最大长度
			document.onmousemove = function(e) {

				var thisX = (e||window.event).clientX;
				var to = Math.min(max,Math.max(l+thisX - x, -4));//拖动后进度条长度

				f.ondrag(Math.round(Math.max(0,to/max)*100),to);//拖动函数，改变显示的百分比值


				f.btn.style.left = to + "px"; //改变进度块位置

				window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
				
			}

			document.onmouseup = new Function("document.onmousemove = null;");
			}	
		
	}

	this.ondrag = function (pos){

		this.percent.innerHTML=pos+'%';

		setColor();
	};

	this.init();
}

/**************************
 *函数名:setColor()
 *函数参数 ：无
 *功能：设置调色盘颜色
 *返回值：无
 *************************/
function setColor(){

 	/* 获取各个颜色数值 */
 	var red = document.getElementsByClassName("redPerc")[0].innerHTML;		
 	var green = document.getElementsByClassName("greenPerc")[0].innerHTML;
 	var blue = document.getElementsByClassName("bluePerc")[0].innerHTML;
 	var palette = document.getElementsByClassName("palette")[0];
	
	/* 设置底色 */
 	palette.style.backgroundColor = 'rgb(' +red + ','+green + ','+ blue +')'; 
 	
 }

/**************************
 *函数名:delete()
 *函数参数 ：无
 *功能：删除画布
 *返回值：无
 *************************/
function deleteCanvas (){

 	bg.removeChild(canvas);
 	bg.style.display = "none";
 	var button = document.getElementsByClassName("newCanvas")[0];
 	button.style.display = "block";
 	button.disabled = "";

 }
