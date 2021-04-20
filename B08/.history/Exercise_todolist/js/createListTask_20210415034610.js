function createListTask() {
  let task = document.getElementById("task_name").value;
  let level = document.getElementById("level").value;

  var taskList = [];
  taskList.push({
    task: task,
    level: level,
  });
}

function loadLocallStorage() {
  var taskList = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];

  console.log(taskList.length);
  if (taskList.length === 0) return false;
  let tableContent = "";
  taskList.forEach((task, idx) => {
    idx++;
    tableContent += `<tr>
        <td>${idx}</td>
        <td>${task.task}</td>
        <td>${task.level}</td>
        <td>
          <a href='#'>Edit</a> | <a href='#'>Delete</a>
        </td>
      </tr>`;
  });
  document.getElementById("list-task").innerHTML = tableContent;
}
