# Linux Distro Journal — GitHub Pages site

A static, dark-themed distro journal. 12 tried distros; 11 wishlist distros. Ranking, personal ratings, notes, import/export, and your own embedded coloured logo uploads. No accounts, analytics, or third-party image requests.

## Publish on GitHub Pages

1. Create a **public** GitHub repository named `linux-distro-journal`.
2. Upload the contents of this directory (`index.html`, `style.css`, `app.js`, and `distros.json`) to the repository root. Do **not** upload the ZIP without extracting it.
3. In the repository, go to **Settings → Pages → Build and deployment → Deploy from a branch**. Select `main` and `/ (root)`; save.
4. GitHub will show your site address, usually `https://YOUR-USERNAME.github.io/linux-distro-journal/`.

## Important: your data

Your ratings, ranking, notes, and uploaded logo images are stored **only in the browser's localStorage** for that site. They are not shared publicly or automatically synced between browsers. Use **Export backup** to save a JSON file, and **Import backup** on another device. If you change the website URL, export before the move.

## Images

Click **Add original logo** on a card and choose an authentic coloured PNG, JPG or WebP. The site resizes and embeds it into browser storage and includes it in JSON backup. Original logo files are not included in this package: missing ones are shown as plainly identified initial placeholders, not falsely claimed to be official logos.

## Preview locally

Run `python3 -m http.server 8000` from this directory and browse to `http://localhost:8000/`.
