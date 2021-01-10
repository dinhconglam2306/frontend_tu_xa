
var height = 8;
var space = "--";


for(var i = 0;i<=height;i++){
    var str="";
    for(var j= i+1; j<=height-1;j++){
        str +=j + space;
    }
        if(i!=8){
            document.write(i + space + str + "8" + "<br />")
        }else{
            document.write(i+ "<br />")
        }
    }
