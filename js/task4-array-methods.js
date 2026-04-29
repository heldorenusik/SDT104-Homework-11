function runTask4Computations() {
  if (typeof CARDS_DATA === "undefined") {
    return null;
  }

  // reduce: fold the array into one number — here, sum of all title string lengths.
  const totalTitleChars = CARDS_DATA.reduce(function (sum, card) {
    return sum + card.title.length;
  }, 0);

  // Copy with spread so we sort a new array and leave CARDS_DATA order unchanged.
  const sortedByTitle = [...CARDS_DATA].sort(function (a, b) {
    // localeCompare is a string method that compares two strings for sorting in a locale-aware way.
    // - negative if stringA comes before stringB in that locale’s order
    // - 0 if they sort as equal for comparison purposes
    // - positive if stringA comes after stringB
    return a.title.localeCompare(b.title);
  });

  const filterWord = "learn";
  // filter: keep only cards whose description contains the word (case-insensitive).
  const matchingDescriptions = CARDS_DATA.filter(function (card) {
    return card.description.toLowerCase().includes(filterWord.toLowerCase());
  });

  // map: same number of items, each replaced by its title string.
  const titlesOnly = CARDS_DATA.map(function (card) {
    return card.title;
  });

  return {
    totalTitleChars: totalTitleChars,
    sortedByTitle: sortedByTitle,
    filterWord: filterWord,
    matchingDescriptions: matchingDescriptions,
    titlesOnly: titlesOnly,
  };
}

function logTask4ToConsole(data) {
  if (!data) return;
  console.log(
    "[reduce] Total number of characters in all card titles:",
    data.totalTitleChars,
  );
  console.log(
    "[sort] Cards sorted alphabetically by title:",
    data.sortedByTitle,
  );
  console.log(
    '[filter] Cards whose description contains "' + data.filterWord + '":',
    data.matchingDescriptions,
  );
  console.log("[map] Array of titles only:", data.titlesOnly);
}

// IIFE runs once when this script loads (ensure task1-data.js is included before this file).
(function runOnLoad() {
  const data = runTask4Computations();
  if (data) {
    logTask4ToConsole(data);
  } else {
    console.error("CARDS_DATA is not defined. Load task1-data.js first.");
  }
})();
