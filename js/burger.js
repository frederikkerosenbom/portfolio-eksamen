const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

const erfaringLink = document.querySelector(".erfaring-link");
const kompetenceLink = document.querySelector(".kompetence-link");
const opgaveLink1 = document.querySelector(".opgavelink");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");

  // const hide = burger.classList.contains("active");

  // erfaringLink?.classList.toggle("hide", hide);
  // kompetenceLink?.classList.toggle("hide", hide);
  // opgaveLink?.classList.toggle("hide", hide);
}
