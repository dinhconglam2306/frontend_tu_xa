function createListTask() {
  let task = document.getElementById("task_name").value;
  let level = document.getElementById("level").value;

  var tastList = [];
  tastList.push({
    task: task,
    level: level,
  });
  console.log(tastList);
}
