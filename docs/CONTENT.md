# Content Guide

How the content is structured, where it comes from, and how to add or edit it.

## Editorial stance

- **Audience:** families, with a deliberate lean toward **children around 10**.
- **Season:** **early July** — warm lake swimming, long daylight, gardens in
  bloom, festival season starting, but ahead of the mid/late-July school-holiday
  peak.
- **Tone:** warm, practical, concise. Prefer concrete, useful detail over hype.
- **Unofficial & honest:** never promise exact prices or times; always point
  readers to confirm with official sources. This notice lives in the footer, the
  About page and a callout on Plan Your Trip.

## Badge system

Used across content cards so families can scan quickly. Defined in
`assets/css/styles.css` as `.badge--*`.

| Badge | Class | Use for |
| --- | --- | --- |
| 🧒 Kid favourite | `badge--kids` | Strong appeal for ~10-year-olds, or easy with kids |
| ☔ Good if it rains | `badge--rain` | Mostly indoor / weather-proof |
| ☀️ Best in summer | `badge--july` | Seasonal, outdoor, or July-specific |
| 🎟️ Free / low cost | `badge--free` | Free or inexpensive |

Keep badges meaningful — don't put all four on everything.

## Where the content comes from

Attractions and tips are well-known, established Lake Constance destinations
(Mainau, Meersburg, Affenberg Salem, the Pfahlbauten stilt-house museum,
Ravensburger Spieleland, the Rhine Falls, Bregenz/Pfänder, St. Gallen, Säntis,
Lindau, Reichenau, etc.) chosen for family suitability and proximity.

Specific, change-prone facts (exact hours, ticket prices, this year's festival
dates and ferry timetables) are intentionally **not hard-coded**. Verify these
against official tourist-board and operator websites before each season.

## Adding or editing an attraction

Attractions are `.card` blocks inside a `.grid` on the relevant page. To add one,
copy an existing card and edit it:

```html
<article class="card">
  <div class="card__icon">🏰</div>
  <h3>Name of place</h3>
  <p>One or two sentences: what it is and why a family would go.</p>
  <div class="meta">
    <span class="where">Town</span>
    <span class="badge badge--kids">🧒 Kid favourite</span>
  </div>
</article>
```

Guidelines:
- Keep descriptions to ~1–2 sentences.
- Add a `.where` location and only the badges that genuinely apply.
- Match the surrounding tone and length.

## Day-trip itineraries

Day trips use the `.trip` + `.timeline` pattern with a sample hour-by-hour plan.
Times are **illustrative**, assuming a Konstanz/Friedrichshafen start; tell the
reader to adjust. Each ends with a practical **Tip** line.

## Pages and shared markup

Content pages (each is a folder `index.html`):

- `index.html` — Home
- `things-to-do/index.html`
- `food-and-fun/index.html`
- `day-trips/index.html`
- `plan-your-trip/index.html`
- `about/index.html`
- `404.html`

The **header nav and footer are duplicated** in every page (no build step). If
you change a nav link or footer item, update it in **all** of the files above so
they stay identical.
