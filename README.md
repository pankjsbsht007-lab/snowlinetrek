# Snowline Trekkers — React Website

Recreation of the Snowline Trekkers WordPress design, rebuilt in React (Vite + Tailwind CSS v4 + React Router) with a premium white/blue theme.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

- `src/data/treks.js` — the 12 official treks (source: your supplied trek-information file)
- `src/data/services.js`, `faq.js` — pulled from the live snowlinetrekkers.com content
- `src/data/team.js` — the two provided team photos (Manager, Expedition Guide)
- `src/pages/` — Home, Treks, TrekDetails (`/treks/:slug`), Services, About, Contact
- `src/components/` — reusable UI pieces

## Redesign pass (v2)

- Trek cards, the trek spec cards, and the "Why Choose Us" section were redesigned
  for stronger visual hierarchy (see `TrekCard.jsx`, `TrekStats.jsx`, `Home.jsx`).
- Difficulty now has consistent accent colors across the site — green/amber/red —
  defined once in `src/utils/difficultyTone.js`.
- Typography switched to Fraunces (display) + Inter (body) for a more premium,
  less generic pairing.
- Added a lightweight scroll-reveal animation (`components/Reveal.jsx`, no new
  dependency) used across Home, Treks, TrekDetails, About, and Services.
- Added a real "What Our Travellers Say" Google Reviews section
  (`src/data/reviews.js`, `ReviewsSection.jsx`, `ReviewCard.jsx`) using the three
  reviews supplied via screenshot, transcribed verbatim. No verified Google
  Business Profile URL was supplied, so "View All Reviews on Google" links to a
  Google Maps search for the business rather than a guessed profile link — swap
  in the real profile URL in `reviews.js` (`googleReviewsSearchUrl`) once you have it.

## Known gaps — nothing here was invented, so these need your input:

1. **Logo** — no logo file was in the asset zip. Navbar/Footer currently use a text
   wordmark + generic mountain icon. Drop a real logo into `src/assets/` and swap it
   into `Navbar.jsx` / `Footer.jsx`.
2. **Hero & About photography** — no dedicated hero or About-page photos were supplied,
   only the 12 trek images + 2 team photos. Trek images are currently reused as
   stand-ins on the homepage hero, About page, and CTA banners.
3. **Day-by-day itineraries** — none were supplied for any trek. `Itinerary.jsx` shows
   an honest "being finalized" placeholder. Add an `itinerary: [{ day, title, detail }]`
   array to a trek in `treks.js` and it renders automatically as a timeline.
4. **Google Reviews** — no real reviews were supplied, so this section was left out
   rather than faked. When you have real reviews, add `src/data/reviews.js` and a
   `ReviewsSection` component, and slot it into `Home.jsx`.
5. **Blog and promo video** — no content/assets were supplied for either, so both
   sections are omitted for now.
6. **Contact form** — front-end only (validated, no backend). Wire `ContactForm.jsx`'s
   `handleSubmit` up to a form service or API when ready.
7. **Gupt Khal Expedition / Valley of Flowers** — featured on the homepage as text
   cards (per your source site), but have no trek images or detail pages yet since
   none were supplied.
