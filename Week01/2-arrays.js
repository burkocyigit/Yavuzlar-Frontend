// Arrays
let array = [3.14, "str", 3492838947239849238n, "ds", undefined];
console.log(array);

// Multi-dimensional
array = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(array);

// Indexing
let arr = [7, 8, 9, 10, 11, 12];
for (let i = 0; i < arr.length / 2; i++) {
  let n = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = n;
}
console.log(arr); // [12, 11, 10, 9, 8, 7]

// pop(), push(), shift(), unshift()
// pop()
const myArray = [1, 2, 3, 4];
let poppedValue = myArray.pop();
console.log(poppedValue); // 4
console.log(myArray); // [1, 2, 3]

// push()
let arrayLengthAfterPush = myArray.push(88);
console.log(arrayLengthAfterPush); // 4
console.log(myArray); // [1, 2, 3, 88]

//shift(): removes and returns the first value of array
let shiftedValue = myArray.shift();
console.log(shiftedValue); // 1
console.log(myArray); // [2, 3, 88]

//unshift(): inserts new elements at the start and returns length of the array
let unshiftedValue = myArray.unshift(-2, -1, 0);
console.log(unshiftedValue); // 6
console.log(myArray); // [-2, -1, 0, 2, 3, 88]
