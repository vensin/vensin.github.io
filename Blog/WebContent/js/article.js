var nav_list=document.getElementsByClassName("nav")[0].getElementsByTagName("li");//导航
	for (var i = nav_list.length - 1; i >= 0; i--) {
		nav_list[i].onclick=function () {
			window.location.href="NEKO.html";
		}
	}

var i=document.getElementsByClassName("icon")[0];//个人中心跳转
i.onclick=function(){
	window.location.href="i.html";
}


