# BLINKEARS — Official Website

Static website for **blinkears.com**, hosted on GitHub Pages.

## Structure
```
index.html      Home page (hero, family, shorts, world, about, merch teaser, contact)
merch.html      Merch page (collection 01 — coming soon)
privacy.html    Privacy
terms.html      Terms
404.html        Custom "page not found"
style.css       All styles
app.js          Menu, scroll reveal, fireflies, merch filter, copy email
favicon.svg     Browser tab icon
assets/         All images (JPG + WebP), icons, social share image
CNAME           Custom domain (blinkears.com) — do not delete
.nojekyll       Tells GitHub Pages to serve files as-is
robots.txt, sitemap.xml, site.webmanifest
```

## Deploy / განახლება GitHub-ზე
1. Repository-დან წაშალე ძველი ფაილები (მათ შორის ძველი `poster-wide.jpg`, `poster-vertical.jpg`, `family-lineup.jpg` root-ში — ახლა სურათები `assets/` საქაღალდეშია).
2. ატვირთე ამ საქაღალდის **მთელი შიგთავსი** repository-ის root-ში (`assets` საქაღალდის ჩათვლით).
3. Settings → Pages: Source = `main` / `(root)`, Custom domain = `blinkears.com`.
4. რამდენიმე წუთში საიტი განახლდება. თუ ძველი დიზაინი ჩანს — Ctrl+F5 (ან Cmd+Shift+R).

## Editing tips
- Text lives in `index.html` / `merch.html`.
- To swap an image, replace both the `.jpg` and `.webp` with the same name in `assets/`.
- After editing CSS/JS, bump `?v=11` → `?v=12` in the HTML files to clear browser caches.
- Merch buttons open an email to blinkears@gmail.com. When a real shop exists, replace the `mailto:` links with shop links.
