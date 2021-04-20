function createListTask() {
  let task = document.getElementById("task_name").value;
  let level = document.getElementById("level").value;

  var taskList = [];
  taskList.push({
    task: task,
    level: level,
  });

  document.getElementById("list-task").innerHTML = tableContent;
}

function loadLocallStorage(key) {
  var tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  if (data.length > 0) {
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
  }
}
