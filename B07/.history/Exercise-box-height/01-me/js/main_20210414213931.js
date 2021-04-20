var box = document.getElementsByClassName("box");
console.log(box);
var maxBoxHeight = 0;
for (var i = 0; i < box.length; i++) {

  if (box.item(i).offsetHeight < maxBoxHeight) {
    maxBoxHeight = maxBoxHeight;
  } else {
    maxBoxHeight = box.item(i).offsetHeight;
  }
}
for(var j = 0;)