var userName=document.getElementsByName("username")[0];

var signature=document.getElementsByName("signature")[0];

var sex=document.getElementsByName("sex");

var myicon=document.getElementsByClassName("icon")[0];

var img=document.getElementsByClassName("myicon")[0];

var sexMan=document.getElementsByClassName("sex-man")[0];

var sexWomen=document.getElementsByClassName("sex-women")[0];

var changeIcon=document.getElementsByClassName("change-icon-btn")[0];

var icon=document.getElementsByName("icon")[0];

changeIcon.onclick=function(){
	icon.click();
}


function chooseImg(file){

    var file=file.files[0];

    var reader=new FileReader();

    reader.readAsDataURL(file);

    reader.onload=function(){

           var img=document.getElementsByClassName("myicon")[0];

           img.src=this.result;

    }
}

sexMan.onclick=function(){

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
}

userName.value=document.getElementById("username").innerHTML;

signature.value=document.getElementById("user-signature").innerHTML;