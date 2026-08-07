# Common Goods Stationery — static site

Plain HTML / CSS / JS. No build step.

## Files
- `index.html` — the whole page
- `styles.css` — all styling
- `script.js` — footer year + newsletter form
- `images/` — hero and product photos
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Host on GitHub Pages
1. Create a new repo on GitHub.
2. Upload all files in this folder to the repo root (Add file → Upload files, drag them in).
3. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute; your site is at `https://<username>.github.io/<repo>/`.

## Custom domain
Settings → Pages → Custom domain: enter your domain, then at your registrar add
a CNAME record pointing to `<username>.github.io` (or the four A records GitHub lists
for an apex domain). Enable "Enforce HTTPS" once it's verified.

## Editing content
Open `index.html` in any text editor — event date/time, copy, and the Luma link
(`https://luma.com/5l796cbd`) are all plain text in there.
