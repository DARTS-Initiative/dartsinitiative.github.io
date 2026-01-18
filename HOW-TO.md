# usage Guide & Deployment

This document is the primary reference for creating content, running the project locally, and understanding the automated publishing workflow.

## 1. Local Development

Before publishing, it is recommended to run the site locally to preview your changes.

### Prerequisites
*   Node.js installed.
*   Terminal/Command Prompt.

### Steps
1.  **Install Dependencies** (first time only):
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
3.  **Preview**: Open the URL shown in the terminal (usually `http://localhost:5173`).

---

## 2. creating Content

The site content is driven by **Markdown** files located in the `content/` directory.

### 📝 Adding a Blog Post
1.  Create a new file in `content/posts/`. Name it something valid like `my-new-update.md`.
2.  **Frontmatter is Mandatory**. You must include the following metadata block at the very top of the file:

```yaml
---
title: "The Title of Your Post"
date: "2025-01-18"
category: "technology" # options: news, updates, technology, etc.
author: "Name Surname"
excerpt: "A brief summary that appears on the blog index page."
---
```
3.  Write your content below the `---` using standard Markdown.

### 🚀 Adding a Project
1.  Create a new file in `content/projects/`. Name it unique like `autonomous-swarm.md`.
2.  **Frontmatter is Mandatory**:

```yaml
---
title: "Project Name"
logo: "/images/project_logo.png" # Ensure this image exists in public/images/
excerpt: "Short description for the project card."
---
```

---

## 3. Publishing & Automation

We use **GitHub Actions** to automate the build and deployment process. You do **not** need to manually build the site or drag-and-drop folders.

### The Publishing Workflow
1.  **Push to Main**: When you are happy with your changes (new posts, edits, etc.), commit them and push to the `main` branch.
    ```bash
    git add .
    git commit -m "Added new blog post"
    git push origin main
    ```
2.  **Automatic Trigger**: The GitHub Action (`.github/workflows/deploy.yml`) detects the push and starts a job.

### What Happens Behind the Scenes?
The automation pipeline performs these steps in order:
1.  **Install**: Sets up the environment and installs `npm` packages.
2.  **Generate Indices**: Runs `npm run generate-indices`.
    *   *Why?* This script scans all your `.md` files and creates optimized JSON files (`posts-index.json`, `projects-index.json`).
    *   These indices allow the website to list all posts instantly without downloading every single article at once.
3.  **Build**: Compiles the website into static files (`dist/` folder).
4.  **Deploy**: Uploads the `dist/` folder to the `gh-pages` branch.

### Verification
*   **Wait**: The process usually takes 1-2 minutes.
*   **Check**: Visit the live URL. If changes aren't visible, try a **Hard Refresh** (Ctrl+F5 or Cmd+Shift+R) to clear the browser cache.
*   **Debug**: You can see the progress in the "Actions" tab of the GitHub repository.
