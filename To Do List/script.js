const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-buttonn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
todoButton.addEventListener("click", () => addTodo());
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterToDo);
document.addEventListener("DOMContentLoaded", getTodos);

function addTodo() {
  if (todoInput.value === "") {
    return;
  } else {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newtodo = document.createElement("li");
    newtodo.innerText = todoInput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);
    saveLocalTodos(todoInput.value);
    const completed = document.createElement("button");
    completed.innerHTML = '<i class="fas fa-check"></i>';
    completed.classList.add("complete-btn");
    todoDiv.appendChild(completed);
    const deleted = document.createElement("button");
    deleted.innerHTML = '<i class="fas fa-trash"></i>';
    deleted.classList.add("trash-btn");
    todoDiv.appendChild(deleted);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocalTodo(todo)
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterToDo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newtodo = document.createElement("li");
    newtodo.innerText = todo;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);
    const completed = document.createElement("button");
    completed.innerHTML = '<i class="fas fa-check"></i>';
    completed.classList.add("complete-btn");
    todoDiv.appendChild(completed);
    const deleted = document.createElement("button");
    deleted.innerHTML = '<i class="fas fa-trash"></i>';
    deleted.classList.add("trash-btn");
    todoDiv.appendChild(deleted);
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoindex=todo.children[0].todoindex
  todos.splice(todos.indexOf(todoindex),1)
  localStorage.setItem('todos',JSON.stringify(todos))
}
