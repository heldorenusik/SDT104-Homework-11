// Wait until the HTML is parsed so getElementById finds the container.
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("card-container");
  if (!container) return;

  // Event delegation: one listener for all cards and buttons, including nodes added later by renderCards().
  container.addEventListener("click", function (event) {
    const button = event.target.closest(".card__button");
    // contains(): ignore matches outside this container (e.g. another .card__button on the page).
    if (button && container.contains(button)) {
      const url = button.dataset.link;
      if (url) {
        console.log("Opening link:", url);
        // Third arg: noopener/noreferrer so the new tab cannot access this page via window.opener.
        window.open(url, "_blank", "noopener,noreferrer");
      }
      // The button sits inside .card; stop here so we do not also toggle selection below.
      return;
    }

    const card = event.target.closest(".card");
    if (card && container.contains(card)) {
      const wasSelected = card.classList.contains("card--selected");
      // Radiogroup-style selection: at most one highlighted card; clicking the active card clears it.
      container.querySelectorAll(".card--selected").forEach(function (el) {
        el.classList.remove("card--selected");
      });
      if (!wasSelected) {
        card.classList.add("card--selected");
        console.log("Highlighted card id:", card.dataset.cardId);
      } else {
        console.log("Card deselected:", card.dataset.cardId);
      }
    }
  });
});
