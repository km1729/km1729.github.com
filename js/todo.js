const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todoQuote #todo-list");

let toDos = [];

TODOS_KEY = "todos";

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  console.log(li.id);
  //local storage에 저장된 todos 업데이트
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();    
  // console.dir(event.target.parentElement.innerText);
}

function paintTodo(newTodoObj){
  // console.log("I will paint ", newTodo);
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText="❌";
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodoObj.text;
  button.addEventListener("click", deleteTodo);
  toDoList.appendChild(li);
  // console.log(toDoList.innerText);
  // console.log(li);
}
function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text:newTodo
  };
  paintTodo(newTodoObj);
  toDos.push(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleTodoSubmit );

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // 기존에 저장된 todo를 어레이어 추가해서 삭제되는걸 방지
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
  // console.log(parsedToDos);  
}

