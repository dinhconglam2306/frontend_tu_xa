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
var string = /frontend/gim;
var match = text.match(string);
console.log(match);
// text = text.replace(
//   new RegExp(string, "img"),
//   "<span class='highlight'>Frontend</span>"
// );
// document.getElementById("box").innerHTML = text;
text = text.replace(new RegExp(string, "img"), (abc) => {
  return "<span class='highlight'>${abc}</span>";
});
document.getElementById("box").innerHTML = text;
