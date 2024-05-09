const taskInputElement = document.querySelector(".js-task-input");
const taskAddButtonElement = document.querySelector(".js-task-add-btn");
const tasklistDisplayElement = document.querySelector(".js-tasklist-display");

let tasklist = [];

taskAddButtonElement.addEventListener("click", () => {
  addTask();
  renderTasklist();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
    renderTasklist();
  }
});

function addTask() {
  if (taskInputElement.value != "") {
    tasklist.push(taskInputElement.value);
    taskInputElement.value = "";
  } else {
    alert("Enter a Task!");
  }
}

function renderTasklist() {
  const headerElement = document.querySelector("h2");
  if (tasklist != "") {
    headerElement.style.display = "block";
  } else {
    headerElement.style.display = "none";
  }

  let html = "";
  tasklist.forEach((task) => {
    html += `
      <p class="tasklist-text">
        <span>${task}</span>
        <button class="task-finish-btn js-task-finish-btn">&check;</button>
        <button class="task-delete-btn js-task-delete-btn">Delete</button>
      </p> 
    `;
  });
  tasklistDisplayElement.innerHTML = html;

  generateFinishedTask();
  generateDeleteTask();
}

function generateFinishedTask() {
  const taskFinishButtonElement = document.querySelectorAll(
    ".js-task-finish-btn"
  );

  taskFinishButtonElement.forEach((button, index) => {
    button.addEventListener("click", () => {
      let html = button.parentElement.classList.add("finished-task");
      button.disabled = true;
    });
  });
}

function generateDeleteTask() {
  const taskDeleteButtonElement = document.querySelectorAll(
    ".js-task-delete-btn"
  );
  taskDeleteButtonElement.forEach((button, index) => {
    button.addEventListener("click", () => {
      tasklist.splice(index, 1);
      renderTasklist();
    });
  });
}
