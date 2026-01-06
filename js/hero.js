const heroBox = document.querySelector(".hero-box");
const heroImg = document.querySelector(".hero-img");
const navF = document.querySelector("#forside .navigation");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const logo = document.querySelector("#forside .logo");
const menu = document.querySelector("#forside .menu");
const burgerF = document.querySelector("#forside .burger");
const velkomst = document.querySelector(".velkomst");

function hideAll() {
  navF.classList.add("hide");
  main.classList.add("hide");
  footer.classList.add("hide");
  heroBox.classList.add("hero-box-styling");
}

window.addEventListener("DOMContentLoaded", () => {
  const skip = sessionStorage.getItem("skipHeroAnimation") === "1";

  if (skip) {
    sessionStorage.removeItem("skipHeroAnimation"); // så den kun skipper én gang

    // Vis siden uden animation
    navF.classList.remove("hide");
    main.classList.remove("hide");
    footer.classList.remove("hide");

    // Sørger for hero står i "slut-state"
    heroBox.classList.remove("hero-box-styling", "scaleUp", "hero-box-styling2", "moveUp");
    heroImg.classList.remove("rise");

    return;
  }
  hideAll();

  heroAnimation1();
  heroImg.addEventListener(
    "animationend",
    function (event) {
      if (event.animationName === "rise") {
        heroAnimation2();
      }
    },
    { once: true }
  );
});

document.querySelectorAll('a[href="/"], a[href="index.html"], a[href="#forside"]').forEach((a) => {
  a.addEventListener("click", () => {
    sessionStorage.setItem("skipHeroAnimation", "1");
  });
});

function heroAnimation1() {
  heroBox.classList.add("hero-box-styling");
  heroImg.classList.add("rise");
}

function heroAnimation2() {
  heroBox.classList.add("scaleUp");
  heroBox.addEventListener("animationend", function (event) {
    if (event.animationName === "scaleUp") {
      heroBox.classList.remove("hero-box-styling");
      heroBox.classList.remove("scaleUp");
      heroBox.classList.add("hero-box-styling2");
      heroAnimation3();
    }
  });
}

function heroAnimation3() {
  heroBox.classList.add("moveUp");

  heroBox.addEventListener("animationend", function (event) {
    if (event.animationName === "moveUp") {
      heroBox.classList.remove("hero-box-styling2");
      heroBox.classList.remove("moveUp");

      showNav();
    }
  });
}

function showNav() {
  navF.classList.remove("hide"); // gør nav synlig
  navF.classList.add("navigation-box"); // sætter din box styling

  // sæt animation på alle 3 samtidig
  logo.classList.add("navRise");
  menu.classList.add("navRise");
  burgerF.classList.add("navRise");

  // vis samtidig
  showContent();

  // når nav-animation er færdig → ryd op
  logo.addEventListener(
    "animationend",
    function () {
      logo.classList.remove("navRise");
      menu.classList.remove("navRise");
      burgerF.classList.remove("navRise");
      navF.classList.remove("navigation-box");
    },
    { once: true }
  );
}

function showContent() {
  main.classList.remove("hide");
  footer.classList.remove("hide");

  // fade ind
  main.classList.add("fadeIn");
  footer.classList.add("fadeIn");
  velkomst.classList.add("fadeIn");
  heroBox.classList.remove("hero-box");
  // når fadeIn er færdig → fjern fadeIn
  main.addEventListener(
    "animationend",
    function () {
      main.classList.remove("fadeIn");
      footer.classList.remove("fadeIn");
    },
    { once: true }
  );
}
