// function login(){
// 	var userName = document.getElementsByName('username')[0].value;
// 	var password = document.getElementsByName("password")[0].value;
// 	var param={
//             username: userName,
//             password: password,
//         };

//         $.PostJson("./user?action=login",param,function (isSuccess,json) {
//             if(isSuccess == 'success'){
//                 if(json.isSuccess){
//                     alert("登录成功");
//                     if(json.userType == 'teacher'){
//                         $("#loginform").hide();
//                         $("#tea_login").show();
//                     }else {
//                         $("#loginform").hide();
//                         $("#stu_login").show();
//                         searchSelf();
//                     }
//                     $("#loginform")[0].reset();
//                     // window.location.href="/index.jsp"
//                 }else {
//                     alert(json.msg);
//             }
//             }else {
//                 alert("服务器连接失败");
//             }
//         });
//      $.ajax({
//                 url: "/user/login",
//                 type: "POST",
//                 data : param,
//                 cache: false,
//                 dataType: "json",
//                 async:false,
//                 beforeSend: function (xhr) {
//                     xhr.overrideMimeType("text/plain; charset=utf-8");
//                 },
//                 success: function(json) {
//                 	alert(json);
//                     // alert("success");
//                     // callback("success", json);
//                 	window.location.href="i.html";
//                 },
//                 error: function(e) {
//                     if(e.responseText && e.responseText == '{state:timeout}'){
//                         alert("连接超时！");
//                     }else{
//                     	alert("error");
//                         // callback("error", null);
//                     }
//                 }
//             });
// }

function checkForm()
{
	
	return (false);
	// window.location.href="NEKO.html";
}
function login(){

	var userName = document.getElementsByName('username')[0].value;
	var password = document.getElementsByName("password")[0].value;
	var param={
            username: userName,
            password: password,
            action: "login",
        };
        $.ajax({
                url: "/user/userload",
                type: "POST",
                data : param,
                cache: false,
                dataType: "json",
                async:false,
                beforeSend: function (xhr) {
                    xhr.overrideMimeType("text/plain; charset=utf-8");
                },
                success: function(json) {
                    alert(json);
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