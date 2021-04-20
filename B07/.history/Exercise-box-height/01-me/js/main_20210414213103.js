var box = document.getElementsByClassName("box");
box.style.height = "500px";
console.log(box);
for (var i = 0; i < box.length; i++) {
  var maxBoxHeight = 0;
  if (box.item(i).offsetHeight < maxBoxHeight) {
    maxBoxHeight = maxBoxHeight;
  } else {
    maxBoxHeight = box.item(i).offsetHeight;
  }
}
