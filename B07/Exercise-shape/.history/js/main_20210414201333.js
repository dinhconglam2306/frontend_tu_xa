let height = 4;
let space = "--";

for (let i = 0; i <= height; i++) {
  let string = i + space;
  document.write(string);
  for (let j = i + 1; j <= height; j++) {
    document.write(j + space);
  }
}
