function replaceImg(){
	var str =document.body.getElementsByTagName("img");
	for( var i=0;i<str.length;i++){
		if(str.item(i).clientHeight==0){
			str.item(i).src="images/01.jpg";
		}
	}
}