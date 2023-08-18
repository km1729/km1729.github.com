const clock = document.querySelector("h2#clock");
const today = document.querySelector("h5#today");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getToday(){
  const date = new Date();
  const year = date.getFullYear()
  const month =  String(date.getMonth()).padStart(2,"0");
  const day =  String(date.getDay()).padStart(2,"0");
  today.innerText = `${year}-${month}-${day}`;  
}

getClock();
setInterval(getClock, 1000);
setInterval(getToday, 1000);