// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2;
};

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3)); // 27

// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10)); // 23

const numbers = [1, 2, 3, 4];

const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers)); // 10

// forEach()
const arr = [5, 6, 7, 8, 9, 10];
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr);
});
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr));

// map()
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

/*
  // Arrow function
  const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase();
  })
  //Explicit return arrow function
  const countriesToUpperCase = countries.map(country => country.toUpperCase());
  */

// filter()
const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

// every()
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names.every((name) => typeof name === "string"); // Are all strings?

console.log(areAllStr); // true

// find()
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log(age); // 18

// findIndex()

const names2 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const ages2 = [24, 22, 25, 32, 35, 18];

const result = names2.findIndex((name) => name.length > 7);
console.log(result); // 0

const age2 = ages.findIndex((age) => age < 20);
console.log(age); // 5

// sort() with numeric values
const numberss = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result. see below
console.log(numberss.sort()); //[100, 3.14, 37, 9.81]
numberss.sort(function (a, b) {
  return a - b;
});

console.log(numberss); // [3.14, 9.81, 37, 100]

numberss.sort(function (a, b) {
  return b - a;
});
console.log(numberss); //[100, 37, 9.81, 3.14]

// sort() with objects
objArr = [{ key: 23 }, { key: 45 }, { key: 76 }];

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
});

// or

objArr.sort(function (a, b) {
  if (a["key"] < b["key"]) return -1;
  if (a["key"] > b["key"]) return 1;
  return 0;
});

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending
// [{…}, {…}, {…}, {…}]
