# Reading List Site

A simple black-and-white book list site. No backend, no database — just static files.

## How to add a book

Open `books.js` and add a new entry to the BOOKS array, following the same format
as the existing one. Set `status` to "active" or "archive". Give it a unique `slug`.

For cover images, the easiest option is Open Library's cover API:
`https://covers.openlibrary.org/b/isbn/YOUR-ISBN-L.jpg`
(swap in the book's ISBN). Otherwise just link to any image URL, or drop image
files into the `books/` folder and point `cover` at e.g. `books/mycover.jpg`.

## How to put this online (GitHub Pages)

1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository (top right, "+" → "New repository"). Name it
   whatever you want, e.g. "reading-list". Keep it Public.
3. Upload all the files in this folder into that repository (there's an
   "Add file" → "Upload files" button on the repo page — drag them in).
4. Go to the repo's Settings tab → Pages (in the left sidebar).
5. Under "Build and deployment", set Source to "Deploy from a branch",
   branch "main", folder "/ (root)". Save.
6. GitHub will give you a URL like `https://yourusername.github.io/reading-list`
   after a minute or two — that's your live site.

## Custom domain

Once you have a domain (Squarespace, Namecheap, etc.):
1. In your domain registrar, add a CNAME record pointing to
   `yourusername.github.io`
2. In your GitHub repo → Settings → Pages, enter your custom domain in the
   "Custom domain" field and save.

It can take up to a day to propagate, sometimes just minutes.
