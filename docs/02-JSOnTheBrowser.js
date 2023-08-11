const title = document.getElementById("title")

console.log(title);
console.dir(title);

title.innerText = "Got you";
console.log(title.id);
console.log(title.title);
console.log(title.innerText);
console.log(title.outerText);

//search by class name
const hellos = document.getElementsByClassName("hello");
console.log(hellos);


// search by id
const ids = document.getElementById("hello");
console.log(ids);

//query selector - element를 css 방식으로 선택할 수 잇
const divha = document.querySelector(".hi .hello");
console.log(divha);

divha.style.color = "red";

const divha2 = document.querySelector("#hi h1");
console.log(divha2);

const divha3 = document.querySelector(".hello h1:first-child");
console.log(divha3);



///// events
const title = document.querySelector(".hi h1");
console.log(title);

function handleTitleClick() {
  console.log("title was clicked");
  title.style.color = "red";
}
title.addEventListener("click", handleTitleClick);

function mouseleave() {
  title.style.color = "blue";
  title.innerText = "Mouse leave"
  console.log("title was clicked")
}

function mouseEnter() {
  title.style.color = "red";
  title.innerText = "Mouse Enter"
  cosole.log("mouse is here");
}

function WindowResize() {
  console.log("window resized");
  document.body.style.backgroundColor = "tomato";
}

function WindowCopy() {
  alert("Copied");
}

function WindowOnLine() {
  alert("Online");
}

function WindowOffLine() {
  alert("Offline");
}

title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", mouseleave);
window.addEventListener("resize", WindowResize);
window.addEventListener("copy", WindowCopy);
window.addEventListener("offline", WindowOffLine);
window.addEventListener("online", WindowOnLine);

console.dir(title)

//////////////////////// *CSS in Javascript**
/// The following code will be changed to CSS + JS
const h1 = document.querySelector(".hi h1");

function mClick() {
  const currentColor = h1.style.color
  let newColor;
  if (currentColor === "tomato") {
    newColor = "blue";
  } else {
    newColor = "tomato";
  }
  h1.style.color = newColor;
  console.log(newColor);
}

h1.addEventListener("click", mClick);
///// version 2
function mClick() {
  const clickedClass = "active";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}
//// version3
/// classList를 이용해서 클라스를 추가, 삭제 함
function mClick() {
  const clickedClass = "active";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

////// ClassList toggle 사용
function mClick() {
  const clickedClass = "active";
  h1.classList.toggle(clickedClass);
}


h1.addEventListener("click", mClick)