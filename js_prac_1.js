// JavaScript Crash Course For Beginners
// Traversy Media
// https://www.youtube.com/watch?v=hdI2bqOjy3c

//
console.log("\n// string to list");
const randomString = "tech, code, computer, laptop";
const splitedRS = randomString.split(", "); // [ 'tech', 'code', 'computer', 'laptop' ]
console.log(splitedRS[0]); // tech

//
console.log("\n// Array");
const fruits = ["apple", "orange", "pear"];
fruits[3] = "grape"; // add grape in index 3
fruits.push("mango"); // add mango in the end
fruits.unshift("strawberry"); // add strawberry in the beginning
fruits.pop(); // remove the last value
console.log(fruits.indexOf("orange")); // return index of orange
console.log(fruits);

//
console.log("\n// Object");
const person = {
  firstName: "John",
  lastName: "Doe",
  addr: {
    street: "50 main st.",
    city: "Boston"
  }
};

const {
  firstName,
  lastName,
  addr: { city }
} = person;

console.log(city); // Boston

person.email = "john@email.com"; // add email to the object

//
console.log("\n// for loop");
const todoList = [
  {
    id: 1,
    text: "Do something",
    isCompleted: true
  },
  {
    id: 2,
    text: "Do whatever",
    isCompleted: true
  },
  {
    id: 3,
    text: "Do not do it",
    isCompleted: false
  }
];
for (let t of todoList) {
  console.log(t.text);
}

//
console.log("\n// forEach, filter, map");
todoList.forEach(todo => console.log(todo.text));

const result2 = todoList
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

const result1 = todoList
  .filter(obj => obj.isCompleted === true)
  .map(obj => obj.text);

// using filter and map together
// select objects and return only selected value
console.log(result1); // result1 and result2 are the same

//
console.log("\n// if, else if, else");
const x = 4;

if (x == 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

const y = 10;
// if y is greater than 10, color is red, else color is blue
const color = y > 10 ? "red" : "blue";
console.log(color); // blue

switch (color) {
  default:
    console.log("default color");
    break;
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
}

//
console.log("\n// class");
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }
// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("John", "Doe", "4-3-1980");
console.log(person1.getFullName());

//
// querySelector
/*

document.querySelectorAll('.item'); // it works like jquery and returns array of items

// 'mouseover' instead of 'click' can be used; 'submit'
btn.addEventListener('click', (e) => {
  e.preventDefault(); // console log stays, something to do with saving
  document.querySelector('body').style.background = 'black' // change bacground color to black when the button is clicked
})

*/

