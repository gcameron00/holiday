# Lake Constance — Family Travel Guide 🏞️

A small, fast, framework-free website for tourists (especially **families with
children around 10**) heading to **Lake Constance / Bodensee** in **early July**.

It covers things to do, food and entertainment, one-day explorations, and
practical planning notes for the German / Austrian / Swiss lake region.

The site is built as **static HTML, CSS and vanilla JavaScript** with no build
step, and is designed to be hosted on **Cloudflare Pages**.

---

## Contents

- [Goals](#goals)
- [Site map](#site-map)
- [Tech & design](#tech--design)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Deploying to Cloudflare Pages](#deploying-to-cloudflare-pages)
- [Documentation](#documentation)
- [Contributing & accuracy](#contributing--accuracy)

---

## Goals

From the original brief:

> Create a website for tourists heading to Lake Constance in early July. Focus
> on things to do, including for children aged around 10. Food and entertainment
> options welcome, plus one-day explorations. Hosted on Cloudflare Pages, mostly
> static HTML/JS/CSS, no framework.

Translated into concrete goals:

1. **Family-first content** — every page flags what works for kids ~10, what
   suits a rainy day, what's best in summer, and what's free/low-cost.
2. **Seasonal focus** — written for **early July**: warm lake swimming, long
   daylight, gardens in bloom, festival season starting.
3. **Fast & cheap to host** — no framework, no build, no server. Static files
   that Cloudflare Pages serves directly.
4. **Accessible & responsive** — semantic HTML, keyboard-friendly nav,
   light/dark support, mobile layout.

## Site map

| Page | Path | Purpose |
| --- | --- | --- |
| Home | `/` | Overview, top highlights, why early July |
| Things to Do | `/things-to-do/` | Attractions by category, kid-focused |
| Food & Fun | `/food-and-fun/` | Local dishes, family dining, entertainment |
| Day Trips | `/day-trips/` | Five one-day explorations with timetables |
| Plan Your Trip | `/plan-your-trip/` | Weather, packing, transport, sample week |
| About | `/about/` | What the site is, who it's for, disclaimer |
| 404 | `/404.html` | Friendly not-found page |

## Tech & design

- **HTML5**, hand-written and semantic.
- **CSS** in one stylesheet (`assets/css/styles.css`) using custom properties
  (design tokens) and a small component set (cards, badges, hero, timeline).
  Light/dark via `prefers-color-scheme`; responsive without a framework.
- **JavaScript** — one tiny progressive-enhancement file
  (`assets/js/main.js`): mobile nav toggle, "current page" highlighting, and the
  footer year. The site is fully usable with JS disabled.
- **No dependencies, no build tooling** — what's in the repo is what ships.

See [`docs/DESIGN.md`](docs/DESIGN.md) for the design system and conventions.

## Project structure

```
.
├── index.html              # Home
├── 404.html                # Not-found page
├── about/index.html        # About this guide
├── things-to-do/index.html # Attractions
├── food-and-fun/index.html # Food & entertainment
├── day-trips/index.html    # One-day explorations
├── plan-your-trip/index.html # Practical planning
├── assets/
│   ├── css/styles.css      # All styles (design tokens + components)
│   ├── js/main.js          # Progressive enhancements
│   └── favicon.svg         # Site icon
├── docs/
│   ├── IMPLEMENTATION-PLAN.md
│   ├── DESIGN.md
│   └── CONTENT.md
└── README.md
```

Each section is a folder with an `index.html` so URLs are clean (e.g.
`/day-trips/`) without any server configuration.

## Local development

No tooling required. Because the pages use **root-absolute** asset paths
(`/assets/...`) and clean folder URLs, serve the folder over HTTP rather than
opening files directly:

```bash
# Python (built in on most systems)
python3 -m http.server 8080

# …or Node
npx serve .
```

Then open <http://localhost:8080/>.

> Opening `index.html` straight from disk (`file://`) mostly works, but
> root-absolute links like `/things-to-do/` resolve against the filesystem
> root, so use a local server for accurate navigation.

## Deploying to Cloudflare Pages

This is a static site, so deployment is simple:

1. Push to GitHub (this repo).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to
   Git**, and select this repository.
3. Build settings:
   - **Framework preset:** *None*
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (the repository root)
4. Deploy. Cloudflare serves `index.html`, the per-folder `index.html` files,
   and uses `404.html` for unknown paths automatically.

No environment variables or build step are needed.

## Documentation

- [`docs/IMPLEMENTATION-PLAN.md`](docs/IMPLEMENTATION-PLAN.md) — the phased build
  plan and status.
- [`docs/DESIGN.md`](docs/DESIGN.md) — design tokens, components and page
  patterns.
- [`docs/CONTENT.md`](docs/CONTENT.md) — content sources, the badge system and
  how to add or edit an attraction.

## Contributing & accuracy

This is an **independent, unofficial** guide intended as a planning aid.
Opening hours, prices, ferry timetables and festival dates change year to year —
always confirm against official sources before travelling.

To add or update content, edit the relevant `index.html` and follow the patterns
documented in [`docs/CONTENT.md`](docs/CONTENT.md) and
[`docs/DESIGN.md`](docs/DESIGN.md).
