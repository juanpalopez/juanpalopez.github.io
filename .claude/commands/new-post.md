# New devlog post

Create a new writing post in `src/content/writing/`.

1. Ask for the post title if not provided in the arguments.
2. Generate a slug from the title (lowercase, hyphens, no special chars).
3. Create `src/content/writing/<slug>.md` with this frontmatter:

```yaml
---
title: "<title>"
date: <today's date as YYYY-MM-DD>
tags: []
draft: true
---
```

4. Leave the body empty below the frontmatter — the user will write it.
5. Tell the user the file path and remind them to set `draft: false` when ready to publish.
