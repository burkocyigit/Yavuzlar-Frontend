// Data types: string, number, bigint, boolean, undefined,
// null, symbol, object

// Examples
const str = "string!",
  num = 31, // decimal
  pi = 3.14, // float
  bigInt = BigInt(9007199254743234), // BigInt()
  anotherBigInt = 33214323234234n, // Bigint with n
  bool = true, // boolean
  undefinedValue = undefined, // undefined
  nullValue = null, // null pointer
  symbolValue = Symbol(), // symbol
  symbolAnotherValue = Symbol("foo"), // symbol with key
  obj = { attr: "Attribute 1", attr2: "Attribute2" }; // object

const arr = [
  str,
  num,
  pi,
  bigInt,
  anotherBigInt,
  bool,
  undefinedValue,
  nullValue,
  symbolValue,
  symbolAnotherValue,
  obj,
];

for (i in arr) {
  printTypeof(arr[i]);
}

function printTypeof(data) {
  console.log(typeof data);
}

// Difference between === and ==
// == -> equal to,
// === -> equal both value and type

const x = 5;
const y = "5";
console.log(x == y); // true
console.log(x === y); // false

// Strings
// Strings are immutable
let myString = "hellöö";
myString[0] = "z";
console.log(myString);

// Length and indexing
const myStr = "Hello World";
console.log(myStr.length); // 11
console.log(myStr[0]); // H
console.log(myStr[myStr.length - 1]); // d

// String concatenation
let hello = "Hello ";
const world = "World!";

const helloWorld = hello + world;

hello += world;

console.log(helloWorld); // Hello World!
console.log(hello); // Hello World!

// Iterating
for (i in helloWorld) {
  console.log(helloWorld[helloWorld.length - i - 1]);
}

// Escape character \
const text = "The character \\ is called backslash.";
console.log(text); // The character \ is called backslash.
/*
      \b -> backspace,
      \f -> form feed,
      \n -> new line,
      \r -> carriage return,
      \t -> horizontal tabulator,
      \v -> vertical tabulator
      */
