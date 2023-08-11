// 유효성검사
const username = loginInput.value;
if (username === "") {
  alert("Please write your name");
} else if (username.length >= 15) {
  alert("Your name is too long.");
}
}

// 그러나 위의 유효성검사는 input태그에서 form태그를 이용함으로써 해결할 수 있다.   
// input 안에 requried 와 max length를 추가한다
// input에 글을 작성하게 되면 form이라 자동으로 submit되면서 웹페이지가 새로고침된
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-form input");
const link = document.querySelector("a");

function clickLoginBtn() {
  const username = loginInput.value;
  console.log(username);
}

function onLoginSubmit(info) {
  info.preventDefault();
  console.log(info);
  //return SubmitEvent{} 
}

function onMove(info) {
  info.preventDefault();
  console.log(info);
  //return PointEvent{} 
}

// loginButton.addEventListener("click", clickLoginBtn);
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", onMove);


////
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(info) {
  info.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${localStorage.getItem("username")}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onMove(info) {
  info.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", onMove);

/////
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'username'



function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(info) {
  info.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
