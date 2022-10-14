const form = document.querySelector("form");
const tasksList = document.querySelector(".task__list");
const today = document.querySelector(".today");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
console.log(date.getTime());


function showTodayDate() {
  let weekday = daysOfTheWeek[date.getDay()];
  const options = { month: "long" };
  let month = new Intl.DateTimeFormat("en-US", options).format(date);
  let day = date.getDate();
  today.innerHTML = `<span class="today__day">${weekday},</span>  ${month} ${day}`;
}
showTodayDate();


function createAudio(sound) {
  const audio = new Audio(sound);
  audio.play();
}

function checkCkolor(bgColor) {
  if (bgColor === "000000" || bgColor === "3D3270") {
    return `${bgColor}; color: #fff`;
  } else {
    return `${bgColor}; color: #000`;
  }
}

function addTask(e) {
  e.preventDefault();
  const bgColor = checkCkolor(form.color.value);
  const taskName = form.title.value;
  const deadline = form.deadline.value;
  const task = {
    bgColor,
    taskName,
    deadline,
    done: false,
    date: new Date().getTime(),
  };

  tasks.push(task);
  createTask();
  localStorage.setItem("tasks", JSON.stringify(tasks));
  form.reset();
}

function createTask() {
  tasksList.innerHTML = tasks
    .map((taskBlock, i) => {
      return `
    <li class="task__item ${
      taskBlock.done ? "done" : ""
    }" style="background-color: #${taskBlock.bgColor};" >
    <div class="task__top">
      <input class="task__input" type="checkbox" data-index=${i} id="item${i}" ${
        taskBlock.done ? "checked" : ""
      }>
      <p class="task__name">${taskBlock.taskName}</p>
      <div class="task__delete">
        <svg class="icon-delete">
          <use xlink:href="sprite.svg#delete"></use>
        </svg>
      </div>
    </div>
      <p class="task__deadline">
      <svg class="icon icon-color">
        <use xlink:href="sprite.svg#deadline"></use>
      </svg>
        ${taskBlock.deadline}
      </p>
    </li>
  `;
    })
    .join("");
}

function deleteTask(target, taskBlock) {
  const task = target.closest(".task__item");

  if (target.tagName === "use" || target.tagName === "svg") {
    taskBlock.remove();
  }
}

function toggleDone(target) {
  const task = target.closest(".task__item");
  if (!target.matches("input")) return;
  const index = target.dataset.index;
  tasks[index].done = !tasks[index].done;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  if (tasks[index].done) {
    // createAudio("../sounds/done.wav");
    task.classList.add("done");
  } else {
    task.classList.remove("done");
  }
}

form.addEventListener("submit", addTask);

tasksList.addEventListener("click", ({ target }) => {
  toggleDone(target);
  // deleteTask(target, task);
});

createTask();


function checkDeadline() {
  
}