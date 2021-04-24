$(document).ready(function () {
  let data = {
    size: "",
    bgColor: "",
    lineHeight: "",
    position: "",
  };
  let INFO = "INFO";
  let Hello = loadLocalStorage(INFO);
  console.log(Hello);
  loadInfo(Hello);

  saveLocalStorage(INFO, data);
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
  function loadInfo(data) {
    if (data) {
      $(".content").css("text-align", data.position);
      $(".content").css("font-size", data.size + "px");
      $(".content").css("line-height", data.lineHeight);
      $(".content").css("background-color", data.bgColor);
    }
  }
  //FONTSIZE - START---}
  $(".fa-search-minus").click(function () {
    let fontSize = parseFloat($(".content").css("font-size"));
    fontSize--;
    console.log(fontSize);
    if (fontSize < 10) {
      fontSize = 10;
    }
    $(".content").css("font-size", fontSize + "px");
    data.size = fontSize;
    saveLocalStorage(INFO, data);
  });
  $(".fa-search-plus").click(function () {
    let fontSize = parseFloat($(".content").css("font-size"));
    fontSize++;
    if (fontSize > 20) {
      fontSize = 20;
    }
    $(".content").css("font-size", fontSize + "px");
    data.size = fontSize;
    saveLocalStorage(INFO, data);
  });
  //FONTSIZE - END---

  //BACKGROUND-COLOR - START---
  $(".bg-color").each(function () {
    $(this).click(function () {
      let color = $(this).data("color");
      $(".content").css("background-color", color);
      console.log(color);
      data.bgColor = color;
      saveLocalStorage(INFO, data);
    });
  });
  //BACKGROUND-COLOR - END---

  $(".lineheight").change(function () {
    let selectLineheight = $(this).children("option:selected").val();
    $(".content").css("line-height", selectLineheight);
    data.lineHeight = selectLineheight;
    saveLocalStorage(INFO, data);
  });

  $(".text-align").change(function () {
    let textAlign = $(this).children("option:selected").val();
    $(".content").css("text-align", textAlign);
    data.position = textAlign;
    saveLocalStorage(INFO, data);
  });
});
