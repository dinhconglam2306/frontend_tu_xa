let height = 4;
let space = "--";

for (let i = 0; i <= height; i++) {
  let string = i + space;
  for (let j = i + 1; j <= height; j++) {
    string += j + space;
  }
  console.log(string.substr(string.length));
  document.write(string + "<br>");
}
