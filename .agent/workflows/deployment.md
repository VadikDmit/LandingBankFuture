---
description: How to ensure every change is deployed to Vercel
---

# Website Deployment Workflow

To ensure that every change made to the website is automatically reflected on Vercel, follow these steps:

1. **Perform Changes**: Edit HTML, CSS, JS or assets as needed.
2. **Review Locally**: Open the local files in a browser to verify the changes.
3. **Stage and Commit**:
   ```bash
   git add .
   git commit -m "Describe your changes"
   ```
// turbo-all
4. **Push to GitHub**:
   ```bash
   git push origin main
   ```

**Important**: 
- Pushing to the `main` branch automatically triggers a Vercel deployment.
- Always perform a `git push` after finalizing any set of changes to keep the live site in sync with the repository. 
