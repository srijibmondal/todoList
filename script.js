const todos = document.querySelector("#todos")
const todoInput = document.querySelector("#todo__input")
const todoForm = document.querySelector("#todo__form")
const doneBtn = document.querySelector(".done")

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(todoInput.value);
    addTodo();
    
});
function addTodo(){
    const newTodo = document.createElement("div");
    newTodo.classList.add("todo")
    newTodo.innerHTML = `
    <div class="context">${todoInput.value}</div>
    <button class="done" >✓</button>
    `;
    todoInput.value = '';
    todos.appendChild(newTodo);
    newTodo.querySelector(".done").addEventListener("click", ()=>{newTodo.remove();})
}
