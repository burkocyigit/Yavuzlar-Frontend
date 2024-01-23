const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(`No selector called ${selector}`);
};

const links = getElement(".header-nav-content");
const navBtnDOM = getElement(".btn-menu");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-nav-content");
});

const url = "https://api-free.deepl.com/v2/translate";
const authKey = "";
const userAgent = "YourApp/1.2.3";

const headers = new Headers({
  Authorization: `DeepL-Auth-Key ${authKey}`,
  "User-Agent": userAgent,
  "Content-Type": "application/json",
});

async function translate(text, targetLang) {
  const requestBody = {
    text: [text],
    target_lang: targetLang,
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.translations[0].text;
  } catch (error) {
    console.error("Error:", error);
    throw error; // rethrow the error to be handled by the caller if needed
  }
}

async function typing(text) {
  const textToTranslate = text.value;
  try {
    const textToDisplay = await translate(textToTranslate, "EN");
    let translatedTextDiv = document.getElementById("translated");
    if (translatedTextDiv == null) {
      translatedTextDiv = document.createElement("div");
      translatedTextDiv.classList.add("box-container", "translator");
      translatedTextDiv.id = "translated";
      const imageUploadDiv = document.getElementById(
        "translator-image-container"
      );

      if (imageUploadDiv != null) {
        imageUploadDiv.remove();
      }
    }
    const translatorRowDiv = document.getElementById("translator-row");
    translatedTextDiv.innerHTML = `<p>${textToDisplay}</p>`;
    translatorRowDiv.appendChild(translatedTextDiv);
  } catch (error) {
    // Handle the error if needed
    console.error("Error in typing:", error);
  }
}
