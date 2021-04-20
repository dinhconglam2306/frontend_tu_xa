function createListTask() {
  let task = document.getElementById("task_name").value;
  let level = document.getElementById("level").value;

  var taskList = [];
  taskList.push({
    task: task,
    level: level,
  });
  console.log(taskList);
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

function loadLocallStorage(key) {
  var data = localStorage.getItem(key);
  if (data) {
    data = JSON.parse(data);
  }
  return data;
}
