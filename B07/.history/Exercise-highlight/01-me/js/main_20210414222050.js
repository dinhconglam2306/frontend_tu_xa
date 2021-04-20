var highlight = document.getElementsByClassName("title");
var innerText = highlight[0].innerText;
var abc = innerText.replace(
  new RegExp(/frontend/gim),
  "<span class='highlight'>Frontend</span>"
);
console.log(abc);
