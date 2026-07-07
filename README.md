# Invisible Geeks · Frontend Challenge

Hi! 👋 Thanks for your interest in joining **Invisible Geeks**. This is a short, focused technical
test to get a sense of how you work on the frontend.

The goal is to **replicate a UI component from a Figma design**, using our main stack:
**Vue 3 + Tailwind CSS**.

---

## 🎯 The challenge

Rebuild the **`HeroSplitMedia`** component (variant **`split-media`**) as faithfully as possible to
the Figma design: a banner with an image surrounded by four quarter-circles at the corners, a title,
a description, a category badge and a logo.

- ⏱️ **Estimated time:** ~1 hour.
- 🖥️ **Focus:** the **desktop** view. The **1024px** breakpoint (same layout, more compact) is
  **optional** and earns extra points.
- 🧱 **You define the architecture:** folder structure, components, props and design tokens are up to
  you. We want to see *how you organize the code*, not just the visual result.

👉 The detailed brief is in **[CHALLENGE.md](./CHALLENGE.md)**.
👉 The design and specs are in **[DESIGN.md](./DESIGN.md)**.

---

## 🚀 Getting started

Requirements: **Node 20+** (there's an `.nvmrc`).

> ⚠️ **Mandatory rule (this is how the challenge is validated):** the challenge is done on your **own
> fork**. **Your first commit** marks the start of the clock, and it stays recorded in your git
> history. Without that initial commit we can't measure the time and the submission is **not valid**.

**Exact order:**

```bash
# 1. Fork this repo to your account and clone YOUR fork
git clone <url-of-your-fork>
cd frontend-challenge

# 2. Configure git BEFORE anything else (required to record the start)
git config user.name  "Your Name"
git config user.email "you@email.com"

# 3. Install and run — the first `npm run dev` creates your start commit (⏱️ START)
npm install
npm run dev
```

This launches the project at `http://localhost:5173`. Edit `src/App.vue` (or create whatever
components you want) to build your solution.

> ⏱️ The start commit (`⏱️ START`) is created **automatically** on your first `npm run dev`,
> **as long as git is already configured** (step 2). If you prefer, run `npm run challenge:start` by
> hand.

---

## ⏱️ How we measure time

Time is tracked with **git commits**: the first one marks the start and the last one the submission.

| Command | What it does |
| --- | --- |
| `npm run challenge:start` | Records the **start** (commit `⏱️ START`). *Runs on its own the first time you `npm run dev`.* |
| `npm run challenge:submit` | Records the **submission** (commit `✅ SUBMIT`). Run it when you finish. |
| `npm run challenge:time` | Shows the **total time** (START → SUBMIT). |

Before you begin, make sure git is configured:

```bash
git config user.name  "Your Name"
git config user.email "you@email.com"
```

You can (and we recommend you) make intermediate commits while you work. It's fine if you go a bit
over the hour: it's not a race, but we do want a real reference of the time.

---

## 🎨 Assets

Everything you need is already in the repo (`public/assets/`), so you can work offline:

- `assets/images/hero-split-media.svg` — hero image (placeholder 508×384, replaceable with your
  Figma export).
- `assets/logos/health-logo.svg` — vertical logo.
- **Bricolage Grotesque** (titles) and **Manrope** (body) fonts, already loaded via `@fontsource`.

---

## 📦 Submission

1. When you finish, run `npm run challenge:submit`.
2. Share your solution however you prefer: your own repository (GitHub/GitLab), a branch, or a `.zip`
   **including the `.git` folder** (so we can read the times with `npm run challenge:time`).

---

## ✅ What we evaluate

- **Fidelity to the design** (reasonably pixel-perfect against Figma).
- **Command of Tailwind** and CSS.
- **Architecture and organization** of the code (components, props, names, tokens).
- **Semantic HTML** and clean Vue code.
- *(Extra)* The **1024px breakpoint** (compact desktop) well resolved.

We don't evaluate whether you use any particular library or "tricks": we want to see how you work.

Good luck! 🦊
