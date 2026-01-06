// Funktion der tjekker om et link går til forsiden

function erForsideLink(href) {
  return href === "/" || href === "index.html" || href === "#forside" || href.endsWith("/index.html") || href.endsWith("/#forside");
}

// Lyt efter klik på hele siden
document.addEventListener("click", function (event) {
  // Find det link (<a>) der blev klikket på
  // (eller et link som et barn af det man klikkede på)
  const link = event.target.closest("a");
  // Hvis det ikke var et link, så stop her
  if (!link) {
    return;
  }

  // Hent linkets href (hvor linket fører hen)
  const href = link.getAttribute("href");
  // Hvis href ikke findes, så stop
  if (!href) {
    return;
  }

  // Tjek om linket fører til forsiden

  // Hvis brugeren klikker på et forside-link
  if (erForsideLink(href)) {
    sessionStorage.setItem("skipHeroAnimation", "1");
  }
});
