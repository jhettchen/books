function renderGrid(containerId, books) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  books.forEach(book => {
    const link = document.createElement("a");
    link.href = `book.html?slug=${encodeURIComponent(book.slug)}`;
    link.className = "book-cover-link";

    let cover;
    if (book.cover) {
      cover = document.createElement("img");
      cover.src = book.cover;
      cover.alt = book.title;
    } else {
      cover = document.createElement("div");
      cover.className = "cover-placeholder";
    }

    const caption = document.createElement("div");
    caption.className = "cover-caption";
    caption.textContent = book.title;

    const author = document.createElement("div");
    author.className = "cover-author";
    author.textContent = book.author;

    link.appendChild(cover);
    link.appendChild(caption);
    link.appendChild(author);
    container.appendChild(link);
  });
}

function lastName(author) {
  const parts = author.trim().split(/\s+/);
  return parts[parts.length - 1].toLowerCase();
}

function byAuthorLastName(a, b) {
  return lastName(a.author).localeCompare(lastName(b.author));
}

const active = BOOKS.filter(b => b.status === "active").sort(byAuthorLastName);
const archive = BOOKS.filter(b => b.status === "archive").sort(byAuthorLastName);
const planned = BOOKS.filter(b => b.status === "planned").sort(byAuthorLastName);

renderGrid("active-grid", active);
renderGrid("archive-grid", archive);
renderGrid("planned-grid", planned);
