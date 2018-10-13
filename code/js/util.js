/**************************
 *函数名:showObject()
 *函数参数 ：模块id值或者class名divId，属性值pro
 *功能：显示对应弹窗
 *返回值：无
 *************************/
function showObject(divId,pro){
 	var obj = document.getElementById(divId) || document.getElementsByClassName(divId)[0];
 	obj.style.display = pro;
 }

/**************************
 *函数名:clearInput()
 *函数参数 ：输入框父级ID值
 *功能：清除输入框value值
 *返回值：无
 *************************/
function clearInput(id){
	var input = document.getElementsByClassName(id)[0].getElementsByTagName("input");
	for (var i = input.length - 1; i >= 0; i--) {
		if (input[i].type == "text") {
			input[i].value = "";
		}
			
		else{
			input[i].checked = false;
		}
	}
}

/**************************
 *函数名:getMousePos()
 *函数参数 ：canvas，event
 *功能：获取鼠标位置
 *返回值：无
 *************************/
function getMousePos(canvas, event) {//优化：event事件在不同浏览器

    var rect = canvas.getBoundingClientRect();

    x = event.clientX - rect.left ;
    y = event.clientY - rect.top ; 
}

/**************************
 *函数名:showDrawDiv()
 *函数参数 ：功能对应的divid
 *功能：移除多余的div,显示所对应div
 *返回值：无
 *************************/
 function showDrawDiv(id){
 	var divList = document.getElementsByClassName("window")[0].children;
			for (var i = divList.length - 4; i >= 0; i--) {
			  divList[i].style.display = "none";
	}
	showObject("window","block");
	showObject(id,"block");
 }

/**************************
 *函数名:isNumber()
 *函数参数 ：字符串str
 *功能：验证是否为有效数字
 *返回值：boolean
 *************************/
 function isNumber(str){
 	if(str == "" || isNaN(str)){
 		return false;
	}else if(str <= 0){//空格当0处理

		return false;
	}
	else{
		return true;
	}
 }