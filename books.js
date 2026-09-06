// Edit this file to add, remove, or update books.
// status: "active" or "archive"
// slug: used in the URL, keep it lowercase-with-dashes, must be unique
// year: publication year, shown on the book's detail page
// cover: path or URL to the cover image
// blurb: your short review, a couple sentences

const BOOKS = [
  {
    slug: "culture-of-narcissism",
    title: "The Culture of Narcissism",
    author: "Christopher Lasch",
    year: 1979,
    cover: "covers/Culture-of-Narcissism.jpg",
    status: "active",
    blurb: "Start here to understand every problem with mass culture. Foundational post-left reading."
  },
  {
    slug: "interpretation-of-dreams",
    title: "The Interpretation of Dreams",
    author: "Sigmund Freud",
    year: 1899,
    cover: "covers/Interpretation-Of-Dreams.jpg",
    status: "archive",
    blurb: ""
  },
  {
    slug: "females",
    title: "Females",
    author: "Andrea Long Chu",
    year: 2019,
    cover: "covers/Females.jpg",
    status: "archive",
    blurb: ""
  }
];
