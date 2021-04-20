let btnCreateListTask = document.getElementById("btn-create-list-task");
let task = document.getElementById("task_name");
let level = document.getElementById("level");
const LIST_TASK = "LIST_TASK";
let index = 0;
btnCreateListTask.addEventListener("click", () => {
  index++;
  let data = {
    index: index,
    task: task.value,
    level: level.value,
  };
  saveLocalStorage(LIST_TASK, data);
});

function saveLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadLocallStorage(key) {
  var data = localStorage.getItem(key);
  if (data) {
    data = JSON.parse(data);
  }
  return data;
}
