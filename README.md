# My Portfolio

A responsive, multi-page personal portfolio website built with HTML, CSS, and vanilla JavaScript as part of my Codecademy studies.

**Live site:** https://wiggs1.github.io/Portfolio/

## Pages

| Page | Description |
| --- | --- |
| `index.html` | Home page with a hero section, call-to-action buttons, and feature cards |
| `about.html` | About me, my skills, and my development process |
| `projects.html` | A grid of project cards showcasing my work |
| `contact.html` | Contact details and a contact form |

## Features

- **Responsive layout:** CSS Grid and Flexbox adapt the layout from large desktops down to small phones, using fluid sizing (`clamp()`, `min()`) and media queries at 840px and 600px.
- **Sticky navigation:** the header stays at the top of the page with a frosted-glass effect.
- **Mobile menu:** below 840px the nav collapses into a hamburger button that animates into an X. It closes when a link is clicked, when Escape is pressed, or when the screen is resized to desktop width.
- **Animations:** nav links fade in with a staggered reveal, the current page's link is underlined automatically, and cards animate into view on scroll using `IntersectionObserver`.
- **Touch-friendly:** hover "lift" effects only apply on devices with a mouse, so cards don't stay raised after a tap.
- **Accessibility:** semantic HTML, `aria-expanded` and `aria-label` on the menu button, visible focus styles, and support for the `prefers-reduced-motion` setting.

## Built with

- HTML5
- CSS3 (Grid, Flexbox, custom properties, media queries)
- JavaScript (ES6)
- Git and GitHub Pages for version control and hosting

## Run it locally

1. Clone the repository:
   ```
   git clone https://github.com/wiggs1/Portfolio.git
   ```
2. Open `index.html` in your browser. No build step or dependencies are needed.

## What I learned

- Designing layouts that work across screen sizes with Grid, Flexbox, and media queries
- Building an accessible mobile navigation menu with JavaScript
- Adding scroll-triggered animations with `IntersectionObserver`
- Using Git to track changes and GitHub Pages to publish a website
