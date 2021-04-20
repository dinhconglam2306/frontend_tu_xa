let red = document.getElementById("red");
let brown = document.getElementById("brown");
let content = document.getElementById("content");
let colors = document.querySelectorAll("#color");
let lineHeight = document.getElementById("lineheight");
let textAlign = document.getElementById("text-align");
let contentID = document.getElementById("content");
let bigZoom = document.getElementById("big-zoom");
let smallZoom = document.getElementById("small-zoom");

const DATA_INFO = "DATA_INFO";
var number = 16;
const Hello = loadLocalStorage(DATA_INFO);
console.log(Hello);
loadInfo(Hello);
bigZoom.addEventListener("click", () => {
  number++;
  if (number > 22) return (number = 22);
  document.getElementById("content").style.fontSize = number + "px";
  creatdata();
});

smallZoom.addEventListener("click", () => {
  number--;
  if (number < 7) return (number = 7);
  document.getElementById("content").style.fontSize = number + "px";
  creatdata();
});

colors.forEach((color) => {
  color.addEventListener("click", () => {
    contentRemoveClass();
    var text = color.className;
    content.classList.add(text);
    console.log(content.className);
    creatdata();
  });
});

function contentRemoveClass() {
  colors.forEach((color) => {
    if (
      content.className == "red" ||
      content.className == "yellow" ||
      content.className == "brown" ||
      content.className == "aqua" ||
      content.className == "white"
    ) {
      content.className = "";
    }
  });
  creatdata();
}

lineHeight.addEventListener("change", function () {
  if (this.value == "narrow") {
    console.log(lineHeight.value);
    contentID.style.lineHeight = "0.8";
  } else if (this.value == "normal") {
    contentID.style.lineHeight = "1";
  } else if (this.value == "large") {
    contentID.style.lineHeight = "3";
  }
  creatdata();
});
textAlign.addEventListener("change", function () {
  if (this.value == "left") {
    console.log(textAlign.value);
    contentID.style.textAlign = "left";
  } else if (this.value == "center") {
    contentID.style.textAlign = "center";
  } else if (this.value == "right") {
    contentID.style.textAlign = "right";
  } else if (this.value == "justify") {
    contentID.style.textAlign = "justify";
  }
  creatdata();
});
function saveLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function loadLocalStorage(key) {
  var data = localStorage.getItem(key);
  if (data) {
    data = JSON.parse(data);
  }
  return data;
}
function creatdata() {
  let data = {
    fontsize: number,
    textAlignt: contentID.style.textAlign,
    lineHeight: contentID.style.lineHeight,
    color: contentID.className,
  };
  saveLocalStorage(DATA_INFO, data);
}
function loadInfo(data) {
  if (data) {
    contentID.style.textAlign = data.textAlignt;
    contentID.style.lineHeight = data.lineHeight;
    contentID.className = data.color;
    contentID.style.fontSize = data.fontsize + "px";
  }
}
