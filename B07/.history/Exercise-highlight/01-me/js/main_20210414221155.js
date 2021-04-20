var highlight = document.getElementsByClassName("title");
var innerText = highlight[0].innerText;
console.log(highlight);
var regexp = /frontend/gim;
var text = innerText.match(regexp);

var abc = innerText.replace(regexp, "Frontend");
console.log(abc);
