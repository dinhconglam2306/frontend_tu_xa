window.onload = function(){
	var str = document.getElementById("box").innerHTML;
	str = str.replace(/frontend/igm,"<div class='highlight'>Frontent</div>");
	document.getElementById("box").innerHTML=str;
}
