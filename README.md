# Nazmul Islam Fahim — Portfolio V1.0

Static portfolio website for Nazmul Islam Fahim, focused on n8n workflow automation, AI automation, API integrations, webhooks, and practical business automation.

## Live site
https://inazfps.github.io/

## Project structure
- `index.html` — main portfolio page
- `hr-recruitment-automation.html` — HR Recruitment Automation case study
- `style.css` — responsive dark/light styling
- `script.js` — loader, theme, hash-free navigation, active navigation, reveal effects, scroll progress, and Three.js ambient background
- `assets/` — portrait, Fiverr thumbnail, favicons, and self-hosted animation libraries
- `robots.txt` — crawler rules
- `sitemap.xml` — public page discovery
- `llms.txt` — concise machine-readable portfolio summary

## Local preview
Use VS Code with Live Server and open `index.html`. The production site uses an ES-module Three.js file, so a local web server is preferred over opening the production HTML directly with `file://`.

## GitHub Pages deployment
Upload the contents of this project folder to the root of the `iNazFPS.github.io` repository. Keep GitHub Pages set to the `main` branch and repository root.

## Editing
Replace `assets/nazmul-portrait.png` with another transparent PNG using the same filename when updating the portrait. CSS controls only placement and responsive sizing; it does not add a portrait fade, mask, gradient, or image filter.

Navigation scrolls to HOME, PORTFOLIO, FIVERR, ABOUT, and CONTACT without adding section hashes to the browser URL.

## SEO / discovery
The project includes canonical metadata, robots directives, Open Graph/Twitter metadata, JSON-LD, a sitemap, `robots.txt`, and `llms.txt`. These improve crawlability and machine-readable context but do not guarantee search rankings or AI recommendations.

## Analytics
Google Analytics measurement ID: `G-9X3RETWLD0`.

## Security
This is a public static frontend. Never commit passwords, API keys, private keys, bot tokens, n8n credentials, or other secrets. Three.js, GSAP, and ScrollTrigger are self-hosted in `assets/js/`.

## Version
V1.0
