const wordlist = ["word", "world", "hello", "cart", "curt", "zort"];

function writeTable() {
  const tableData = wordlist
    .map((word) => {
      return `<tr>
       <td>${word}</td>
       <td>Düzenle</td>
       <td>Sil</td>
    </tr>`;
    })
    .join("");

  const tableBody = document.querySelector("#tableBody");
  tableBody.innerHTML = tableData;
}

export { wordlist, writeTable };

writeTable();
