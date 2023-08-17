
const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const button = document.querySelector("button");

function chageBgColor(){
  //pick random colors in the colors list
  const colorFirst = colors[Math.floor(Math.random()*colors.length)];
  const colorSecond = colors[Math.floor(Math.random()*colors.length)];
  console.log(colorFirst);
  console.log(colorSecond);
  document.body.style.background = `linear-gradient(to left, ${colorFirst}, ${colorSecond})`;
}

console.log(colors.length);
console.log("hello");
button.addEventListener("click", chageBgColor);


  