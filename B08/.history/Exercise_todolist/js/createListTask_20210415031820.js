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
