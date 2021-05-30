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
    var val = input.value;
    var text = document.createTextNode(val);
    list.appendChild(text);
    ul.appendChild(list);
    var delBtn = document.createElement("button");
    delBtn.className = "del-btn";
    delBtn.appendChild(document.createTextNode(""));
    list.appendChild(delBtn);
    var editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.appendChild(document.createTextNode(""));
    list.appendChild(editBtn);
  }
  function completeTask() {
    list.classList.toggle("done");
  }
  function removeTask() {
    list.classList.toggle("delete");
  }
  function editTask() {
    input.value = val;
    list.classList.toggle("delete");
  }
  list.addEventListener("click", completeTask);
  delBtn.addEventListener("click", removeTask);
  editBtn.addEventListener("click", editTask);
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
