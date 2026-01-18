---
title: "Testing Automatic Deployment"
date: "2026-01-18"
category: "Updates"
author: "DARTS Team"
excerpt: "This is a test post to verify that the automatic deployment pipeline works correctly."
---

# Testing Automatic Deployment

This post was created to test the new CI/CD pipeline. If you can read this, it means:

✅ The GitHub Actions workflow triggered successfully  
✅ The content indices were generated automatically  
✅ Vite built the project correctly  
✅ The site was deployed to the `gh-pages` branch  

## How it works

1. We push changes to the `main` branch
2. GitHub Actions detects the push
3. The workflow runs `npm run generate-indices` to create the JSON files
4. Then it builds the project with Vite
5. Finally, it publishes everything to `gh-pages`

Pretty cool, right? 🚀
