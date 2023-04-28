/** @format */

const taskList = document.getElementById("task-list");
const taskForm = document.querySelector("form");
const taskInput = document.getElementById("task");
const dateInput = document.getElementById("date");

let tasks = [];

//adding task to list
function addTask(task, date) {
  tasks.push({
    task,
    date,
  });
  renderTasks();
}

//removing task

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

//rendering of task
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task.task}(${task.date})
        <button class="delete" onclick="removeTask(${index})">Delete</Button>`;
    taskList.appendChild(li);
  });
}

//handle submission
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = taskInput.value.trim();
  const date = dateInput.value.trim();
  if (task && date) {
    addTask(task, date);
    taskInput.value = "";
    dateInput.value = "";
    taskInput.focus();
  }
});
