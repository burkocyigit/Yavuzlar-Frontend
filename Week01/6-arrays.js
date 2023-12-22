// Define an array
let myArray = [3.14, 5, true, null];

// Acces contents with Bracket Notation
console.log(myArray[3]); // null

// Add elements with push() and unshift()
myArray.push("value");
const myObj = { value: 31, prop: "prop" };
myArray.unshift(myObj);
console.log(myArray); // [ { value: 31, prop: 'prop' }, 3.14, 5, true, null, 'value' ]

// Remove elements with pop() and shift()
const popped = myArray.pop();
console.log(popped); // value

const shifted = myArray.shift();
console.log(shifted); // { value: 31, prop: 'prop' }
console.log(myArray); // [ 3.14, 5, true, null ]

// Remove elements with splice()
let array = ["today", "was", "not", "so", "great"];
array.splice(2, 2);
console.log(array); // [ 'today', 'was', 'great' ]

// Add elements with splice()
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); // [ 10, 11, 12, 13, 14, 15 ]

// Copy elements with slice()
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(1, 3);

console.log(todaysWeather); // [ 'snow', 'sleet' ]

// Copy elements with the Spread Operator
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thisArray, thatArray); // [ true, true, undefined, false, null ] [ true, true, undefined, false, null ]

// Combine arrays with the Spread Operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

console.log(spreadOut()); // [ 'learning', 'to', 'code', 'is', 'fun' ]

// indexOf() -> returns -1 if not found
let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

fruits.indexOf("dates"); // -1
fruits.indexOf("oranges"); // 2
fruits.indexOf("pears"); // 1

// Iterate using for
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1])); // [ 12, 14, 80 ]
