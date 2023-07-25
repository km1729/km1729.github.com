const a = 10;
const b = 5;
const usingCamelCase = "nico"
let myName="nimo"

console.log(a + b );
console.log(a - b );
console.log(a * b);
console.log(a / b);
console.log(usingCamelCase);
console.log("hello " + myName );

myName = "Charlie"
console.log("hello " + myName );


//array
const daysOfWeek=["mon","tue","wed"]
console.log(daysOfWeek)
console.log(daysOfWeek[2])

daysOfWeek.push("thur");
console.log(daysOfWeek);

//objects
const player = {
  name: "nimo",
  points: 10,
  sex: "m",
};
console.log(player);
console.log(player.name);
//update data
player.points = player.points + 20;
console.log(player.points);
//add data
player.lastname = "potato";
console.log(player);

//function
function sayHello(name) {
  console.log("hello world my name is " + name);
}

sayHello("nico");
sayHello("kaycee");
sayHello("dal");
sayHello("lynn");

function plus(a,b) {
  console.log(a+b);
}
plus(3,5);

//using object + function
const player = {
  name: "nico",
  sayHello: function(friend){
    console.log("hello "+friend);    
  },
};

console.log(player.name);
player.sayHello("lynn")

//conditional
const age = parseInt(prompt("How old are you? "))

console.log(typeof age);

if (isNaN(age)) {
  console.log("please write a number");
} else {
  console.log("This is a number")
}

const age = parseInt(prompt("How old are you? "))

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("You are under the 18")
} else if (age >= 18 && age <=50) {
  console.log("You can drink")
} else if (age > 50 && age <=80) {
  console.log("You should exercise")
} else if (age === 100) {
  console.log("You should exercise")
} else if (age > 80) {
  console.log("You can do whatever you want");
}