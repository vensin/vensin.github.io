var userName=document.getElementsByName("username")[0];

var signature=document.getElementsByName("signature")[0];

var sex=document.getElementsByName("sex");

var myicon=document.getElementsByClassName("icon")[0];

var img=document.getElementsByClassName("myicon")[0];

var sexMan=document.getElementsByClassName("sex-man")[0];

var sexWomen=document.getElementsByClassName("sex-women")[0];

var changeIcon=document.getElementsByClassName("change-icon-btn")[0];

var icon=document.getElementsByName("icon")[0];

var article=document.getElementsByClassName("i-page")[0].getElementsByTagName("li");

for (var i = article.length - 1; i >= 0; i--) {
	article[i].onclick=function(){
		window.location.href="article.html";
	}
}

changeIcon.onclick=function(){
	icon.click();
}

var cardList=document.getElementsByClassName("card")[0].getElementsByTagName("li");
var divList=document.getElementsByClassName("main")[0].children;

for(var j=0;j<cardList.length;j++)
{
    cardList[j].xindex=j;
    cardList[j].onclick=function()
	{
		change(this.xindex);
	}
}
function change(nindex)
{
	for(var i=1;i<divList.length;i++)
	{
		cardList[i-1].className="";
		divList[i].style.display="none";
	}
	cardList[nindex].className="card-select";
	divList[nindex+1].style.display="block";
}
cardList[0].onclick();

function chooseImg(file){

    var file=file.files[0];

    var reader=new FileReader();

    reader.readAsDataURL(file);

    reader.onload=function(){

           var img=document.getElementsByClassName("myicon")[0];

           img.src=this.result;

    }
}
// sexMan.onclick=function(){

// 	sexSelect(sexMan);

// 	sex[0]="checked";
// }
// sexWomen.onclick=function(){

// 	sexSelect(sexWomen);

// 	sex[1]="checked";

// }
function sexSelect(obj){

	sexMan.style.backgroundColor="white";

	sexWomen.style.backgroundColor="white";

	obj.style.backgroundColor="#22a1d6";
}

userName.value=document.getElementById("username").innerHTML;

// signature.value=document.getElementById("user-signature").innerHTML;
var username=userName.value;

function checkUserName() {  
        var username=userName.value;
        var datas = {
            username: username,
            // password: password,
            // name: name,
            // grade: grade,
            // clazz: clazz,
            // tel: tel,
            // email: email
        };
        // $.get("http://127.0.0.1:3306/user/usermodify?userName="+username,null,callback);  
        $.ajax({
                url: "/user/usermodify",
                type: "POST",
                data : datas,
                cache: false, 
                dataType: "json",
                //"json"
                async:false,
                beforeSend: function (xhr) {
                    xhr.overrideMimeType("text/plain; charset=utf-8");
                },
                success: function(data) {
                    // callback("success", json);
                  
                    //  alert("successs");
                    console.log(data);
                    // alert(data);
                    
                    // $("#tip").html(data);
                },
                error: function(e) {
                    if(e.responseText && e.responseText == '{state:timeout}'){
                        alert(0,"连接超时！");
                    }else{
                       alert("error"); 
                    }
                }
            });
}  
 // function callback(data){
 //            //回调函数  
 //           //3.接受服务器的返回的数据  
 //           //alert(data);  
 //           //4.将结果显示在页面中 
 //          alert(data); 
 //          // if(data=="N")
 //           // userName.value = "hhh";
 //           $("#tip").html(data);
 //       }


 
