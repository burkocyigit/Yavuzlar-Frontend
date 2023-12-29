let words = [
  "beytullah",
  "emre",
  "burak",
  "ankara",
  "istanbul",
  "elma",
  "armut",
];
let localStrg = localStorage.getItem("words");
if (localStrg != null) {
  words = JSON.parse(localStrg);
}
let [chosenWordArray, hiddenWordElement, random] = newGame();

console.log(words);

function pressed(e) {
  console.log(words[random]);
  const foundIndexes = [];
  let attempts = 4;
  if (document.getElementById("attempt").innerText != null) {
    attempts = Number(document.getElementById("attempt").innerText);
  }
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
    setTimeout(congr, 10);
    document.getElementById("attempt-text").innerText = "Well done.";
    document.getElementById("btn-new-game").style.visibility = "visible";
  }
  if (attempts === 0) {
    document.getElementById("attempt-text").innerText = "Game Over. Try again!";
    document.removeEventListener("keydown", pressed);
    document.getElementById("btn-new-game").style.visibility = "visible";
  }
}

function newGame() {
  let hiddenWordElement = document.getElementById("hidden-word");
  if (words.length == 0) {
    alert("Kelime bulunamadı. Kelime eklemeyi deneyin.");
    return;
  }

  const random = Math.floor(Math.random() * words.length);
  console.log(random);

  const chosenWord = words[random];
  let chosenWordArray = [...chosenWord];

  let hidden = "*".repeat(chosenWord.length);
  hiddenWordElement.innerText = hidden;
  document.addEventListener("keydown", pressed);
  document.getElementById("attempt-text").innerHTML =
    "You have <span id='attempt'>3</span> attempts left.";
  document.getElementById("btn-new-game").style.visibility = "hidden";

  return [chosenWordArray, hiddenWordElement, random];
}

function congr() {
  alert("Congratulations!");
}

document.getElementById("btn-new-game").addEventListener("click", newGame);
