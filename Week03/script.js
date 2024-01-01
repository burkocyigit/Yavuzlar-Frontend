const apiURL = "https://api.github.com/users/burkocyigit";

const outputElement = document.getElementById("output");
console.log(outputElement);

fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const { login, name, bio } = data;

    console.log(login, name, bio);

    outputElement.innerHTML = `
    <p> Username: ${login} </p>
    <p> Name: ${name} </p>
    <p> Bio: ${bio} </p>
    `;
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
