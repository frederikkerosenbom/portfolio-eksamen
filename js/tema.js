//løsningen

const mereLink1 = document.querySelector("#mere-tema-result");
const mindreLink1 = document.querySelector("#mindre-tema-result");
const mereTekst1 = document.querySelector(".result-more");
const firstTekst1 = document.querySelector(".result-1");

mereTekst1.classList.add("hide");
firstTekst1.classList.add("textplaceCenter");

/* LÆS MERE */
mereLink1.addEventListener("click", (e) => {
  //e=event
  e.preventDefault(); // stopper hop på siden
  mereTekst1.classList.remove("hide");
  mereLink1.classList.add("hide"); // skjul "læs mere"

  firstTekst1.classList.remove("textplaceCenter");
  firstTekst1.classList.add("textplaceStart");
});

/* VIS MINDRE */
mindreLink1.addEventListener("click", (e) => {
  e.preventDefault();
  mereTekst1.classList.add("hide");
  mereLink1.classList.remove("hide"); // vis "læs mere" igen

  firstTekst1.classList.remove("textplaceStart");
  firstTekst1.classList.add("textplaceCenter");
});

//processen
const mereLink2 = document.querySelector("#mere-tema-proces");
const mindreLink2 = document.querySelector("#mindre-tema-proces");
const mereTekst2 = document.querySelector(".proces-more");
const firstTekst2 = document.querySelector(".proces-1");

mereTekst2.classList.add("hide");
firstTekst2.classList.add("textplaceCenter");

/* LÆS MERE */
mereLink2.addEventListener("click", (e) => {
  //e=event
  e.preventDefault(); // stopper hop på siden
  mereTekst2.classList.remove("hide");
  mereLink2.classList.add("hide"); // skjul "læs mere"

  firstTekst2.classList.remove("textplaceCenter");
  firstTekst2.classList.add("textplaceStart");
});

/* VIS MINDRE */
mindreLink2.addEventListener("click", (e) => {
  e.preventDefault();
  mereTekst2.classList.add("hide");
  mereLink2.classList.remove("hide"); // vis "læs mere" igen

  firstTekst2.classList.remove("textplaceStart");
  firstTekst2.classList.add("textplaceCenter");
});

//læringen
const mereLink3 = document.querySelector("#mere-tema-learning");
const mindreLink3 = document.querySelector("#mindre-tema-learning");
const mereTekst3 = document.querySelector(".learning-more");
const firstTekst3 = document.querySelector(".learning-1");

mereTekst3.classList.add("hide");
firstTekst3.classList.add("textplaceCenter");

/* LÆS MERE */
mereLink3.addEventListener("click", (e) => {
  //e=event
  e.preventDefault(); // stopper hop på siden
  mereTekst3.classList.remove("hide");
  mereLink3.classList.add("hide"); // skjul "læs mere"

  firstTekst3.classList.remove("textplaceCenter");
  firstTekst3.classList.add("textplaceStart");
});

/* VIS MINDRE */
mindreLink3.addEventListener("click", (e) => {
  e.preventDefault();
  mereTekst3.classList.add("hide");
  mereLink3.classList.remove("hide"); // vis "læs mere" igen

  firstTekst3.classList.remove("textplaceStart");
  firstTekst3.classList.add("textplaceCenter");
});

//////////opgavelink//////////
const opgaveLink = document.querySelector(".opgave-link");
const bgLink = document.querySelector(".link-bg");

window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    opgaveLink.classList.add("is-scrolled");
    bgLink.classList.add("is-scrolled");
  } else {
    opgaveLink.classList.remove("is-scrolled");
    bgLink.classList.remove("is-scrolled");
  }
});

burger.addEventListener("click", hideLink2);
function hideLink2() {
  const hide = burger.classList.contains("active");

  opgaveLink.classList.toggle("hide", hide);
}
