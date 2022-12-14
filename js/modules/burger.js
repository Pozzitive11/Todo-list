function burger(formSelector,burgerSelector, createTaskFormSelector) {
  const form = document.querySelector(formSelector);

  const burgerButton = document.querySelector(burgerSelector);
  const createTaskForm = document.querySelector(createTaskFormSelector);

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("active");
    createTaskForm.classList.toggle("create-task--visible");
  });

  form.addEventListener("submit", (e) => {
    burgerButton.classList.toggle("active");
    createTaskForm.classList.toggle("create-task--visible");
  });
}

export default burger;
