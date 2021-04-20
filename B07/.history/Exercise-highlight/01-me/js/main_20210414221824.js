var highlight = document.getElementsByClassName("title");
var innerText = highlight[0].innerText;
var regexp = /frontend/gim;
console.log(regexp);
var text = innerText.match(regexp);

var abc = innerText.replace(new RegExp(/frontend/gim), "Frontend");

document.getElementsByClassName("title").innerText = abc;
