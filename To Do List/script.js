const add = document.querySelector("#add");
const text = document.querySelector("#text");
const check = document.querySelectorAll(".check");
const edits = document.querySelectorAll(".edit");
const deletes = document.querySelectorAll(".delete");
const listText = document.querySelectorAll("#listText");
const list = document.querySelector("#list");
let toDoItems = [];
list.querySelectorAll(".list-element").forEach((element) => {
  
    element.querySelector(".check").addEventListener("click", () => {
      document.querySelector("#listText").classList.toggle("checked");
      console.log("asdasd");
    });
    element.querySelector(".edit").addEventListener("click", () => {
      document.getElementById("listText").contentEditable = true;
    });
    element.querySelector(".delete").addEventListener("click", () => {
      list.removeChild(element);
    });
  
});

// We will get the text inside the input box with "text.value"

add.addEventListener("click", () => {
    if(text.value==='') return
    list.insertAdjacentHTML('beforeend',`<li class="list-group-item w-50 border-dark list-element my-1">
    <h6 id="listText" contenteditable="false">${text.value}</h6>
    <span class="float-end">
      <button class="button check" style="font-size: 1.1rem; color: green;">
        <i class="bi bi-check-circle mx-2"></i>
      </button>
      <button class="button edit" style="font-size: 1.1rem; color: black;"><i class="bi bi-pen-fill mx-2"></i></button>
      <button class="button delete" style="font-size: 1.1rem; color: red;"><i class="bi bi-trash mx-2"></i></button>
    </span>
  </li>`)
  text.value=''
});
