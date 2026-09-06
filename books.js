// Edit this file to add, remove, or update books.
// status: "active", "archive", or "planned" (books you intend to read)
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
    blurb: "“A small minority are enabled by their constitution to find happiness, in spite of everything, along the path of love. But far-reaching mental changes in the function of love are necessary before this can happen. These people make themselves independent of their object's acquiescence by displacing what they mainly value from being loved on to loving; they protect themselves against the loss of the object by directing their love, not to single objects but to all men alike; and they avoid uncertainties and disappointments of genital love by turning away from its sexual aims and transforming the instinct into an impulse with an inhibited aim.”"
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
    blurb: "“Humor won’t save you; it doesn’t really do anything at all. You can look at life ironically for years, maybe decades; there are people who seem to go through most of their lives seeing the funny side, but in the end, life always breaks your heart. Doesn’t matter how brave you are, how reserved, or how much you’ve developed a sense of humor, you still end up with your heart broken. That’s when you stop laughing. In the end there’s just the cold, the silence and the loneliness. In the end, there’s only death.”"
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
    cover: "covers/Catcher-in-the-Rye.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "slaughterhouse-five",
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    year: 1969,
    cover: "covers/Slaughterhouse-Five.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "the-painted-word",
    title: "The Painted Word",
    author: "Tom Wolfe",
    year: 1975,
    cover: "covers/The-Painted-Word.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "welcome-to-the-desert-of-the-real",
    title: "Welcome to the Desert of the Real",
    author: "Slavoj Žižek",
    year: 2002,
    cover: "covers/Welcome-to-the-Desert-of-the-Real.png",
    status: "archive",
    blurb: ""
  },
  {
    slug: "heaven-in-disorder",
    title: "Heaven in Disorder",
    author: "Slavoj Žižek",
    year: 2021,
    cover: "covers/Heaven-in-Disorder.png",
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
    blurb: "“Many times I've wished, not so much that I was someone else, nor that I was immortal, but that I could live many different lives simultaneously and not be limited to being only one thing.”"
  },
  {
    slug: "revolt-of-the-elites",
    title: "The Revolt of the Elites and the Betrayal of Democracy",
    author: "Christopher Lasch",
    year: 1995,
    cover: "covers/Revolt-of-the-Elites.jpg",
    status: "planned",
    blurb: ""
  },
  {
    slug: "tell-them-i-said-no",
    title: "Tell Them I Said No",
    author: "Martin Herbert",
    year: 2016,
    cover: "covers/Tell-Them-I-Said-No.png",
    status: "planned",
    blurb: ""
  },
  {
    slug: "between-men",
    title: "Between Men: English Literature and Male Homosocial Desire",
    author: "Eve Kosofsky Sedgwick",
    year: 1985,
    cover: "covers/Between-Men.jpg",
    status: "planned",
    blurb: ""
  },
  {
    slug: "play-it-as-it-lays",
    title: "Play It as It Lays",
    author: "Joan Didion",
    year: 1970,
    cover: "covers/Play-It-As-It-Lays.jpg",
    status: "planned",
    blurb: ""
  },
  {
    slug: "sexual-personae",
    title: "Sexual Personae: Art and Decadence from Nefertiti to Emily Dickinson",
    author: "Camille Paglia",
    year: 1990,
    cover: "covers/Sexual-Personae.jpg",
    status: "planned",
    blurb: ""
  },
  {
    slug: "dirtbag",
    title: "Dirtbag: Essays",
    author: "Amber A'Lee Frost",
    year: 2023,
    cover: "",
    status: "planned",
    blurb: ""
  },
  {
    slug: "against-interpretation",
    title: "Against Interpretation and Other Essays",
    author: "Susan Sontag",
    year: 1966,
    cover: "covers/Against-Interpretation.jpg",
    status: "planned",
    blurb: ""
  },
  {
    slug: "sailor-who-fell-from-grace-with-the-sea",
    title: "The Sailor Who Fell from Grace with the Sea",
    author: "Yukio Mishima",
    year: 1963,
    cover: "covers/Sailor-Who-Fell-From-Grace-With-The-Sea.png",
    status: "planned",
    blurb: ""
  }
];
