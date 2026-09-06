const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const book = BOOKS.find(b => b.slug === slug);

if (book) {
  document.getElementById("page-title").textContent = book.title;
  if (book.cover) {
    const img = document.getElementById("book-cover");
    img.src = book.cover;
    img.alt = book.title;
    img.hidden = false;
  } else {
    document.getElementById("book-cover-placeholder").hidden = false;
  }
  document.getElementById("book-title").textContent = book.title;
  document.getElementById("book-author").textContent = book.author;
  document.getElementById("book-year").textContent = book.year || "";
  document.getElementById("book-blurb").textContent = book.blurb;
} else {
  document.querySelector("main").innerHTML = "<p>Book not found.</p>";
}
