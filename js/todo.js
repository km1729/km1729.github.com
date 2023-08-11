const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("toDo-list");

function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit",handleTodoSubmit )