let height = 4;
let space = "--";

for (let i = 0; i <= height; i++) {
  let string = "";
  if (i < height) {
    +space;
  } else {
    string = i;
  }
  for (let j = i + 1; j <= height; j++) {
    if (j < height) {
      string += j + space;
    } else {
      string += j;
    }
  }
  document.write(string + "<br>");
}
