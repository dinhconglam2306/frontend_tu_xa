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
  var tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  console.log(tasks.length);
  if (tasks.length === 0) {
    return false;
    document.getElementById("list-task").style.display = "none";
  }
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
