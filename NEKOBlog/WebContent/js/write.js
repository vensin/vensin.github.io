var addButton=document.getElementsByClassName("button-add")[0];//添加标签按钮
var tagList = document.getElementsByClassName('tag')[0].getElementsByTagName("ul")[0].getElementsByTagName("li");//标签列表
var submitButton = document.getElementsByClassName("essay-commit")[0];

submitButton.onclick=function(){
	window.location.href="i.html";
}
addButton.onclick=function(){//添加标签
	var tagText=document.getElementsByName("tag")[0].value;
	if(tagText.length  < 1)
	{
		addTagError("此标签无效");
	}else if (tagList.length > 4) {
		addTagError("标签个数已达上限");
		
	}
	else if(tagList.length > 0 && tagSame(tagText)){
		addTagError("标签重复");
		
	}
	else{
		addTag(tagText);
	}
	document.getElementsByName("tag")[0].value="";
}

function addTag(text) {//添加标签
	var tagUl=document.getElementsByClassName('tag')[0].getElementsByTagName("ul")[0];
	var newTag=document.createElement("li");
	newTag.innerHTML=text;
	tagUl.appendChild(newTag);
}
function addTagError(tip){//出错提示框
	var box=document.createElement("div");
	var Tip=document.createElement("p");
	var button=document.createElement("div");

	Tip.innerHTML=tip;
	button.innerHTML="确定";
	box.className="tag-error";
	button.className="button-error";
	document.body.appendChild(box);
	box.appendChild(Tip);
	box.appendChild(button);

	button.onclick = function(){
		document.body.removeChild(box);
	}
}
function tagSame(newTag){//检查标签重复
	for (var i = tagList.length - 1; i >= 0; i--) {
		if(tagList[i].innerHTML==newTag){
			console.log(newTag);
			console.log(tagList[i]);
			return true;
		}
	return false;
	}
}