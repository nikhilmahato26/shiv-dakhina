# Shiv Dakhina Ventures — Odisha Divine Veg Tour

A premium spiritual-tourism website built for **Shiv Dakhina Ventures**, Rourkela.
Golden-and-navy luxury aesthetic inspired by Jagannath Temple, Konark Sun Temple
and Odisha heritage architecture, with a heavy focus on the **premium SUV fleet**
and the **Odisha Divine Veg Tour** package.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** (custom navy/gold theme — no Bootstrap / MUI)
- **Framer Motion** — scroll reveal, fade-up, image zoom, floating cards, counters, page transitions
- **Swiper JS** — gallery coverflow + testimonials carousel
- **React Router DOM**, **React Hook Form**, **React Icons**, **Lucide React**

## Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview the build
```

## Project Structure

```
src/
├── assets/        images / fleet / temples / food / logos  (drop local images here)
├── components/    hero · fleet · itinerary · packages · pricing · gallery · testimonials · contact · common
├── data/          site.js · fleet.js · places.js · itinerary.js · content.js  (all editable content)
├── hooks/         useScrolled · useCountUp
├── utils/         motion.js (Framer Motion variants)
├── pages/         Home.jsx
├── App.jsx
└── main.jsx
```

## Editing Content

All copy, pricing, contact details and image URLs live in `src/data/`.
- **Business info / phone / WhatsApp / price** → `src/data/site.js`
- **Fleet vehicles & specs** → `src/data/fleet.js`
- **Itinerary** → `src/data/itinerary.js`
- **Places, food, gallery, testimonials, includes, why-choose-us** → `src/data/content.js` & `places.js`

### Swapping images
Images currently load from Unsplash via the `ux(id)` helper in `site.js`.
To use your own photography, drop files into `src/assets/...`, import them, and
replace the relevant URLs. Big temple + SUV photography is intended throughout.

## Contact
+91 9938136659 · Rourkela, Odisha
