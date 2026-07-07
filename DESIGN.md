# DESIGN · HeroSplitMedia (`split-media`)

## 🔗 Figma (source of truth)

**[Open the component in Figma →](https://www.figma.com/design/jjMI3OE8FGzV68pSnuICwp/Frontend---Challenge?node-id=1-114)**

> The link is shared in **read-only** mode. You can select layers and inspect **measurements, colors,
> typography and spacing**, and **export the assets** — all of this works with a free Figma account
> (even without an account). Full **Dev Mode** requires a paid seat, but **you don't need it** for
> the challenge. If for some reason you can't access it, the specs below + the repo assets give you
> everything you need.

---

## 📐 Key specs

A two-column layout on a light gray background, with generous padding: always in a **row**
(image + text), with the logo at the top right. The **1024px** breakpoint doesn't change the layout:
it's the same design **more compact** (reduced sizes and spacing), not a stacked layout.

### Colors

| Use | Hex |
| --- | --- |
| Banner background | `#F5F5F5` |
| Title | `#121212` |
| Description | `#494B4D` |
| Quarter-circles (green) | `#00C266` |
| Bottom-right quarter | **black** (`#000000`) |

### Typography

| Element | Font | Size / line-height |
| --- | --- | --- |
| Title (desktop) | Bricolage Grotesque | 56 / 72 px |
| Title (`1024px`, compact) | Bricolage Grotesque | ~28 / 34 px |
| Description | Manrope | 16 / 24 px |

### Image and shapes

- **Image:** rectangular, ~**508×384**, rounded corners (~16–20px).
- **4 quarter-circles** at the corners of the image group:
  - **Top-right** and **bottom-left** → green, **behind** the image (larger, ~168px).
  - **Top-left** → green, **in front of** the image (~112px).
  - **Bottom-right** → **black**, **in front of** the image (~112px).
- The group (image + shape overhangs) stays **contained within the banner's padding**.

### Responsive

- **Main view (mandatory):** desktop — row (image on one side, content on the other) + logo at the
  top right.
- **`1024px` breakpoint (optional, earns points):** the **same row layout, more compact** — reduced
  typography, image and spacing sizes. It does **not** stack into a column.

---

## 🎨 Assets in the repo

- `public/assets/images/hero-split-media.svg` — placeholder 508×384 (replaceable with your export).
- `public/assets/logos/health-logo.svg` — vertical logo (40×40 on desktop).
- Fonts loaded via `@fontsource` (`src/main.js`): **Bricolage Grotesque**, **Manrope**.

> The values above are a reference; the final pixel-perfect check is taken from **Figma**.
