let ahTabItem = $(".ah-tab-wrapper .ah-tab .ah-tab-item");
let ahTabContent = $(".ah-tab-content-wrapper .ah-tab-content");
let value = JSON.parse(localStorage.getItem("INFO_VALUE"));
console.log(value);
if (value) {
  $(".ah-tab-content-wrapper .ah-tab-content").removeAttr("data-ah-tab-active");
  $(`.ah-tab-content-wrapper .ah-tab-content:eq(${value.number})`).attr(
    "data-ah-tab-active",
    "true"
  );
  $(".ah-tab-wrapper .ah-tab .ah-tab-item").removeAttr("data-ah-tab-active");
  $(`.ah-tab-wrapper .ah-tab .ah-tab-item:eq(${value.number})`).attr(
    "data-ah-tab-active",
    "true"
  );
  getAhTabItem(value);
} else {
  let info = {
    number: 0,
  };
  $(`.ah-tab-content-wrapper .ah-tab-content:eq(${info.number})`).attr(
    "data-ah-tab-active",
    "true"
  );
  $(`.ah-tab-wrapper .ah-tab .ah-tab-item:eq(${info.number})`).attr(
    "data-ah-tab-active",
    "true"
  );
  getAhTabItem(info);
}

function getAhTabItem(item) {
  ahTabItem.click(function () {
    item.number = $(this).index();
    localStorage.setItem("INFO_VALUE", JSON.stringify(item));
  });
}
