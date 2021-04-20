var highlight = document.getElementsByClassName("title");
var innerText = highlight[0].innerText;
console.log(highlight);
var regexp = /frontend/gim;
var text = highlight.match(regexp);

var abc = highlight.replace(regexp, "Frontend");
console.log(abc);
