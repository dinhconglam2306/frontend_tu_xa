 var clickAddTask = 0;
function showAddTask(){
  var showAddTask = document.getElementById("container_left_bottom");
  clickAddTask+=1;
  if(clickAddTask %2!=0){
    showAddTask.style.display="block"
  }else{
    showAddTask.style.display="none"
  }
 
}
// function Cancel(){
//   var showAddTask = document.getElementById("container_left_bottom");
//   showAddTask.style.display="none"
// }



