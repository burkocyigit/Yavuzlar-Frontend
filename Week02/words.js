let wordlist = [
  "beytullah",
  "emre",
  "burak",
  "ankara",
  "istanbul",
  "elma",
  "armut",
];

document.getElementById("btn-new-word").addEventListener("click", addNewWord);

function writeTable() {
  const tableData = wordlist
    .map((word) => {
      return `<tr>
       <td>${word}</td>
       <td class="clickable" onclick='editWord(this)'>Düzenle</td>
       <td class="clickable" onclick='deleteWord(this)'>Sil</td>
    </tr>`;
    })
    .join("");

  const tableBody = document.querySelector("#tableBody");
  tableBody.innerHTML = tableData;
  localStorage.setItem("words", JSON.stringify(wordlist));
}

function editWord(button) {
  const wordToEdit = getRow(button);

  const newWord = prompt(
    `${wordToEdit} kelimesini düzenliyorsunuz`
  ).toLocaleLowerCase();
  if (checkEmptyString(newWord)) {
    wordlist[wordlist.indexOf(wordToEdit)] = newWord;
    console.log(wordlist);
    writeTable();
  }
}

function deleteWord(button) {
  const wordToDelete = getRow(button);

  wordlist.splice(wordlist.indexOf(wordToDelete), 1);

  if (wordlist.length == 0)

  console.log(wordlist);

  writeTable();
}

function getRow(button) {
  const row = button.parentNode;
  const rowtd = row.querySelector("td:nth-child(1)");
  return rowtd.innerText;
}

function addNewWord() {
  const newWord = prompt("Yeni kelime: ").toLocaleLowerCase();
  console.log(newWord);
  if (checkEmptyString(newWord)) {
    wordlist.push(newWord);
    writeTable();
  }
}

function checkEmptyString(str) {
  const bool = str !== "";
  if (!bool) {
    alert("Lütfen bir kelime giriniz");
  }
  return bool;
}

if (localStorage.getItem("words") != null) {
  wordlist = JSON.parse(localStorage.getItem("words"));
}

writeTable();
