var enter = "<br />";

window.onload = function(){
    var elemts = document.body.getElementsByClassName("box");
    console.log(elemts);

    var maxHeight =0;
    for(i=0;i<elemts.length;i++){
        if(maxHeight < elemts.item(i).clientHeight)
        maxHeight = elemts.item(i).clientHeight;
        console.log(maxHeight);
    }

    if(elemts.length > 0){
        console.log(elemts.length);
        for(var i=0; i <= elemts.length;i++){
            if(i%2==0){
                elemts.item(i).style.background="red";
                elemts.item(i).style.height = maxHeight+"px";
            }else{
                elemts.item(i).style.height = maxHeight+"px";
            }
        }
    }
}
