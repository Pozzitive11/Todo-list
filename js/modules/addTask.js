import { createTask } from "./createTask";
import { checkCkolor } from "./checkColor";

function addTask(rememberedTasks, tasksList) {
  const form = document.querySelector(".form");
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

    rememberedTasks.push(task);
    createTask(rememberedTasks, tasksList);
    localStorage.setItem("tasks", JSON.stringify(rememberedTasks));
    form.reset();
  }

  form.addEventListener("submit", (e) => {
    addTask(e);
  });

  createTask(rememberedTasks, tasksList);
}

export default addTask;
