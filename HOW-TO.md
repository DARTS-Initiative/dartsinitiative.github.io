# How to Publish Content

This guide explains how to add new blog posts and projects to the website, ensuring all required metadata is included.

## 1. Adding a New Blog Post

To create a new blog post, add a new Markdown file (`.md`) in the `content/posts/` directory.

### Metadata (Frontmatter) required:

Every post **must** include the following frontmatter at the top of the file:

```yaml
---
title: "Your Post Title"
date: "YYYY-MM-DD"
category: "News" # or "Updates", "Technology", etc.
author: "Author Name"
excerpt: "A short summary of the post to be displayed in the list."
---
```

### Example

Create `content/posts/my-new-post.md`:

```markdown
---
title: "Future of Swarms"
date: "2025-02-15"
category: "Technology"
author: "Jane Doe"
excerpt: "Exploring the next generation of decentralized drone networks."
---

# Future of Swarms

Write your content here using standard Markdown...
```

---

## 2. Adding a New Project

To add a new project to the portfolio, create a new Markdown file (`.md`) in the `content/projects/` directory.

### Metadata (Frontmatter) required:

Every project **must** include the following frontmatter:

```yaml
---
title: "Project Name"
logo: "/images/your-logo.png" # Path to the project image/logo (store in public/images)
excerpt: "Brief description of the project."
---
```

### Example

Create `content/projects/autonomous-rover.md`:

```markdown
---
title: "Autonomous Rover"
logo: "/images/rover-icon.png"
excerpt: "A ground-based autonomous unit for terrain mapping."
---

# Autonomous Rover

Describe the project details, features, and status here...
```
