const taskInputElement = document.querySelector(".js-task-input");
const taskAddButtonElement = document.querySelector(".js-task-add-btn");
const taskHeadingElement = document.querySelector(".tasks-heading");
const tasklistDisplayElement = document.querySelector(".js-tasklist-display");

document.body.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

let tasklist = [];

isTasklistEmpty();
taskAddButtonElement.addEventListener("click", addTask);

function isTasklistEmpty() {
  if (tasklist.length === 0) {
    taskHeadingElement.innerText = "";
    taskHeadingElement.style.display = "none";
  } else {
    taskHeadingElement.innerText = "Tasks";
    taskHeadingElement.style.display = "block";
  }
}

function addTask() {
  const task = taskInputElement.value;
  if (!task) {
    alert("Enter a task!");
  } else {
    tasklist.push({
      taskName: task,
      isFinished: false,
    });

    taskInputElement.value = "";
    renderTasklist();
  }
}

function renderTasklist() {
  let html = "";

  tasklist.forEach((task) => {
    if (task.isFinished === true) {
      html += `
      <p class="tasklist-task task-finished">
        <span class="tasklist-text is-finished">${task.taskName}</span>
        <button class="finish-btn js-finish-btn" disabled>&checkmark;</button>
        <button class="delete-btn js-delete-btn">Delete</button>
      </p>
      
    `;
    } else {
      html += `
      <p class="tasklist-task">
        <span class="tasklist-text">${task.taskName}</span>
        <button class="finish-btn js-finish-btn">&checkmark;</button>
        <button class="delete-btn js-delete-btn">Delete</button>
      </p>
      
    `;
    }
  });
  tasklistDisplayElement.innerHTML = html;

  const finishTaskButtonElement = document.querySelectorAll(".js-finish-btn");
  finishTaskButtonElement.forEach((button, index) => {
    button.addEventListener("click", () => {
      finishTask(index);
    });
  });

  const deleteTaskButtonElement = document.querySelectorAll(".js-delete-btn");
  deleteTaskButtonElement.forEach((button, index) => {
    button.addEventListener("click", () => {
      deleteTask(index);
    });
  });

  isTasklistEmpty();
}

function finishTask(index) {
  tasklist[index].isFinished = true;
  renderTasklist();
}

function deleteTask(index) {
  tasklist.splice(index, 1);
  renderTasklist();
}
