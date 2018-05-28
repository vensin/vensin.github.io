var icon=document.getElementsByClassName("icon");
icon[0].onclick=function () {
	layer();
}	

var sexMan=document.getElementsByClassName("sex-man")[0];//获取按钮

var sexWomen=document.getElementsByClassName("sex-women")[0];
var sex=document.getElementsByName("sex");
sexMan.onclick=function(){//点击变色

	sexSelect(sexMan);

	sex[0]="checked";
}
sexWomen.onclick=function(){

	sexSelect(sexWomen);

	sex[1]="checked";

}
function sexSelect(obj){

	sexMan.style.backgroundColor="white";

	sexWomen.style.backgroundColor="white";

	obj.style.backgroundColor="#22a1d6";
}//变色结束

var oname=document.getElementsByName("username")[0];
var opassword=document.getElementsByName("password")[0];
var repassword=document.getElementsByName("repassword")[0];
// var osex = document.getElementsByClassName("sex-women")[0];
var oemail = document.getElementsByName("email")[0];

function check(obj,title,fun)//提示函数
{
	var otitle=getSpan(obj);
	
	obj.onfocus=function()
	{	
		otitle.className="status1";
		otitle.innerHTML=title;
	}
	
	obj.onblur=function()
	{
		if(fun(this.value))
		{
		otitle.innerHTML="输入正确";
		otitle.className="status3";
		}
		else
		{
		otitle.innerHTML="输入错误";
		otitle.className="status2";
		}
	}

}



check(oname,"用户名长度为3~20",function(now){
	if(now.match(/^\S+$/) && now.length >= 3 && now.length<=20)
			return true;
		else
		{
			return false;
		}
});
check(opassword,"密码长度为6~20",function(now)
	{
		if(now.match(/^\S+$/) && now.length >= 6 && now.length<=20)
			return true;
		else
		{
			return false;
		}

	});

check(repassword,"密码应和上面一致",function(now)
	{
		if(now.match(/^\S+$/) && now.length >= 6 && now.length<=20 && now==opassword.value)
			return true;
		else
		{
			return false;
		}

	});

// check(osex,"请选择您的性别",function(now)
// 	{
// 		if(document.getElementsByName("sex")[0]=="checked" || document.getElementsByName("sex")[1]=="checked")
// 			return true;
// 		else
// 		{
// 			return false;
// 		}

// 	});

check(oemail,"请填写您的常用邮箱",function(now)
	{
		var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if(reg.test(now))
			return true;
		else
		{
			return false;
		}

	});

function checkForm()
{

}


function getSpan(now)//获得提示span
{
	while(true)
	{
		if(now.nextSibling.nodeName!="SPAN")
			now=now.nextSibling;
		else
			return now.nextSibling;
	}
		
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

