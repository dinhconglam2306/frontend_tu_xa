var highlight = document.getElementsByClassName("title")[0].innerHTML;
console.log(highlight);
var regexp = /frontend/gim;
var text = highlight.match(regexp);

var abc = highlight.replace(regexp, "Frontend");
