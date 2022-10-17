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
      <input class="task__input" type="checkbox" data-index=${i} ${
        taskBlock.done ? "checked" : ""
      }>
      <p class="task__name">${taskBlock.taskName}</p>
      <div class="task__delete" data-delete=${i}>
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
  const deleteButton = target.closest(".task__delete");
  if (deleteButton) {
    const indexOfDeleteButton = deleteButton.dataset.delete;
    taskBlock.remove();
    tasks.splice(indexOfDeleteButton, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function toggleDoneClass(taskBlock, index) {
  if (tasks[index].done) {
    // createAudio("../sounds/done.wav");
    taskBlock.classList.add("done");
  } else {
    taskBlock.classList.remove("done");
  }
}

function toggleDone(target) {
  const task = target.closest(".task__item");
  if (!target.matches("input")) return;
  const index = target.dataset.index;
  tasks[index].done = !tasks[index].done;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  toggleDoneClass(task, index);
}

form.addEventListener("submit", addTask);

tasksList.addEventListener("click", ({ target }) => {
  const task = target.closest(".task__item");

  toggleDone(target);
  deleteTask(target, task);
});

createTask();

// CLOCK

const clock = document.querySelector(".clock");

function currentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let session = "AM"

  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let time = `${hours}:${minutes} ${session}`;

  clock.innerText = time;
}

window.addEventListener('load', currentTime)