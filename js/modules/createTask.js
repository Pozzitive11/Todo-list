function createTask(rememberedTasks, tasksList) {
  tasksList.innerHTML = rememberedTasks
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
export { createTask };
