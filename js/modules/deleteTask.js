function deleteTask(rememberedTasks, tasksList) {

  function deleteTask(target, taskBlock) {
    const deleteButton = target.closest(".task__delete");
    if (deleteButton) {
      const indexOfDeleteButton = deleteButton.dataset.delete;
      taskBlock.remove();
      rememberedTasks.splice(indexOfDeleteButton, 1);
      localStorage.setItem("tasks", JSON.stringify(rememberedTasks));
    }
  }

  tasksList.addEventListener("click", ({ target }) => {
    const task = target.closest(".task__item");
    deleteTask(target, task);
  });
}

export default deleteTask;
