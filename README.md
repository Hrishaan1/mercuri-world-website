# Mercuri World Website

A modern, responsive multi-page website for **Mercuri World**, a neuroscience and innovation club, built with **HTML**, **TailwindCSS**, and minimal JavaScript. The website is designed to showcase the club's mission, team, blog, resources, and contact information.

---

## Project Structure

``` shell
mercuri-world-website
├── assets/
│   ├── css
│   │   └── styles.css
│   └── js
│       └── script.js
├── components/
│   ├── footer.html
│   └── navbar.html  
├── template/
│   └── template.html
├── server/
│   ├── node_modules/
│   │   └── ...
│   ├── .env
│   ├── .env.example
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── SETUP_GUIDE.md
├── about.html
├── blog.html
├── contact.html
├── index.html
├── projects.html
├── resources.html
├── team.html
└── README.md
```

---

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile using TailwindCSS.
- **Dark Theme**: Consistent dark background with accent colors (`#4e65cb` & `#b4c4f8`)
- **Sticky Footer**: Footer always stays at the bottom of the page. 
- **Dynamic Navbar**:
    - Highlights the current page. 
    - Mobile hamburger menu toggles links.
- **Page Sections**:
    - **Home**: Hero, updates, polls, member counter.
    - **About**: Constitution, mission, story, volunteer section.
    - **Team**: Team members placeholders (images can be added later).
    - **Projects**: Past and upcoming projects with modal previews.
    - **Blog**: Categorized monthly blog posts with year. 
    - **Resources**: Grid of PDFs, guides, and other materials.
    - **Contact**: Contact form and social links with hover effects.

---

## JavaScript Features

- Smooth scroll for in-page anchors.
- Mobile menu toggle.
- Active link highlighting in navbar.
- Navbar sticky blur effect on scroll.
- Modal animation for projects.
- Placeholder functions for live counts and dynamic data.

---

## Installation / Usage

1. Clone the repository:

```bash
git clone https://github.com/Hrishaan1/mercuri-world-website.git
```

2. Open any HTML file in a browser:
```bash
cd mercuri-world-browser
open index.html
```

---

## Styling
- **TailwindCSS** is used via CDN.
- Custom CSS available in ```assets/css/styles.css``` for additional styling.
- consistend dark theme and accent colors. 

---

## Notes / Future Improvements
- Integrate **backend** for contact form submissions.
- Replace ```<span>``` placeholders with actual images/videos/resources. 
- Add filtering and search functionality for **Blog** and **Resources**
- Consider accessibility improvements (ARIA roles, keyboard navigation).

---

## Author

**Mercuri.World - AFHS**

Website designed and developed using HTML, TailwindCSS, and JavaScript

