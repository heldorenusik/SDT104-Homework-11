// Wait until the HTML is parsed so getElementById finds the container.
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("card-container");
  if (!container) return;

  // One click listener on the parent (event delegation): handles any card or button
  // inside the container, including elements added later by renderCards().
  container.addEventListener("click", function (event) {
    // If the click was on a "Open link" button (or inside it), open the URL.
    // closest() walks up from the actual node clicked to find .card__button.
    const button = event.target.closest(".card__button");
    if (button && container.contains(button)) {
      const url = button.dataset.link;
      if (url) {
        console.log("Opening link:", url);
        // New tab; noopener/noreferrer avoids the new page accessing window.opener.
        window.open(url, "_blank", "noopener,noreferrer");
      }
      return;
    }

    // Otherwise treat as a click on the card (title, image, etc.): toggle selection.
    const card = event.target.closest(".card");
    if (card && container.contains(card)) {
      const wasSelected = card.classList.contains("card--selected");
      // Only one card selected at a time: clear every selected card first.
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
