const slides = [
  {
    title: "01 Adobe Illustrator",
    text: "Jeg havde ikke arbejdet med Illustrator før studiet, men føler, at jeg har lært rigtig meget. Jeg er blevet sikker i de grundlæggende værktøjer og arbejdsgange, og det går hurtigt for mig at arbejde i programmet. Jeg ved godt, at der er mange flere muligheder, end jeg kan endnu, men jeg føler mig tryg i det, vi har arbejdet med indtil videre.",
    stars: 4,
  },
  {
    title: "02 Adobe Premiere Pro",
    text: "Jeg havde ikke arbejdet med Premiere Pro før. Desværre var jeg syg i perioden, hvor vi arbejdede mest med programmet, men jeg har efterfølgende set videoer og kurser. Jeg har en grundlæggende forståelse for programmet, men vil stadig betegne mig selv som nybegynder, da jeg ikke har brugt det så meget i praksis endnu.",
    stars: 2,
  },
  {
    title: "03 Figma",
    text: "Jeg havde heller ikke arbejdet med Figma før studiet, men det er et værktøj, jeg er blevet meget tryg ved. Jeg føler mig sikker i at lave wireframes, prototyper og hi-fi designs og bruge Figma som en del af designprocessen.",
    stars: 4,
  },
  {
    title: "04 HTML",
    text: "Jeg havde arbejdet lidt med HTML tidligere, men ikke noget jeg rigtig kunne huske. Det har måske givet en lille forforståelse, men det er først på studiet, jeg har lært det ordentligt. Jeg føler mig meget sikker i det, vi har lært indtil videre.",
    stars: 4,
  },
  {
    title: "05 CSS",
    text: "Jeg havde ikke arbejdet med CSS før, men føler mig i dag meget sikker i brugen af det. Jeg er tryg ved layout, farver, typografi og simple animationer og synes, det er spændende at se design blive til kode.",
    stars: 4,
  },
  {
    title: "06 JavaScript",
    text: "Jeg havde ingen erfaring med JavaScript før studiet. Jeg føler mig generelt sikker i det, vi har lært, men er stadig mest tryg i HTML og CSS. JavaScript er et område, jeg gerne vil blive endnu bedre til.",
    stars: 3,
  },
  {
    title: "07 GitHub",
    text: "Jeg havde ikke arbejdet med GitHub før. Jeg føler mig mellemsikker og kan bruge det til versionsstyring og samarbejde, men ved også, at der er mere at lære.",
    stars: 3,
  },
  {
    title: "08 Projektstyring",
    text: "Jeg havde ikke brugt Trello og SCRUM før studiet, men føler mig mellemsikker i brugen af det. Jeg kan bruge det til at skabe overblik, strukturere opgaver og følge processen i et projekt.",
    stars: 3,
  },
];

let index = 0;

// elements
const titleEl = document.getElementById("title");
const textEl = document.getElementById("text");
const starsEl = document.getElementById("stars");
const pageEl = document.getElementById("page");
const totalEl = document.getElementById("total");
const barFill = document.getElementById("barFill");

totalEl.textContent = slides.length;

function render() {
  const s = slides[index];

  titleEl.textContent = s.title;
  textEl.textContent = s.text;

  pageEl.textContent = index + 1;

  const pct = ((index + 1) / slides.length) * 100;
  barFill.style.width = pct + "%";

  starsEl.textContent = "★".repeat(s.stars) + "☆".repeat(5 - s.stars);
}

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length; // loop tilbage
  render();
});

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % slides.length; // loop frem
  render();
});

render();
