# BLINKEARS — GitHub Pages website

Production-ready static website for BLINKEARS / Siko & Rumba.

## Publish on GitHub Pages
1. Create a public GitHub repository (for example `blinkears`).
2. Upload the **contents of this folder** to the repository root. Do not upload the ZIP itself.
3. In GitHub: Settings → Pages → Build and deployment → Deploy from a branch.
4. Select `main` and `/ (root)`, then Save.
5. Wait for GitHub to publish the site.

## Custom domain
The included `CNAME` file contains `blinkears.com`. After the GitHub Pages preview works, configure the domain's DNS at GoDaddy using the values GitHub shows in Settings → Pages. Enable “Enforce HTTPS” after DNS is recognized.

## Content
- `index.html` — full English landing/catalog/characters/merch/about site
- `privacy.html`, `terms.html`, `404.html`
- `assets/style.css`, `assets/app.js`
- `assets/images/` — current BLINKEARS visual references

The Watch and Merch areas are launch-ready placeholders and can later be connected to real videos and a commerce platform without rebuilding the site structure.
