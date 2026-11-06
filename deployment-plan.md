# Free deployment plan — GitHub + Vercel

## Recommendation
Use **GitHub Free** for source control and **Vercel Hobby** for hosting this public, personal portfolio. This project is a standard Next.js App Router site with local images and no server database, so it does not need a paid service to publish.

## Exact cost

| Item | Cost | Notes |
|---|---:|---|
| GitHub Free | **$0/month** | Public or private repository; unlimited collaborators on public repositories subject to GitHub terms. |
| Vercel Hobby | **$0/month** | Suitable for personal, non-commercial projects and includes HTTPS plus a `vercel.app` domain. |
| Custom domain | **$0 required** | Use the assigned Vercel URL. A custom domain is optional and would be a separate registrar cost. |
| Email/booking service | **$0 currently** | The project uses `mailto:` and existing placeholder appointment data; no third-party service is configured. |
| **Total required cost** | **$0/month** | Assumes personal/non-commercial use and usage remains within free-plan limits. |

Vercel plan terms and limits can change. If the site becomes a commercial service, receives unusually high traffic, or needs paid team features, re-check the current Vercel pricing and terms before upgrading.

## Before publishing

1. Replace every `TODO` contact placeholder in `src/app/data.ts`, especially the phone number, appointment URL, office address, and social profile URLs.
2. Confirm that the portrait images and publication links are approved for public use.
3. Run `npm install`, `npm run lint`, and `npm run build` locally.
4. Confirm that `http://localhost:3000/manus-routes.json` returns the route JSON rather than an HTML fallback.

## Publish to GitHub

From the project folder in PowerShell:

```powershell
git init
git add .
git commit -m "Finalize futuristic pediatric cardiology portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If a remote repository already exists, skip `git init` and `git remote add origin`, then use `git add .`, `git commit`, and `git push`.

Do not commit secrets. This repository currently has no required environment variables.

## Publish to Vercel

1. Sign in at `https://vercel.com` with the GitHub account that owns the repository.
2. Choose **Add New → Project**.
3. Import the portfolio repository.
4. Keep the detected framework as **Next.js**.
5. Keep the project root as the repository root.
6. Use the detected defaults: install `npm install` and build `npm run build`.
7. Do not add environment variables for the current version.
8. Select **Deploy**.
9. Open the generated `https://<project-name>.vercel.app` URL.
10. Verify the home page, portrait images, navigation anchors, publication links, mobile menu, and `/manus-routes.json`.

## Ongoing updates

```powershell
git add .
git commit -m "Update portfolio content"
git push
```

Vercel will create a new deployment automatically for each push to `main`.

## Free-plan safety notes

- Keep the site personal/non-commercial if using Vercel Hobby.
- No analytics, forms, database, or paid API is required by the current build.
- If a contact form, appointment booking, analytics, or CMS is added later, price that service separately before enabling it.
- For a custom domain, buy the domain from a registrar and add it in Vercel; the domain registration cost is not included in the $0 estimate.
