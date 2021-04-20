function createListTask() {
  let task = document.getElementById("task_name").value;
  let level = document.getElementById("level").value;

  var taskList = [];
  tastList.push({
    task: task,
    level: level,
  });
  let tableContent = `<tr>
      <td>#</td>
      <td>Task</td>
      <td>Level</td>
      <td>Action</td>
    </tr>`;

  taskList.forEach((task) => {
    tableContent += `<tr>
      <td>#</td>
      <td>Task</td>
      <td>Level</td>
      <td>Action</td>
    </tr>`;
  });
}
