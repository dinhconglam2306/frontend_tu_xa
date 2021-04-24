$(document).ready(function () {
  let areaContent = $(".app-content");
  let btnZoom = $(".app-controls-zoom__button");
  let btnColor = $(".app-controls-bg__color");
  let selectLineheight = $(".app-controls-select__lineheight");
  let textAlign = $(".app-controls-select__textalign");

  let config = JSON.parse(localStorage.getItem("READING_INFO"));
  if (config) {
    areaContent.css("background-color", config.bgColor);
    areaContent.css("font-size", config.fontSize + "px");
    areaContent.css("text-align", config.position);
    areaContent.css("line-height", config.lineHeight);
  } else {
    config = {
      bgColor: "#380c65",
      lineHeight: 1,
      position: "right",
      fontSize: 12,
    };
    localStorage.setItem("READING_INFO", JSON.stringify(config));
  }

  /*------------RESET - START---------*/

  $(".app-controls-bg__reset").click(function () {
    localStorage.removeItem("READING_INFO");
    areaContent.css("background-color", "#380c65");
    areaContent.css("line-height", 1);
    areaContent.css("text-align", "center");
    areaContent.css("font-size", 16);
  });

  /*------------FONTSIZE - START---------*/
  const incrementFontsize = 1;
  btnZoom.on("click", function () {
    let fontSize = parseFloat($(".app-content").css("font-size"));
    let value = $(this).data("value");
    if (value == "zoom-out") {
      fontSize += incrementFontsize;
    } else if (value == "zoom-in") {
      fontSize -= incrementFontsize;
    }
    areaContent.css("font-size", fontSize + "px");
    config.fontSize = fontSize;
    localStorage.setItem("READING_INFO", JSON.stringify(config));
  });
  /*------------FONTSIZE - END---------*/

  /*------------BACKGROUND-COLOR - START---------*/
  btnColor.click(function () {
    let color = $(this).data("color");
    areaContent.css("background-color", color);
    config.bgColor = color;
    localStorage.setItem("READING_INFO", JSON.stringify(config));
  });
  /*------------BACKGROUND-COLOR - END---------*/

  /*------------LINE-HEIGHT - START---------*/
  selectLineheight.change(function () {
    let lineheight = selectLineheight.val();
    areaContent.css("line-height", lineheight);
    config.lineHeight = lineheight;
    localStorage.setItem("READING_INFO", JSON.stringify(config));
  });
  /*------------LINE-HEIGHT - END---------*/

  /*------------TEXT-ALIGN - START---------*/
  textAlign.change(function () {
    let position = textAlign.val();
    areaContent.css("text-align", position);
    config.position = position;
    localStorage.setItem("READING_INFO", JSON.stringify(config));
  });
  /*------------TEXT-ALIGN - END---------*/
});
