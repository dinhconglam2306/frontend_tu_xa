let btnCreateListTask = document.getElementById("btn-create-list-task");
let task = document.getElementById("task_name");
let level = document.getElementById("level");
const LIST_TASK = "LIST_TASK";

btnCreateListTask.addEventListener("click", () => {
  let data = {
    task: task.value,
    level: level.value,
  };
  saveLocalStorage(LIST_TASK, data);
});

function saveLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
