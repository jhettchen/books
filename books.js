// Edit this file to add, remove, or update books.
// status: "active" or "archive"
// slug: used in the URL, keep it lowercase-with-dashes, must be unique
// year: publication year, shown on the book's detail page
// cover: path or URL to the cover image; leave as "" if you don't have one yet
//   (a plain placeholder box is shown until you fill it in)
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
    status: "active",
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
  },
  {
    slug: "american-psycho",
    title: "American Psycho",
    author: "Bret Easton Ellis",
    year: 1991,
    cover: "covers/American-Psycho.jpg",
    status: "archive",
    blurb: ""
  },
  {
    slug: "ethics-and-infinity",
    title: "Ethics and Infinity",
    author: "Emmanuel Levinas",
    year: 1982,
    cover: "covers/Ethics-and-Infinity.jpg",
    status: "archive",
    blurb: ""
  },
  {
    slug: "myth-of-sisyphus",
    title: "The Myth of Sisyphus",
    author: "Albert Camus",
    year: 1942,
    cover: "covers/Myth-of-Sisyphus.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "famesick",
    title: "Famesick",
    author: "Lena Dunham",
    year: 2026,
    cover: "covers/Famesick.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "civilization-and-its-discontents",
    title: "Civilization and Its Discontents",
    author: "Sigmund Freud",
    year: 1930,
    cover: "covers/Civilization-and-Its-Discontents.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "three-essays-on-the-theory-of-sexuality",
    title: "Three Essays on the Theory of Sexuality",
    author: "Sigmund Freud",
    year: 1905,
    cover: "covers/Three-Essays-on-the-Theory-of-Sexuality.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "platform",
    title: "Platform",
    author: "Michel Houellebecq",
    year: 2001,
    cover: "covers/Platform.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "elementary-particles",
    title: "The Elementary Particles",
    author: "Michel Houellebecq",
    year: 1998,
    cover: "covers/Elementary-Particles.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "submission",
    title: "Submission",
    author: "Michel Houellebecq",
    year: 2015,
    cover: "covers/Submission.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "bell-jar",
    title: "The Bell Jar",
    author: "Sylvia Plath",
    year: 1963,
    cover: "covers/Bell-Jar.jpg",
    status: "archive",
    blurb: ""
  },
  {
    slug: "symposium",
    title: "The Symposium",
    author: "Plato",
    year: "c. 385 BC",
    cover: "covers/Symposium.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "100-boyfriends",
    title: "100 Boyfriends",
    author: "Brontez Purnell",
    year: 2021,
    cover: "covers/100-Boyfriends.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "catcher-in-the-rye",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    cover: "",
    status: "archive",
    blurb: ""
  },
  {
    slug: "slaughterhouse-five",
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    year: 1969,
    cover: "",
    status: "archive",
    blurb: ""
  },
  {
    slug: "the-painted-word",
    title: "The Painted Word",
    author: "Tom Wolfe",
    year: 1975,
    cover: "",
    status: "archive",
    blurb: ""
  },
  {
    slug: "welcome-to-the-desert-of-the-real",
    title: "Welcome to the Desert of the Real",
    author: "Slavoj Žižek",
    year: 2002,
    cover: "",
    status: "archive",
    blurb: ""
  },
  {
    slug: "heaven-in-disorder",
    title: "Heaven in Disorder",
    author: "Slavoj Žižek",
    year: 2021,
    cover: "",
    status: "archive",
    blurb: ""
  },
  {
    slug: "bronze-age-mindset",
    title: "Bronze Age Mindset",
    author: "Bronze Age Pervert",
    year: 2018,
    cover: "covers/Bronze-Age-Mindset.png",
    status: "archive",
    blurb: ""
  }
];
