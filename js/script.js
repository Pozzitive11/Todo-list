import addTask from "./modules/addTask";
// import audio from "./modules/audio";
import burger from "./modules/burger";
import deleteTask from "./modules/deleteTask";
import showTodayDate from "./modules/showTodayDate";
import toggleDone from "./modules/toggleDone";
import clock from "./modules/clock";
window.addEventListener("DOMContentLoaded", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const tasksList = document.querySelector(".task__list");

  addTask(".form",tasks, tasksList);
  // audio();
  burger(".form",".burger", ".create-task");
  deleteTask(tasks, tasksList);
  showTodayDate(".today");
  toggleDone(tasks, tasksList);
  clock(".clock");
});
