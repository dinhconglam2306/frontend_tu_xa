var quote = [
  "Đưa tay đây nào, mãi bên nhau bạn nhé",
  "Hải, quay xe!",
  "Trứng rán cần mỡ, bắp cần bơ, yêu không cần cớ, cần cậu cơ!",
  "Anh chiều các em quá, các em hư đúng không?",
  " Ơ mây zing, gút chóp em",
  " Chào em anh đứng đây từ chiều",
  " Đi đường quyền",
];

var time = 3000;

console.log(quote.length);
function randomQuote() {
  var rdNumber = Math.floor(Math.random() * quote.length);
  console.log(rdNumber);
}
