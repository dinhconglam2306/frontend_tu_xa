let height = 5;
let space = "++";

for (let i = 0; i <= height; i++) {
  let str = "";
  str = i + space + "<br>";
  // for (let j = i + 1; j <= height; j++) {
  //   if (j < height) {
  //     str += j + space;
  //   } else {
  //     str += j;
  //   }
  // }
  document.write(str);
}
