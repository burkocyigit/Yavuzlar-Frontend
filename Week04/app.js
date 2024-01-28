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

const langs = getElement(".langs-opt");
const langFromOptBtnDOM = getElement("#translateFrom");
const langToOptBtnDOM = getElement("#translateTo");

langFromOptBtnDOM.addEventListener("click", () => {
  langs.classList.toggle("show-lang-content");
});

langToOptBtnDOM.addEventListener("click", () => {
  langs.classList.toggle("show-lang-content");
});

const url = "https://api-free.deepl.com/v2/translate";
const authKey = "1d22810f-fe2b-489c-a446-443ab9e7ca9f:fx";
const userAgent = "YourApp/1.2.3";

const headers = new Headers({
  Authorization: `DeepL-Auth-Key ${authKey}`,
  "User-Agent": userAgent,
  "Content-Type": "application/json",
});

const translateFromBtn = document.getElementById("translateFrom");
translateFromBtn.addEventListener("click", () => {
  console.log("translatefrombtn clicked");
});

const swapLangBtn = document.getElementById("swap-lang");
swapLangBtn.addEventListener("click", () => {
  console.log("swaplanbtn clicked");
});

const translateToBtn = document.getElementById("translateTo");
translateToBtn.addEventListener("click", () => {
  console.log("translateToBtn clicked");
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
    throw error;
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
    console.error("Error in typing:", error);
  }
}

function changeFromLang(opt) {
  console.log(opt);
}

function changeToLang(opt) {
  console.log(opt);
}
