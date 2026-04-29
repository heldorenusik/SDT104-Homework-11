// Shared list of card objects: used by task2 (render), task3 (events), and task4 (arrays).
const CARDS_DATA = [
  {
    id: "1",
    title: "Learn JavaScript",
    description:
      "The Modern JavaScript Tutorial — how it's done now. From the basics to advanced topics, with simple, detailed explanations.",
    imageUrl: "resources/card_1.png",
    link: "https://javascript.info/",
  },
  {
    id: "2",
    title: "Browser: Document, Events, Interfaces",
    description:
      "Learn how to work with the DOM tree, create elements, and inject them dynamically into the page.",
    imageUrl: "resources/card_2.png",
    link: "https://javascript.info/document",
  },
  {
    id: "3",
    title: "Array methods",
    description:
      "Learn about map, filter, reduce, sort, and other methods for working with lists in JavaScript.",
    imageUrl: "resources/card_3.png",
    link: "https://javascript.info/array-methods",
  },
  {
    id: "4",
    title: "Event delegation",
    description:
      "Learn about event delegation: one handler on a parent uses event.target to react to many child elements efficiently.",
    imageUrl: "resources/card_4.png",
    link: "https://javascript.info/event-delegation",
  },
  {
    id: "5",
    title: "Modifying the document",
    description:
      "Create and insert elements, remove nodes, and update the page from JavaScript — core skills for dynamic interfaces.",
    imageUrl: "resources/card_5.png",
    link: "https://javascript.info/modifying-document",
  },
  {
    id: "6",
    title: "Having a rest",
    description:
      "It's always good to have a rest and relax after a hard work.",
    imageUrl: "resources/card_6.png"
  }
];

console.log(CARDS_DATA);