function pressed(e) {
  console.log(words[random]);
  const foundIndexes = [];
  let attempts = Number(document.getElementById("attempt").innerText);
  let isInThere = false;

  chosenWordArray.forEach((char, index) => {
    if (char === e.key) {
      foundIndexes.push(index);
      isInThere = true;
    }
  });

  const newArr = hiddenWordElement.innerText.split("");
  let str = "";

  foundIndexes.forEach((i) => {
    newArr[i] = words[random][i];
    console.log(newArr);
  });

  newArr.forEach((v) => {
    str += v;
  });

  hiddenWordElement.innerText = str;
  if (!isInThere) {
    document.getElementById("attempt").innerText = --attempts;
  }
  if (!hiddenWordElement.innerText.includes("*")) {
    alert("Congratulations!");
    document.getElementById("attempt-text").innerText = "Well done.";
  }
  if (attempts === 0) {
    document.getElementById("attempt-text").innerText = "Game Over. Try again!";
    document.removeEventListener("keydown", pressed);
  }
}

function newGame() {
  let hiddenWordElement = document.getElementById("hidden-word");

  const random = Math.floor(Math.random() * words.length);
  console.log(random);

  const chosenWord = words[random];
  const chosenWordArray = [...chosenWord];

  let hidden = "*".repeat(chosenWord.length);
  hiddenWordElement.innerText = hidden;
  document.addEventListener("keydown", pressed);
  document.getElementById("attempt-text").innerHTML =
    "You have <span id='attempt'>3</span> attempts left.";

  return [chosenWordArray, hiddenWordElement, random];
}

const words = [
  ""
];

document.getElementById("btn-new-game").addEventListener("click", newGame);
let [chosenWordArray, hiddenWordElement, random] = newGame();