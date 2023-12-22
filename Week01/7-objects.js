// Add Key-Value pairs
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods["bananas"] = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27;

console.log(foods);
/*
{
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
}
*/

// When using bracket notation, if the field doesn't exist, it returns undefined.
let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return foods2[scannedItem];
}

console.log(checkInventory("apples")); // 25
console.log(checkInventory("melons")); // undefined

// delete keyword
delete foods2.apples;
delete foods2.oranges;

// Check if an object has a property with hasOwnProperty() or in
console.log(foods2.hasOwnProperty("apples")); // false
console.log(foods2.hasOwnProperty("bananas")); // true

// Iterate through the keys of an object with for ... in
const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  let i = 0;

  for (const user in allUsers) {
    if (allUsers[user].online) i++;
  }
  return i;
}

console.log(countOnline(users)); // 1

// Getting object keys with Object.keys()
const props = [...Object.keys(foods)];
console.log(props); // [ 'apples', 'oranges', 'plums', 'bananas', 'grapes', 'strawberries' ]
props.push;
