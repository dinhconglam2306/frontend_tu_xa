let height = 5;
let space = "++";

for (let i = 0; i <= height; i++) {
  let str = "";
  str = i + space;
  for (let j = i + 1; j <= height; j++) {
    str += j;
  }
  document.write(str + "<br>");
}
