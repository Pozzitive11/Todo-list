import { createAudio } from "./audio";

function toggleDone(rememberedTasks, tasksList) {

  function toggleDoneClass(taskBlock, index) {
    if (rememberedTasks[index].done) {
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
    rememberedTasks[index].done = !rememberedTasks[index].done;
    localStorage.setItem("tasks", JSON.stringify(rememberedTasks));
    toggleDoneClass(task, index);
  }

  tasksList.addEventListener("click", ({ target }) => {
    toggleDone(target);
  });
}
export default toggleDone;
