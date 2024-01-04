const apiURL = "https://api.github.com/users/";

const infoElement = document.getElementById("info");
const avatarElement = document.getElementById("avatar");

let input = document.getElementById("search");

const table = document
  .getElementById("repos-table")
  .getElementsByTagName("tbody")[0];

const repoTable = document.getElementById("repos-table");

const lastQueriesElement = document
  .getElementById("last-queries")
  .getElementsByTagName("tbody")[0];

let lastQueries = [];

if (localStorage.getItem("queries") != null) {
  lastQueries = JSON.parse(localStorage.getItem("queries"));
}

writeLastQueries();

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getData(input.value);
    saveQuery(input.value);
  }
});

function getData(query) {
  if (query === "") {
    displayError("Please enter a username.");
    return;
  }
  fetch(apiURL + query)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const { avatar_url, login, name, location, bio, email } = data;

      avatarElement.innerHTML = `
      <img
              src="${avatar_url}"
              alt=""
              class="avatar" />
      `;

      infoElement.innerHTML = `
            <p>Username: ${login}</p>
            <p>Name: ${name}</p>
            <p>Location: ${location}</p>
            <p>Bio: ${bio}</p>
            <p>Email: ${email}</p>
      `;

      const repoURL = `https://api.github.com/users/${query}/repos`;

      fetch(repoURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          data.forEach((element) => {
            console.log(element);

            repoTable.style.display = "table";

            let row = table.insertRow(-1);

            let nameCell = row.insertCell(0);
            let starsCell = row.insertCell(1);
            let forksCell = row.insertCell(2);

            const repoLink = element.html_url;

            nameCell.innerHTML = `<a href="${repoLink}">${element.name}</a>`;
            starsCell.innerHTML = element.stargazers_count;
            forksCell.innerHTML = element.forks_count;
          });
        });
    })
    .catch((error) => {
      console.log(error);
      displayError(error);
    });
}

function displayError(error) {
  alert(`Error: ${error}`);
}

function writeLastQueries() {
  lastQueries.forEach((query) => {
    let row = lastQueriesElement.insertRow(-1);

    let cell = row.insertCell(0);

    cell.innerHTML = query;
  });
}

function saveQuery(query) {
  lastQueries.push(query);
  localStorage.setItem("queries", JSON.stringify(lastQueries));
}
