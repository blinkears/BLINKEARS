# BLINKEARS — Official Website

Static website for **blinkears.com**, hosted on GitHub Pages.

## Structure
All files sit in ONE folder (no subfolders) so GitHub web upload never skips anything.
Pages: index.html, merch.html, privacy.html, terms.html, 404.html · Styles: style.css · Script: app.js · Images: *.jpg / *.webp / *.png
CNAME (blinkears.com) and .nojekyll must stay.

## Deploy / განახლება GitHub-ზე
1. Repository-დან წაშალე ძველი ფაილები (მათ შორის ძველი `poster-wide.jpg`, `poster-vertical.jpg`, `family-lineup.jpg` root-ში — ახლა სურათები `` საქაღალდეშია).
2. ატვირთე ყველა ფაილი repository-ის root-ში (Add file → Upload files → მონიშნე ყველა ფაილი Ctrl+A).
3. Settings → Pages: Source = `main` / `(root)`, Custom domain = `blinkears.com`.
4. რამდენიმე წუთში საიტი განახლდება. თუ ძველი დიზაინი ჩანს — Ctrl+F5 (ან Cmd+Shift+R).

## Editing tips
- Text lives in `index.html` / `merch.html`.
- To swap an image, replace both the `.jpg` and `.webp` with the same name in ``.
- After editing CSS/JS, bump `?v=14` → `?v=15` in the HTML files to clear browser caches.
- Merch buttons open an email to blinkears@gmail.com. When a real shop exists, replace the `mailto:` links with shop links.
