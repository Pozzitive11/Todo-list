import { createTask } from "./createTask";
import { checkCkolor } from "./checkColor";

function addTask(formSelector, rememberedTasks, tasksList) {
  const form = document.querySelector(formSelector);
  function addTask(e) {
    e.preventDefault();
    const bgColor = checkCkolor(form.color.value);
    const taskName = form.title.value;
    const deadline = form.deadline.valueAsDate;
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
    console.log(deadline);

  }

  form.addEventListener("submit", (e) => {
    addTask(e);
    // console.log(new Date(`${form.deadline.valueAsDate}`));
    // console.log();
  });

  createTask(rememberedTasks, tasksList);
}

export default addTask;
