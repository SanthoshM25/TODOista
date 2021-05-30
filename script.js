var ul = document.querySelector(".list");
var addBtn = document.getElementById("btn-add");
var input = document.getElementById("task-inp");
var li = document.getElementsByTagName("li");
function addTask() {
  var taskLength = input.value.length;
  console.log(taskLength);
  console.log(input.value);
  if (taskLength > 0) {
    var list = document.createElement("li");
    var text = document.createTextNode(input.value);
    list.appendChild(text);
    ul.appendChild(list);
    var btn = document.createElement("button");
    btn.className = "del-btn";
    btn.appendChild(document.createTextNode("X"));
    list.appendChild(btn);
  }
  function completeTask() {
    list.classList.toggle("done");
  }
  function removeTask() {
    list.classList.toggle("delete");
  }
  list.addEventListener("click", completeTask);
  btn.addEventListener("click", removeTask);
}

function enterPressed(evt) {
  if (evt.which === 13) {
    addTask();
    input.value = "";
  }
}

function addBtnClicked() {
  addTask();
  input.value = "";
}
addBtn.addEventListener("click", addBtnClicked);
input.addEventListener("keypress", enterPressed);
