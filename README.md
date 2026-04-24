# My AdDU Journey — A Story of Conversion, Passion, Faith, and Becoming

A personal portfolio website by **Kenneth Jay Lamadora**, crafted in the spirit of editorial storytelling and Ignatian reflection.

The site is a single-page experience with four sections:

1. **Home** — hero with tagline, welcome message, and your portrait (9:16).
2. **AdDU Journey Map** — a short introduction with three images (2 landscape, 1 portrait).
3. **Conversion Story** — a magazine / editorial long-read with a drop-cap, pull quotes, and four feature images.
4. **Passion Plan** — a road map (with 1 image), a prayer card, and a personal mission statement.

No build step is required. It is pure **HTML + CSS + JavaScript** with Google Fonts. Open `index.html` directly or serve the folder with any static server.

---

## Quick start

From this folder, run **any** of the following — they all do the same thing:

```bash
# Python 3 (usually preinstalled)
python3 -m http.server 5173

# Node (if you have it)
npx --yes serve -p 5173 .
```

Then open <http://localhost:5173> in your browser.

> Tip: opening `index.html` with a double-click also works, but a local server will give you the smoothest experience (fonts, smooth scroll, and relative asset paths all behave correctly).

---

## Replace the placeholder images with your own

The `assets/` folder contains ready-to-use SVG placeholders so the site renders beautifully on first run. To use your real photos, drop your own image in place (any format — `.jpg`, `.png`, `.webp`) and update the `src` in `index.html` if you choose a different extension. Suggested filenames and ratios:

| File | Where it appears | Suggested ratio |
| --- | --- | --- |
| `assets/home-portrait.svg` | Home hero portrait | **9 : 16** (portrait) |
| `assets/journey-1.svg` | AdDU Journey Map — wide image | **16 : 10** (landscape) |
| `assets/journey-2.svg` | AdDU Journey Map — portrait | **9 : 16** (portrait) |
| `assets/journey-3.svg` | AdDU Journey Map — lower-right | **4 : 5** (landscape-ish) |
| `assets/story-1.svg` | Conversion Story — wide feature | **21 : 9** (very wide) |
| `assets/story-2.svg` | Conversion Story — mid-column inset | **4 : 3** |
| `assets/story-3.svg` | Conversion Story — duo (left) | **4 : 5** |
| `assets/story-4.svg` | Conversion Story — duo (right) | **4 : 5** |
| `assets/passion-roadmap.svg` | Passion Plan — Road Map | **4 : 5** |

**Easiest path:** rename each photo to the same filename as the placeholder (e.g. `home-portrait.jpg`) and update the matching `<img src="...">` line in `index.html`. Or simply convert your photo to `.svg`-compatible and reuse the same filename to skip editing the HTML.

---

## Features

- Editorial magazine layout with columns, drop-cap, pull quotes, and a "The Becoming" masthead.
- AdDU-inspired palette: deep navy, warm cream, and a soft gold accent.
- Reveal-on-scroll animations (Intersection Observer) with a gentle parallax on feature images.
- Animated scroll progress bar, subtle portrait tilt on hover, and a right-hand dot navigation.
- Keyboard navigation: press **J / K** (or Alt + ?/?) to step through sections.
- Fully responsive — column layout collapses to a single, readable flow on mobile.
- Respects `prefers-reduced-motion` for accessibility.

---

## Project structure

```
.
??? index.html        # All content lives here
??? styles.css        # Design system & motion
??? main.js           # Scroll, reveal, parallax, nav
??? assets/           # SVG placeholders — drop your photos in
??? README.md
```

---

## Credits

- Typefaces: [Fraunces](https://fonts.google.com/specimen/Fraunces), [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
- Written words and story: **Kenneth Jay Lamadora** — Ateneo de Davao University.

> *Ad Majorem Dei Gloriam.*
