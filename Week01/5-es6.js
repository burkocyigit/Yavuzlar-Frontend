// Prevent object mutation
let obj = {
  name: "Burak",
  surname: "Kocyigit",
};
Object.freeze(obj);
obj.name = "Turat";
console.log(obj);
