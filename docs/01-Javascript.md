JS 사용이유  
프론트앤드 백엔드 다 사용가능 하다  
외부 설치없이 기본적으로 브라우저에서 사용가능한 프로그래밍 언어이다  

# Basic data type     
> variables  
```javascript
#처음 변수를 선언할 때만 const인지 let인지 구분해준다
const a = 10;
const b = 5;
const usingCamelCase = "nico"

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(usingCamelCase);
console.log("hello" + usingCamelCase );
```
- let: 업데이트 가능한 변수  
- const: 정해진 바뀌지 않는 변수
  ```javascript
  let myName="nimo"
  console.log("hello " + myName );

  myName = "Charlie"
  console.log("hello " + myName );
  ```
> Booleans  - return True or False
```javascript
const amIFat = true;
const amIFat = false;
```
> null: 값이 없다 (in python None) 
> undefined: 변수는 선언했지만 값이 없다
 ```javascript
 const amIFat = true;
 let something;
 console.log(something, amIFat);
 (output)
 >> undefined true
 ```

>Arrays  
```javascript
const daysOfWeek=["mon","tue","wed"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
// Add item to the array
daysOfWeek.push("thur");
console.log(daysOfWeek);
```
  
> Objects  
```javascript
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
```
> Functions 
```javascript
function sayHello(name) {
  console.log("hello world my name is " + name);
}

sayHello("nico");
sayHello("kaycee");
sayHello("dal");
sayHello("lynn");

//using object + function
const player = {
  name: "nico",
  sayHello: function(friend){
    console.log("hello "+friend);    
  },
};
console.log(player.name);
player.sayHello("lynn")

```
> Conditionals  
> true || true === true  
> false || true === true  
> true && true === true  
> true && false === flse  
```javascript
const age = prompt("How old are you? ")

console.log(age, parseInt(age));
console.log(typeof age, typeof parseInt(age));

//is not a number? number = flase, text = true
console.log(insNaN(age));

const age = parseInt(prompt("How old are you? "))

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("You are under the 18")
} else if (age >= 18 && age <=50) {
  console.log("You can drink")
} else if (age > 50 && age <=80) {
  console.log("You should exercise")
} else {
  console.log("You can do whatever you want");
}
```



