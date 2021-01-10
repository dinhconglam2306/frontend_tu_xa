
window.onload = function(){
	var attr = document.getElementsByTagName("body");
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if (isMobile) {
		attr.item(0).style.background = "aqua";
	}else if(navigator.userAgent.indexOf("Chrome")!= -1 ){
		attr.item(0).style.background = "red";
	}else if(navigator.userAgent.indexOf("Firefox") != -1){
		attr.item(0).style.background = "pink";
	}
}