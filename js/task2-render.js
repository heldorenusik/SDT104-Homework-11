function renderCards() {
  const container = document.getElementById("card-container");
  if (!container || typeof CARDS_DATA === "undefined") return;

  // Remove any previous markup so re-running render does not duplicate cards.
  container.innerHTML = "";

  CARDS_DATA.forEach(function (card) {
    const article = document.createElement("article");
    article.className = "card";
    article.dataset.cardId = String(card.id);

    const img = document.createElement("img");
    img.src = card.imageUrl;
    img.alt = "";
    img.className = "card__image";

    const body = document.createElement("div");
    body.className = "card__body";

    const titleEl = document.createElement("h3");
    titleEl.className = "card__title";
    titleEl.textContent = card.title;

    const desc = document.createElement("p");
    desc.className = "card__description";
    desc.textContent = card.description;

    const actions = document.createElement("div");
    actions.className = "card__actions";

    // Optional action: data-link is read in task3-events when the button is clicked.
    if (card.link) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "card__button";
      btn.textContent = "Open link";
      btn.dataset.link = card.link;
      actions.appendChild(btn);
    }

    body.appendChild(titleEl);
    body.appendChild(desc);
    body.appendChild(actions);
    article.appendChild(img);
    article.appendChild(body);
    container.appendChild(article);
  });
}

// Build the card list as soon as the DOM is ready (after task1-data.js has run).
document.addEventListener("DOMContentLoaded", renderCards);
