# New project entry

Create a new project entry in `src/content/projects/`.

1. Ask for the project name and GitHub URL if not provided in the arguments.
2. If a GitHub URL is provided, use the `gh` CLI to fetch the repo description, languages, and README to write an accurate description and stack.
3. Generate a slug from the project name (lowercase, hyphens).
4. Create `src/content/projects/<slug>.md` with this frontmatter:

```yaml
---
name: "<name>"
description: "<one sentence — what it does and why>"
stack: [<languages/tools from repo>]
githubUrl: "<url>"
featured: false
status: shipped
order: 0
---
```

5. Ask the user: should this be `featured: true` (shown on home page)?
6. Tell the user the file path and what to update.
