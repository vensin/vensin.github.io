var nav_list=document.getElementsByClassName("nav")[0].getElementsByTagName("li");
var article=document.getElementsByClassName("article-title");
var welcomePage = document.getElementsByClassName("welcome-page")[0];
var welcomeBg = document.getElementsByClassName("welcome-bg")[0];
for (var i = article.length - 1; i >= 0; i--) {

	article[i].onclick=function(){

		window.location.href="article.html";
	}
}

var page_list=document.getElementsByClassName("page-count")[0].getElementsByTagName("li");
var last_page=document.getElementsByClassName("last-page")[0];
var next_page=document.getElementsByClassName("next-page")[0];

var toLoad = document.getElementsByClassName("to-load")[0];
var noLoad = document.getElementsByClassName("no-load")[0];
var wapper = document.getElementsByClassName("wapper")[0];

 toLoad.onclick = function(){
	// welcomePage.style.display="none";
	// wapper.style.display="block";
	layer();
	var bg = document.getElementById("bg");
	bg.style.backgroundColor="white";
}
noLoad.onclick = function (argument) {
	welcomePage.style.display="none";
	welcomeBg.style.display="none";
	wapper.style.display="block";
}

// var operaList = document.getElementsByClassName("opera")[0].getElementsByTagName("li");

// operaList[0].onclick = function(){
// 	window.location.href="i.html";
// }
// operaList[1].onclick = function(){
// 	window.location.href="write.html";
// }
// operaList[2].onclick = function(){
// 	window.location.href="i.html#i-comment";
// }
// for (var i = nav_list.length - 1; i >= 0; i--) {
// 	nav_list[i].xindex=i;
// 	console.log(nav_list[i].xindex);
// 	nav_list[i].onclick=function() {
// 		navchange(this.xindex);
// 	}
// }

// function navchange(xindex){
// 	console.log(xindex);
// 	var tag_list=document.getElementsByClassName("tag")[0];
// 	var article_list=document.getElementsByClassName("article-list")[0];
// 	if (xindex>0) {
// 		tag_list.style.display="none";
// 		article_list.style.margin="50px 20px 50px 200px";
		
// 	}
// 	else{
// 		tag_list.style.display="block";
// 		article_list.style.margin="50px 20px";
// 	}
	
// }

var button=document.getElementsByClassName("icon")[0];
console.log(button);
button.onclick=function () {
	layer();
}

function layer()
{
	var bg=document.createElement("div");
	bg.id="bg";
	var load=document.createElement("div");
	load.id="load";
	var word=document.createElement("h2");
	var form=document.createElement("form");
	var userName=document.createElement("input");
	var password=document.createElement("input");
	var login=document.createElement("input");
	var oul=document.createElement("ul");
	var li1=document.createElement("li");
	var li2=document.createElement("li");
	var res=document.createElement("a");

	word.innerHTML="Sign In";
	userName.type="text";
	userName.name="username";
	userName.placeholder="用户名";
	password.type="password";
	password.name="password";
	password.placeholder="密码";
	login.type="button";
	login.value="登录";
	login.id="login";
	res.innerHTML="注册";
	li2.innerHTML="忘记密码";
	res.href="register.html";


	load.appendChild(word);
	load.appendChild(oul);
	oul.appendChild(li1);
	oul.appendChild(li2);
	li1.appendChild(res);
	li2.style.cursor="pointer";
	form.appendChild(userName);
	form.appendChild(password);
	form.appendChild(login);
	load.appendChild(form);

	document.body.appendChild(bg);
	document.body.appendChild(load);

	bg.onclick=function()
	{
		document.body.removeChild(bg);
		document.body.removeChild(load);
	}

	li2.onclick=function()
	{
		var title=document.createElement("h2");
		var a=document.createElement("a");
		var img=document.createElement("img");
		load.removeChild(word);
		load.removeChild(form);
		load.removeChild(oul);

		title.innerHTML="啊你忘记了啊，我也没办法呢！";
		title.id="title";
		a.innerHTML="要不...再注册一次？";
		a.id="go";
		a.href="register.html";
		img.src="../image/see.jpg";
		load.appendChild(img);
		load.appendChild(title);
		load.appendChild(a);
	}
	var obutton=document.getElementById("load").getElementsByTagName("input")[2];
	obutton.onclick=function()
	{
	welcomePage.style.display="none";
	wapper.style.display="block";
	welcomeBg.style.display="none";
	bg.onclick();
	}
}
