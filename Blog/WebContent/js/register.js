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
var osignature = document.getElementsByName("signature")[0];
var osex;
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
		return true;
		}
		else
		{
		otitle.innerHTML="输入错误";
		otitle.className="status2";
		return false;
		}
	}

}

function setSex(){//设置点击标签后选中对应的表单选项
	var mySex;
	if(document.getElementsByName("sex")[0] == "checked"){
 	mySex = document.getElementsByName("sex")[0].value;
 	
}
	else if(document.getElementsByName("sex")[1] == "checked"){

	mySex = document.getElementsByName("sex")[1].value;
	}
	else 
		mySex= null;
	return mySex;
	
}
	
function checkSex(fun){	//性别提示函数
	var obj = document.getElementsByClassName("sex")[1];
	var otitle=getSpan(obj);

		if(fun()){
			otitle.innerHTML="";
			return true;
		}
		else{
			otitle.innerHTML="性别未选择";
			otitle.className="status2";
			return false;
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

function checkAll(){

	opassword.onblur();
	oname.onblur();
	repassword.onblur();
	oemail.onblur();
	checkSex(function(){
	if(document.getElementsByName("sex")[0].checked){

 	osex = document.getElementsByName("sex")[0].value;
 	return true;
	}
	else if(document.getElementsByName("sex")[1].checked){

		osex = document.getElementsByName("sex")[1].value;
		return true;
	}
	else return false;
	});//检查是否可以提交

	 var flag = opassword.onblur() && oname.onblur() &&  repassword.onblur() && oemail.onblur()
										 && checkSex(function(){
										if(document.getElementsByName("sex")[0].checked){

									 	osex = document.getElementsByName("sex")[0].value;
									 	return true;
										}
										else if(document.getElementsByName("sex")[1].checked){

											osex = document.getElementsByName("sex")[1].value;
											return true;
										}
										else return false;
										});
	if(flag){
		return true;
	}
	else{
		return false;
	}
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


// document.getElementsByClassName("submit")[0].onclick=function(){
// 	register();
// }


// function register(){
// 	var datas={
// 		username: oname.value,
// 		password: opassword.value,
// 		signature: osignature.value,
// 		sex: setSex(),
// 		email: oemail.value,
// 		action: "register"
// 	};

// 	$.ajax({
//                 url: "/user/userservlet",
//                 type: "POST",
//                 data :  { mallInstitution: JSON.stringify(datas) },
//                 cache: false, 
//                 dataType: "json",
//                 async:false,
//                 beforeSend: function (xhr) {
//                     xhr.overrideMimeType("text/plain; charset=utf-8");
//                 },
//                 success: function(data) {
//                     // callback("success", json);
                  
//                     //  alert("successs");
//                     console.log(data);
//                     // alert(data);
                    
//                     // $("#tip").html(data);
//                 },
//                 error: function(e) {
//                     if(e.responseText && e.responseText == '{state:timeout}'){
//                         alert(0,"连接超时！");
//                     }else{
//                        alert("error"); 
//                     }
//                 }
//             });
// }

