const imgItem = document.querySelectorAll(".image-item[src=''");

function imageReplace() {
  imgItem.forEach(() => {
    imgItem.src =
      "https://images.unsplash.com/photo-1618358879623-e26585ec926e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";
  });
}
