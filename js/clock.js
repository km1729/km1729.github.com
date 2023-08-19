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
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const year = date.getFullYear()
  const month =  date.getMonth();
  const monthName = monthNames[month]
  const day =  String(date.getDate()).padStart(2,"0");
  today.innerText = `${year}-${monthName}-${day}`;  
}

getClock();
setInterval(getClock, 1000);
setInterval(getToday, 1000);