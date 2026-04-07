# juanpalopez.github.io

Personal website and devlog for Juan Lopez. Built with Astro, deployed to GitHub Pages.

## Stack

- **Framework:** Astro 6, vanilla (no React/Vue/Svelte)
- **Package manager:** pnpm
- **Styling:** Plain CSS custom properties — no Tailwind, no CSS framework
- **Fonts:** `@fontsource/inter` + `@fontsource/jetbrains-mono` (self-hosted, no CDN)
- **Testing:** Playwright (E2E only)
- **Deployment:** GitHub Pages via GitHub Actions

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # production build
pnpm preview      # preview built output
pnpm test         # run Playwright E2E tests (requires build first)
pnpm test:ui      # Playwright UI mode
```

## Project structure

```
src/
  components/     # Nav.astro, Footer.astro
  config/
    site.ts       # SITE constants — email, github, linkedin (single source of truth)
  content/
    writing/      # devlog posts (.md) — schema: title, date, tags[], draft
    projects/     # project entries (.md) — schema: name, description, stack[], githubUrl, liveUrl, featured, status
    now/          # single current.md — what Juan is currently building
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    projects.astro
    writing/
      index.astro
      [slug].astro
  styles/
    global.css    # CSS tokens, reset, base styles
.claude/
  plans/          # UX, architecture, and implementation planning docs
  commands/       # custom Claude Code slash commands
```

## Key conventions

- **No JS unless necessary.** CSS handles animations (cursor blink, scroll hint). JS only for: typewriter effect in hero, IntersectionObserver for scroll-fade, mobile nav if added.
- **`SITE` constant for all contact info.** Never hardcode email/github/linkedin — import from `src/config/site.ts`.
- **Content collections for all content.** Writing posts and projects are Markdown files with Zod-validated frontmatter. Do not hardcode content in `.astro` files.
- **`now/current.md` is a single file.** The "currently building" section on the home page reads only the first entry. Update this file when Juan switches focus.
- **Dark only.** No light mode. `--bg: #0d0d0d`, accent `--accent: #4ade80`.
- **720px max-width single column.** All pages. No sidebars.
- **Semantic HTML.** `nav`, `main`, `article`, `header`, `footer`. Section labels that look like headings must be actual `h2` elements.
- **Accessibility.** Custom focus ring (`2px solid var(--accent), 2px offset`), skip-to-content link, `prefers-reduced-motion` respected everywhere, `.sr-only` on icon-only links.

## Design reference

Full UX spec (colors, typography, wireframes, component specs): `.claude/plans/UX_DESIGN.md`

## Content schema quick reference

**Writing post frontmatter:**
```yaml
title: string
date: YYYY-MM-DD
tags: [string]
draft: boolean  # true = hidden from index, route still exists
```

**Project frontmatter:**
```yaml
name: string
description: string          # one sentence for home page
longDescription: string      # optional, 2-3 sentences for /projects page
stack: [string]
githubUrl: string            # omit field entirely if none (do not set to "")
liveUrl: string              # omit field entirely if none
featured: boolean            # true = appears on home page
status: shipped | in-progress | archived
order: number                # sort order on /projects page
```

## Phase 2 backlog

RSS feed, newsletter, /uses page, project tag filter, light mode, search, OG images, comments (giscus).
Do not implement these until the trigger conditions in `.claude/plans/UX_DESIGN.md` §9 are met.
