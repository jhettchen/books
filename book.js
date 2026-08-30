const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const book = BOOKS.find(b => b.slug === slug);

if (book) {
  document.getElementById("page-title").textContent = book.title;
  document.getElementById("book-cover").src = book.cover;
  document.getElementById("book-cover").alt = book.title;
  document.getElementById("book-title").textContent = book.title;
  document.getElementById("book-author").textContent = book.author;
  document.getElementById("book-status").textContent = book.status === "active" ? "ACTIVE" : "ARCHIVE";
  document.getElementById("book-blurb").textContent = book.blurb;
} else {
  document.querySelector("main").innerHTML = "<p>Book not found.</p>";
}
