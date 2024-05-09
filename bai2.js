// Variables declaration
const form = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");

function createTodoItem(title) {
  const template = `<div class="todo-item">
   <span class="todo-text">${title}</span>
   <i class='bx bx-x-circle todo-remove'></i>
 </div>`;
  todoList.insertAdjacentHTML("beforeend", template);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const todoVal = this.elements["todo"].value;
  if (!todoVal) return;
  // Main code
  createTodoItem(todoVal);
  this.elements["todo"].value = "";
});

// Handle remove todo
todoList.addEventListener("click", function (e) {
  if (e.target.matches(".todo-remove")) {
    // remove todo in DOM
    const todo = e.target.parentNode;
    todo.parentNode.removeChild(todo);
    // remove todo in localStorage
    const todoText = e.target.previousElementSibling.textContent;
  }
});
