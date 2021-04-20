var highlight = document.getElementsByClassName("title");
var innerText = highlight[0].innerText;

var abc = innerText.replace(new RegExp(/frontend/gim), "Frontend");
console.log(abc);

document.getElementsByClassName("title").innerText = abc;
