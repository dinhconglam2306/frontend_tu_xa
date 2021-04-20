var highlight = document.getElementsByClassName("title")[0].innerHTML;
console.log(highlight);
var regexp = /frontend/gim;
var text = highlight.match(regexp);

highlight.replace(new RegExp(/frontend/gim), "Frontend");
