# Implementation Plan

This document captures the plan for building out the Lake Constance family
travel guide, the decisions behind it, and what's done vs. what's optional next.

## 1. Objective

Deliver a fast, accessible, framework-free static website that helps families
(with kids ~10) plan an early-July trip to Lake Constance, covering things to do,
food & entertainment, and one-day explorations — ready to host on Cloudflare
Pages.

## 2. Constraints & principles

- **Static only** — HTML/CSS/vanilla JS, no framework, no build step.
- **Cloudflare Pages target** — clean folder URLs, root-absolute asset paths,
  a `404.html`.
- **Accessibility & responsiveness** — semantic markup, keyboard nav, light/dark,
  mobile-first layout.
- **Maintainable by hand** — a single shared stylesheet and a small reusable set
  of components (cards, badges, hero, timeline) so new content is copy/adapt.
- **Honest content** — clearly unofficial; flag that hours/prices/dates change.

## 3. Information architecture

```
Home (/)
├── Things to Do (/things-to-do/)
│     ├── Family attractions (kids ~10)
│     ├── Water & outdoors
│     ├── Towns & history
│     └── Rainy-day plan B
├── Food & Fun (/food-and-fun/)
│     ├── Local dishes
│     ├── Where to eat with kids
│     └── Evening & entertainment
├── Day Trips (/day-trips/)
│     └── 5 one-day explorations with sample timetables
├── Plan Your Trip (/plan-your-trip/)
│     ├── Weather & what to expect
│     ├── Packing
│     ├── Getting around
│     ├── Where to base
│     └── Sample 7-day plan
└── About (/about/)
```

A **badge system** runs across content pages to make scanning easy:

- 🧒 Kid favourite / easy with kids
- ☔ Good if it rains (indoors)
- ☀️ Best in summer / early July
- 🎟️ Free or low cost

## 4. Phased plan

### Phase 0 — Foundations ✅
- Confirm hosting model (Cloudflare Pages, static).
- Define design tokens (colours, spacing, radius) and a component kit in one
  stylesheet.
- Build shared header/nav (sticky, responsive, mobile toggle) and footer.
- Add progressive-enhancement JS (mobile nav, active-link, footer year).

### Phase 1 — Documentation ✅
- `README.md` (overview, structure, run & deploy instructions).
- `docs/IMPLEMENTATION-PLAN.md` (this file).
- `docs/DESIGN.md` and `docs/CONTENT.md`.
- About page describing purpose, audience and disclaimer.

### Phase 2 — Core content pages ✅
- Home: hero, value pillars, six top highlights, early-July rationale.
- Things to Do: categorised attractions with badges.
- Food & Fun: regional dishes, family dining formats, entertainment.
- Day Trips: five itineraries with hour-by-hour sample timings.
- Plan Your Trip: weather table, packing, transport, bases, sample week.
- 404 page.

### Phase 3 — Polish & QA ✅ (initial pass)
- Cross-link pages; consistent nav/footer.
- Accessibility: skip link, focus styles, ARIA on nav toggle, alt/aria-hidden
  on decorative SVGs, reduced-motion support.
- Responsive checks for mobile/desktop layouts.

### Phase 4 — Optional enhancements (future)
- Real photography/illustrations (currently emoji icons keep it lightweight and
  dependency-free).
- A simple interactive map of the lake with attraction pins.
- Per-attraction detail pages with addresses, official links and prices.
- Multi-language (German/English) toggle.
- Light analytics (e.g. Cloudflare Web Analytics) and Open Graph/social cards.
- Content review against official tourist-board sources before each season.

## 5. Risks & mitigations

| Risk | Mitigation |
| --- | --- |
| Details (hours, prices, dates) go stale | Clear "unofficial, confirm before you go" notices; no hard prices baked in |
| Weather variability in July | Rainy-day options and a flexible sample itinerary |
| Cross-border friction (CH/AT) | Dedicated transport/money notes (vignettes, CHF) |
| Scope creep into a CMS/framework | Hold the line on static-only; components are copy/adapt by design |

## 6. Definition of done (initial release)

- [x] All planned pages exist, cross-linked, with consistent nav/footer.
- [x] Responsive and light/dark friendly.
- [x] Documented (README + docs) and deployable to Cloudflare Pages as-is.
- [x] No external runtime dependencies or build step.
