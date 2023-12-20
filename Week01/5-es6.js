// Prevent object mutation
let obj = {
  name: "Burak",
  surname: "Kocyigit",
};
Object.freeze(obj);
obj.name = "Turat";
console.log(obj);

// Arrow Functions to write concise anonymous functions
const square = function (value) {
  return value ** 2;
};
// This function can be wrote as:
const conciseSquare = (value) => value ** 2;

// Arrow Functions with parameters
const doubler = (item) => item * 2;

const multiply = (item, multiplier) => item * multiplier;

// Default parameters
const greeting = (theName = "Anonymous") => `Hello ${theName}!`;
console.log(greeting()); // Hello Anonymous!

// Rest parameter, parameters stored in an array
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}

// Spread operator, expand arrays and other expressions
// in places where multiple parameters or elements are expected
const arr = [1, 2, 3, 4];
console.log(arr); // 1 2 3 4

const array = [3, 67, 324, 322, 1];
console.log(Math.max.apply(null, array)); // 324

// Destructuring assignment to extract values from objects
const user = { name: "Burak", age: 23 };

const { name, age } = user;
console.log(name, age); // Burak 23

// Extracting variables
const { name: userName, age: userAge } = user;

// With arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, , , , c] = numbers;
console.log(a, b, c); // 1 2 6

const [x, y, z, ...nums] = [1, 2, 3, 4, 5, 6, 7];
console.log(x, y, z); // 1 2 3
console.log(nums); // [ 4, 5, 6, 7 ]

// Use destructuring to pass an object as a parameter
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;

// Template Literals in strings
const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

const greeting2 = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting2);

// Getter and Setters
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);

// Exporting functions and variables

export const add = (x, y) => {
  x + y;
};
// or
export { add };

// Importing
import { someFunc, anotherFunc } from "./some_functions.js";

// Javascript Promises
// A promise has three states: pending, fulfilled and rejected
const myPromise = new Promise((resolve, reject) => {
  if (true || false) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
// handle fulfilled promises
myPromise.then((result) => {});

// catch rejected promises
myPromise.catch((error) => {});
