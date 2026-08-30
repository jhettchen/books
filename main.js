function renderGrid(containerId, books) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  books.forEach(book => {
    const link = document.createElement("a");
    link.href = `book.html?slug=${encodeURIComponent(book.slug)}`;
    link.className = "book-cover-link";

    const img = document.createElement("img");
    img.src = book.cover;
    img.alt = book.title;

    const caption = document.createElement("div");
    caption.className = "cover-caption";
    caption.textContent = book.title;

    const author = document.createElement("div");
    author.className = "cover-author";
    author.textContent = book.author;

    link.appendChild(img);
    link.appendChild(caption);
    link.appendChild(author);
    container.appendChild(link);
  });
}

const active = BOOKS.filter(b => b.status === "active");
const archive = BOOKS.filter(b => b.status === "archive");

renderGrid("active-grid", active);
renderGrid("archive-grid", archive);
