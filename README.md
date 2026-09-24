# Nazmul Islam Fahim — AI Automation Portfolio

A responsive personal portfolio website for **Nazmul Islam Fahim**, focused on **n8n workflow automation, AI automation, business automation, API integrations, and practical automation systems**.

This is a lightweight static website designed for **GitHub Pages**. It does not require Node.js, npm, a database, or a backend.

---

## About Me

I build practical automation systems around real business problems.

**Problem solver first. Automation builder second.**

My approach is to understand the process first: repetitive tasks, decisions, exceptions, handoffs, and the tools already being used. Then I design an automation workflow that is useful, understandable, and maintainable.

---

## Featured Portfolio Project

### HR Recruitment Automation with n8n

A self-initiated portfolio project designed to streamline repetitive recruitment tasks while keeping important HR decisions under human control.

### Workflow Includes

- Candidate data collection through Google Forms
- Automatic candidate processing and categorization
- Experience-based data routing
- Google Sheets integration for organized candidate records
- Real-time Telegram notifications for HR
- SHORTLIST and REJECT decision handling
- Automated Gmail communication based on workflow decisions
- Candidate status and decision tracking

### Tools Used

- n8n
- Google Forms
- Google Sheets
- n8n AI Agent
- Gemini Chat Bot
- Gmail
- Telegram
- Webhooks
- Google Apps Script

### Challenge

The recruitment process involved repetitive steps such as collecting applications, organizing candidate information, notifying HR, recording decisions, and communicating updates.

### Solution

The workflow connects these steps through n8n so information can move automatically between tools while HR remains responsible for important shortlist and reject decisions.

### Project Details

| Item | Details |
| --- | --- |
| Project type | Self-initiated portfolio project |
| Industry | HR & Recruiting Services |
| Estimated solution value | $400–$600 |
| Project duration | 7–30 days |

> The estimated solution value represents the approximate value of the portfolio solution, not a client payment.

---

## Fiverr Gig

### I will build n8n workflow automation and API integrations

**Gig tags:**

- n8n workflow
- business automation
- n8n automation
- workflow automation
- AI automation

**Fiverr Gig:**  
https://www.fiverr.com/nazmulislam97/build-n8n-workflow-automation-and-api-integrations

---

## Website Features

- Responsive desktop, tablet, and mobile design
- Dark and light themes
- Smooth theme transitions
- Interactive loading screen
- Three.js ambient background
- GSAP scroll animations
- Scroll progress indicator
- Active navigation highlighting
- Large responsive hero typography
- Custom optical kerning for the hero name
- Transparent portrait integration
- Detailed portfolio project section
- Fiverr gig showcase using the real gig thumbnail
- Hover/lift interactions for cards and buttons
- LinkedIn and Fiverr profile controls with icons
- Keyboard focus states
- Mobile touch feedback
- Reduced-motion accessibility support
- Semantic HTML structure
- GitHub Pages compatible deployment

---

## Technology Stack

### Core
- HTML5
- CSS3
- Vanilla JavaScript

### Animation & Visuals
- Three.js
- GSAP
- GSAP ScrollTrigger
- Google Fonts

### Hosting
- GitHub Pages

No build system is required.

---

## Project Structure

```text
nazmul-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── nazmul-portrait-reference-fade.png
    └── fiverr-gig-thumbnail.jpg
```

### Files

**`index.html`** — Website structure and content: navigation, hero, portfolio, gig, approach, contact, and footer.

**`style.css`** — Complete design system: themes, typography, spacing, responsive layout, hover effects, and hero kerning.

**`script.js`** — Loading screen, theme switching, active navigation, scroll progress, GSAP animation, and Three.js background.

**`assets/`** — Portfolio portrait and Fiverr gig thumbnail.

---

## Run the Website Locally

Because this is a static website, there is nothing to install.

### Simple Method

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a modern browser.

### Recommended Editing Setup

Use **Visual Studio Code + Live Server**:

1. Open the entire project folder in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Edit the files and save with `Ctrl + S`.

---

## Deploy to GitHub Pages

For a GitHub user site, the repository can be named:

```text
iNazFPS.github.io
```

Upload these items directly to the repository root:

```text
index.html
style.css
script.js
README.md
assets/
```

Then:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch.
5. Select `/ (root)`.
6. Save.

Keep `index.html` in the repository root and keep the `assets` folder structure unchanged.

---

## Editing Guide

For future updates:

| What you want to change | File |
| --- | --- |
| Text, sections, links, project information | `index.html` |
| Colors, spacing, sizes, responsive design | `style.css` |
| Loader, theme, navigation and animations | `script.js` |
| Portrait or gig thumbnail | `assets/` |

If you replace an image while keeping the same filename, you normally do not need to edit the HTML path.

---

## Responsive Design

The website contains dedicated adjustments for:

- Large desktop screens
- Laptops
- Tablets
- Mobile devices
- Narrow mobile screens

Hero typography, portrait positioning, navigation, project layout, Fiverr card, section spacing, and social buttons adapt at different viewport sizes.

---

## Dark / Light Theme

The site supports both dark and light modes.

The selected theme is saved with browser `localStorage`, allowing the preference to persist between visits. The theme toggle also updates the browser theme color.

---

## Performance

The portfolio is intentionally built without a frontend framework.

Performance-related choices include:

- Static HTML/CSS/JavaScript
- No framework runtime
- Reduced Three.js particle count on smaller screens
- Limited WebGL pixel ratio
- Responsive layouts
- Reduced-motion support
- Lightweight hover interactions

Three.js, GSAP, and Google Fonts are loaded from external CDNs, so those external resources require an internet connection.

---

## Accessibility

The site includes:

- Semantic sections
- Descriptive image alternative text
- Skip-to-content link
- Visible keyboard focus states
- Accessible theme-toggle labels
- Active navigation state
- `prefers-reduced-motion` support
- Touch-friendly controls

---

## Professional Links

**GitHub**  
https://github.com/iNazFPS

**LinkedIn**  
https://www.linkedin.com/in/nazmul-islam-fahim-89650a194

**Fiverr Gig**  
https://www.fiverr.com/nazmulislam97/build-n8n-workflow-automation-and-api-integrations

---

## Contact

The current portfolio uses the Fiverr gig as the primary project-conversation route.

No public email address is included unless the portfolio owner explicitly chooses to add one.

---

## Third-Party Resources

This project uses third-party libraries and services including Three.js, GSAP, Google Fonts, GitHub, and Fiverr. Those resources, names, trademarks, and libraries remain subject to their respective licenses and terms.

The portfolio owner should also ensure that any future images, icons, fonts, libraries, or other third-party materials added to the project are used under appropriate permissions or licenses.

---

## Copyright

© 2026 Nazmul Islam Fahim. All rights reserved.

Original portfolio content and custom project presentation should not be copied, republished, redistributed, or presented as another person's work without appropriate permission.

Third-party libraries, services, fonts, trademarks, and other third-party materials remain subject to their respective licenses and terms.

---

## Current Version

**V1.01 — Complete README Edition**

This version retains the V1.01 website design and professional optical hero-name spacing while replacing the short development-note README with complete project documentation.
