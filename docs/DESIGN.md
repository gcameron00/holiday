# Design Notes

The visual system for the site. Everything lives in one stylesheet,
`assets/css/styles.css`, with no preprocessor or framework.

## Principles

- **One stylesheet, design tokens first.** Colours, spacing and radii are CSS
  custom properties on `:root`, with a dark-mode override under
  `@media (prefers-color-scheme: dark)`.
- **Components over pages.** Pages are assembled from a small set of reusable
  blocks. Adding content means copying a block, not writing new CSS.
- **Progressive enhancement.** The site works fully without JavaScript; JS only
  adds the mobile menu, active-link highlighting and the footer year.

## Design tokens (selected)

| Token | Light | Meaning |
| --- | --- | --- |
| `--color-accent` | `#0d7490` | Lake teal — primary accent |
| `--color-sun` | `#f59e0b` | Summer/CTA accent |
| `--color-bg` / `--color-surface` | white / `#f8fafc` | Backgrounds |
| `--color-text` / `--color-muted` | slate | Text |
| `--maxw` | `1080px` | Content max width |
| `--radius` | `14px` | Card/box radius |

Dark mode remaps the same token names, so components need no per-mode code.

## Layout primitives

- `.container` — centered max-width wrapper with side padding.
- `.section`, `.section--surface`, `.section--tight` — vertical rhythm and
  alternating background bands.
- `.section__head` + `.eyebrow` — standard section heading block.

## Components

- **Header / nav** — `.site-header`, `.nav`, `.brand`, `.nav__links`,
  `.nav__toggle`. Sticky, blurred background; collapses to a toggle under 760px.
- **Hero** — `.hero` (home) and `.page-hero` (interior pages). The home hero has
  a CSS wave clip at the bottom.
- **Buttons** — `.btn` with `--primary`, `--ghost`, `--outline` variants.
- **Cards** — `.card` with optional `.card__icon`, used inside `.grid`
  (auto-fill) or `.feature` (auto-fit) layouts.
- **Badges** — `.badge` with `--kids`, `--rain`, `--july`, `--free`. See the
  badge legend in `CONTENT.md`.
- **Chips** — `.chip` for small inline meta (used in the hero).
- **Callouts** — `.callout` for tips/notes (left sun-coloured border).
- **Trips / timeline** — `.trip` + `.timeline` for the day-trip itineraries and
  the sample week.
- **Tables** — `table.info` for practical data (weather, etc.).
- **Prose** — `.prose` for text-heavy pages (About, docs-style content).

## Accessibility

- `.skip-link` to jump to `#main`.
- Visible `:focus-visible` outline using the sun accent.
- Nav toggle uses `aria-expanded` / `aria-controls`; current page gets
  `aria-current="page"` (set in JS).
- Decorative SVGs use `aria-hidden="true"`.
- `prefers-reduced-motion` disables transitions and smooth scroll.

## Conventions

- **Asset paths are root-absolute** (`/assets/...`, `/things-to-do/`) so links
  work from any folder depth. Serve via HTTP locally (see README).
- Header and footer markup is **duplicated** into each page (no templating in a
  no-build static site). When changing nav/footer, update every page — keep them
  identical. `docs/CONTENT.md` lists the files.
- Icons are emoji to avoid image dependencies and keep payloads tiny.
