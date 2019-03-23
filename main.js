// string to list
const randomString = "tech, code, computer, laptop";
const splitedRS = randomString.split(", "); // [ 'tech', 'code', 'computer', 'laptop' ]
console.log(splitedRS[0]); // tech

// Array
const fruits = ["apple", "orange", "pear"];
fruits[3] = "grape"; // add grape in index 3
fruits.push("mango"); // add mango in the end
fruits.unshift("strawberry"); // add strawberry in the beginning
fruits.pop(); // remove the last value
console.log(fruits.indexOf("orange")); // return index of orange
console.log(fruits);

// Object
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

// for loop
const todos = [
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
for (let t of todos) {
  console.log(t.text);
}

// not working.. need to check
// forEach, map, filter
const result1 = todos
  .filter(todo => todo.isCompleted == true)
  .map(todo => todo.text);

const result2 = todos
  .filter(function(todo) {
    return todo.isCompleted === true;
  })
  .map(function(todo) {
    return todo.text;
  });
// using filter and map together
// select objects and return only selected value
console.log(result1); // result1 and result2 are the same
