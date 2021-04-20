// var highlight = document.getElementsByClassName("title");
// var innerText = highlight[0].innerText;
// var abc = innerText.replace(
//   new RegExp(/frontend/gim),
//   "<span class='highlight'>Frontend</span>"
// );
// console.log(abc);

// highlight.innerHTML = abc;

let elmBox = document.getElementById("box");
var text = elmBox.innerText;
console.log(text);

var string = "frontend";

text = text.replace(
  new RegExp(string, "img"),
  "<span class='highlight'>Frontend</span>"
);
console.log(text);
document.getElementById("box").innerHTML = text;
