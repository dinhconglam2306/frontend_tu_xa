let btnCreateListTask = document.getElementById("btn-create-list-task");
let task = document.getElementById("task_name");
let level = document.getElementById("level");
const LIST_TASK = "LIST_TASK";

btnCreateListTask.addEventListener("click", (data, index) => {
  index++;
  let data = {
    index: index,
    task: task.value,
    level: level.value,
  };
  saveLocalStorage(LIST_TASK, data);
});
