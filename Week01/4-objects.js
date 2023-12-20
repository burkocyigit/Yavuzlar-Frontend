const cat = {
  name: "Peter",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};

// Accessing with dot notation
console.log(cat.enemies); // ["Water", "Dogs"]

const car = {
  brand: "Ford",
  model: "Focus",
  cylinder: 4,
};

// Accessing with bracket notation
console.log(car["brand"]); // Ford

// Updating object properties
car.model = "Taunus";
console.log(car); // {brand: 'Ford', model: 'Taunus', cylinder: 4}

// Adding new property
car.type = "Sedan";
console.log(car); // {brand: 'Ford', model: 'Taunus', cylinder: 4, type: 'Sedan'}

// Delete property
delete car.type;
console.log(car); // {brand: 'Ford', model: 'Taunus', cylinder: 4}

// Complex objects
// This is an array which contains one object inside.
const ourMusic = [
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "Casette", "LP"],
    gold: true,
  },
];

console.log(ourMusic);
