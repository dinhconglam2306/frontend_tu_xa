let height = 4;
let space = "--";

for (let i = 0; i <= height; i++) {
  document.write(i + space);
  for (let j = i + 1; j <= height; j++) {
    document.write(j + space);
  }
}
