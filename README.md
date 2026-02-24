# Naseh Faraj Portfolio (Next.js + Static Export)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure base path (GitHub Pages):
   - For a repo site (https://username.github.io/repo-name), set:
     ```bash
     NEXT_PUBLIC_BASE_PATH=/repo-name
     ```
   - For a user/organization site (https://username.github.io), set:
     ```bash
     NEXT_PUBLIC_BASE_PATH=
     ```

## Local Development
```bash
npm run dev
```

To simulate GitHub Pages paths locally:
```bash
NEXT_PUBLIC_BASE_PATH=/repo-name npm run dev
```

## Build (Static Export)
```bash
npm run build
```
The static output is generated in `out/`.

## GitHub Pages Deployment
This repo includes a workflow at `.github/workflows/deploy.yml` that builds and deploys the `out/` folder.

1. In your GitHub repository, go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Set the base path for the workflow:
   - Go to **Settings → Secrets and variables → Actions → Variables**.
   - Create a variable named `NEXT_PUBLIC_BASE_PATH`.
   - For repo pages: `/repo-name`.
   - For user pages: leave it empty.

Push to `main` to trigger deployment.
