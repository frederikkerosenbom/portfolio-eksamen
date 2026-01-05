const mereLink = document.querySelector("#mere-link");
const mindreLink = document.querySelector("#mindre-link");
const mereTekst = document.querySelector("#mere");
const firstTekst = document.querySelector(".om-mig-tekst-p1");
const firstBoks = document.querySelector(".om-mig-tekst1");

mereTekst.classList.add("hide");
firstTekst.classList.add("uppercase");
firstBoks.classList.add("textplaceCenter");

/* LÆS MERE */
mereLink.addEventListener("click", (e) => {
  //e=event
  e.preventDefault(); // stopper hop på siden
  mereTekst.classList.remove("hide");
  mereLink.classList.add("hide"); // skjul "læs mere"
  firstTekst.classList.remove("uppercase");
  firstBoks.classList.remove("textplaceCenter");
  firstBoks.classList.add("textplaceStart");
});

/* VIS MINDRE */
mindreLink.addEventListener("click", (e) => {
  e.preventDefault();
  mereTekst.classList.add("hide");
  mereLink.classList.remove("hide"); // vis "læs mere" igen
  firstTekst.classList.add("uppercase");

  firstBoks.classList.remove("textplaceStart");
  firstBoks.classList.add("textplaceCenter");
});
