function imageReplace() {
  const imgItem = document.querySelectorAll(".image-item[src=''");

  for (let i = 0; i < imgItem.length; i++) {
    imgItem.item(i).src =
      "https://www.ormondbeachmartialarts.com/wp-content/uploads/2017/04/default-image.jpg";
  }
}
