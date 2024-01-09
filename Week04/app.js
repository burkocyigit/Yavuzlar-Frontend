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
