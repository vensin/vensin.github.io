var nav_list=document.getElementsByClassName("nav")[0].getElementsByTagName("li");
var article=document.getElementsByClassName("article-title");
for (var i = article.length - 1; i >= 0; i--) {
	article[i].onclick=function(){
		window.location.href="article.html";
	}
}
for (var i = nav_list.length - 1; i >= 0; i--) {
	nav_list[i].xindex=i;
	console.log(nav_list[i].xindex);
	nav_list[i].onclick=function() {
		navchange(this.xindex);
	}
}

function navchange(xindex){
	console.log(xindex);
	var tag_list=document.getElementsByClassName("tag")[0];
	var article_list=document.getElementsByClassName("article-list")[0];
	if (xindex>0) {
		tag_list.style.display="none";
		article_list.style.margin="50px 20px 50px 200px";
		
	}
	else{
		tag_list.style.display="block";
		article_list.style.margin="50px 20px";
	}
	
}