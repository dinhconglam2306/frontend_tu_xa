var highlight = document.getElementsByClassName("title");
var innerText = highlight[0].innerHTML;

var regexp = /frontend/gim;

var text = innerText.match(regexp);

console.log(text);
