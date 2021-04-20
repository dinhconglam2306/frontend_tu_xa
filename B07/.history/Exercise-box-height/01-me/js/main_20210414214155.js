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
console.log(maxBoxHeight);

for (var j = 0; j < box.length; j++) {
  box.item(j).style.height = maxBoxHeight + "px";
  if (j % 2 != 1) {
    box.item(j).style.backgroundColor = "red";
  }
}
