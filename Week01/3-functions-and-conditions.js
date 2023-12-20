console.log(isPrime(211));

// return value null -> undefined
console.log(pow(22, 3));
function pow(number, pow) {
  return number ** pow;
}

function isPrime(number) {
  if (number == 2) return true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

const day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Wednesday, Thursday or Friday!");
}

// short if
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}
