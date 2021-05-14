let value = JSON.parse(localStorage.getItem("NUMBER"));
if (value) {
  $(".ziehharmonika h3").removeClass("active");
  $(".ziehharmonika div").css("display", "none");
  $(`.ziehharmonika h3:nth-child(${value})`).addClass("active");
  $(`.ziehharmonika h3:nth-child(${value})`).next().css("display", "block");
  setNumberValue();
} else {
  setNumberValue();
}

function setNumberValue() {
  $(".ziehharmonika h3").click(function () {
    let number = 0;
    number = $(this).index() + 1;
    localStorage.setItem("NUMBER", number);
  });
}
