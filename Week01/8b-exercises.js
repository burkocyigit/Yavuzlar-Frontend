const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Use forEach to console.log each country in the countries array.
countries.forEach((element) => {
  console.log(element);
});

// Use map to create a new array by changing each country to uppercase in the countries array.
const upperCaseCountries = countries.map((element) => element.toUpperCase());
console.log(upperCaseCountries);

// Use map to create an array of countries length from countries array.
const countriesLengths = countries.map((country) => country.length);
console.log(countriesLengths);

// Use map to map the products array to its corresponding prices.
const products2 = [];
const correspondingPrices = [
  ...products.map((obj) => (products2[obj.product] = obj.price)),
];
console.log(correspondingPrices);

// Use filter to filter out countries containing land.
const countriesWithLand = countries.filter((country) =>
  country.toLowerCase().includes("land")
);
console.log(countriesWithLand);

// Use filter to filter out countries having six character.
const countriesWithSixLetters = countries.filter(
  (country) => country.length != 6
);
console.log(countriesWithSixLetters);

// Use filter to filter out only prices with values.
const productsWithPrices = products.filter(
  (product) => product.price.toString().trim() !== ""
);
console.log(productsWithPrices);

// Use reduce to sum all the numbers in the numbers array.
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// Use some to check if some names' length greater than seven in names array.
let isLongerThanSeven = countries.some((country) => country.length > 7);
console.log(isLongerThanSeven);

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const sumOfPrices = products
  .filter((product) => typeof product.price != "string")
  .map((product) => product.price)
  .reduce((acc, curr) => acc + curr, 0);
console.log(sumOfPrices);

const sumOfPricesReduce = products.reduce((acc, product) => {
  if (typeof product.price === "number") {
    return acc + product.price;
  }
}, 0);
console.log(sumOfPricesReduce);

function categorizeCountries(countries) {
  const patterns = ["land", "ia", "island", "stan"];

  const result = [];

  patterns.forEach((pattern) => {
    countries.filter((country) => {
      if (country.name.includes(pattern)) {
        result.push(country.name);
      }
    });
  });

  return result;
}

const countriess = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
    currency: "United State Dollar",
  },
  {
    name: "Armenia",
    capital: "Yerevan",
    languages: ["Armenian", "Russian"],
    population: 2994400,
    flag: "https://restcountries.eu/data/arm.svg",
    currency: "Armenian dram",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
];

console.log(categorizeCountries(countriess));
