# CHALLENGE · HeroSplitMedia (variant `split-media`)

## Step 0 — Start the clock ⏱️ (mandatory)

> ⚠️ **The challenge is done on your own fork.** **Your first commit** (`⏱️ START`) marks the start
> of the clock. Without that initial commit in your history, the submission is **not valid**.

Before writing any code, and **in this order**:

```bash
# 1. Fork + clone YOUR fork, then:
git config user.name  "Your Name"   # required BEFORE recording the start
git config user.email "you@email.com"
npm install
npm run challenge:start              # creates the "⏱️ START" commit (also done by `npm run dev`)
```

> The start commit is only created if git is already configured. Verify it was recorded with
> `git log --oneline` (you should see the `⏱️ START` commit).

---

## Goal

Replicate the **`HeroSplitMedia`** component in its **`split-media`** variant, as faithfully as
possible to the Figma design (see **[DESIGN.md](./DESIGN.md)**).

It's a two-column banner: on one side an **image group** decorated with **four quarter-circles** at
the corners; on the other, the **content** (badge + title + description). A **logo** appears at the
top right on desktop.

## Scope

- **Only** the `split-media` variant (no other is needed).
- **Mandatory:** the **desktop** view, faithful to the design.
- **Optional (earns extra points):** the **`1024px` breakpoint**. It's not mobile nor a stacked
  layout: it's the **same row layout, more compact** (reduced sizes and spacing). It's already
  defined in Figma; if you do it, it counts — but it's not a requirement to submit.
- Sample data (title, description, category, image): define it yourself as props/variables.

## Requirements

- [ ] Built in **Vue 3** with **Tailwind CSS** (mandatory).
- [ ] **Image group** with the **4 quarter-circles**:
  - Top-right and bottom-left → **green**, **behind** the image.
  - Top-left → **green**, **in front of** the image.
  - **Bottom-right → black**, **in front of** the image.
- [ ] **Logo** at the top right (visible on desktop).
- [ ] Category **badge** + **title** + **description**.
- [ ] **Desktop:** content in a row (image + text) with the logo at the top right.
- [ ] Typography: title with **Bricolage Grotesque**, body with **Manrope** (already loaded).

> ↔️ *Optional (extra points):* the **`1024px`** breakpoint — same row layout, more compact (not stacked).

## Freedom (this is what's evaluated 👀)

You decide:
- The **folder structure** and how many **components** you split it into.
- The component's **props / variables**.
- Whether you define **design tokens** in `tailwind.config.js` (colors, typography, spacing) or use
  direct values. *Defining tokens is optional but we value it.*

## Acceptance checklist

- [ ] It looks faithful to the Figma design on desktop.
- [ ] The 4 shapes are well positioned and in the correct layer order (black in front, bottom right).
- [ ] The code is readable and well organized.
- [ ] *(Optional)* The `1024px` breakpoint (compact desktop) looks clean.

## Bonus (optional, if you have time to spare)

- ♿ Accessibility (image alt text, heading hierarchy, contrast).
- ✨ Hover states / transitions.
- ↔️ An `align` prop to mirror the layout (image on the left / right).

---

## Final step — Submit ✅

```bash
npm run challenge:submit   # records the submission
npm run challenge:time     # shows you the total time
```

Then share the repo (including the `.git` folder). Thanks! 🦊
