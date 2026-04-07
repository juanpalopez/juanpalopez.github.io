# juanpalopez.github.io

Personal website and devlog for Juan Lopez — backend developer based in London, UK.

Built with Astro and deployed to GitHub Pages.

## Context

This site serves two purposes:

1. **Portfolio** — a place to list projects and establish a digital presence for recruiters, developers, and curious strangers.
2. **Devlog** — short building-in-public posts documenting what I'm working on, decisions I'm making, and things I'm learning.

Stack: Astro 6 (vanilla, no UI framework), plain CSS custom properties, pnpm, Playwright for E2E testing, GitHub Actions for CI.

## Project structure

```
src/
  components/       # Nav.astro, Footer.astro
  config/
    site.ts         # contact info constants (email, github, linkedin)
  content/
    writing/        # devlog posts (.md)
    projects/       # project entries (.md)
    now/            # current.md — what I'm building right now
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    projects.astro
    writing/
      index.astro
      [slug].astro
  styles/
    global.css      # CSS tokens, reset, base styles
.claude/
  commands/         # custom Claude Code slash commands
  plans/            # UX and design planning docs (gitignored)
tests/
  e2e/              # Playwright tests
.github/
  workflows/
    ci.yml          # build + test on push/PR to main
```

## Development

```bash
pnpm install       # install dependencies
pnpm dev           # start dev server at localhost:4321
```

## Build

```bash
pnpm build         # production build to ./dist/
pnpm preview       # preview the built output locally
```

## Testing

Tests are end-to-end using Playwright (Chromium only). Run against the built output, not the dev server.

```bash
pnpm build         # build first
pnpm test          # run E2E tests
pnpm test:ui       # open Playwright UI mode
```

CI runs automatically on push and pull requests to `main` via `.github/workflows/ci.yml`.

## AI assisted

This project was built with the assistance of [Claude Code](https://claude.com/claude-code). The AI helped with:

- Initial site scaffolding and component structure
- UX and design decisions (see `.claude/plans/UX_DESIGN.md`)
- Writing test cases and debugging failures
- CI workflow setup

All content, decisions, and final code have been reviewed and approved by me. The `.claude/` folder contains project context, planning documents, and custom slash commands used during development.
