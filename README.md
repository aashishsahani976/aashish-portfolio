# Aashish Sahani — Creative Portfolio

A responsive Next.js portfolio starter built with the App Router, TypeScript, Tailwind CSS v4, Motion for React, and Lucide icons. It is designed to deploy on Vercel's free Hobby plan.

## What is included

- `/` homepage with hero, selected-work grid, skills, about and contact calls to action
- `/work` full portfolio index
- `/work/[slug]` generated case-study routes driven by typed data
- `/about`, `/resume`, `/contact`
- Shared responsive header/footer, keyboard-accessible mobile menu, reduced-motion support
- Contact form with browser validation and an honest `mailto:` fallback (no pretend server submission)
- SEO metadata, Open Graph defaults, sitemap, robots file and favicon
- Explicit development placeholders instead of fabricated portfolio work

## Requirements

- Node.js 20.9 or newer (Node 22 LTS recommended)
- npm

## Run locally

1. Extract this ZIP.
2. Open the extracted `aashish-portfolio` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open `http://localhost:3000`.

Check the project before deployment:

```bash
npm run typecheck
npm run lint
npm run build
```

## Beginner-friendly AI coding workflow

1. Open this folder in your AI coding editor (for example, an editor that can read and edit a project folder).
2. Ask the assistant to explain one change before making it; avoid asking it to rewrite the entire project for small edits.
3. Make one change at a time, run `npm run typecheck` and `npm run build`, then review the page at mobile and desktop widths.
4. For new projects, add an object to `src/lib/projects.ts`, put real images in `public/images/`, and update the gallery data. Keep the existing `Project` type. Do not remove the `placeholder` marker until real work replaces the sample.

## Replace the placeholders before launch

### 1. Portfolio projects and images

Every current project card is a clearly labelled development placeholder. These are not actual completed client projects. Replace the five sample records in `src/lib/projects.ts` with projects you really created. Update the brief, audience, approach, tools, deliverables, status, alt text and lessons learned. Do not claim client work unless it was commissioned, and only show client assets you have permission to publish.

Place optimized images under `public/images/` (WebP or AVIF recommended). Update the `gallery` model and the card presentation to use those images. Keep useful alt text. Do not use external image URLs as a permanent substitute for your own approved portfolio artwork.

### 2. Contact and Instagram

The email and phone values are the contact details supplied for this portfolio. Verify that they are correct and that you want them public before launch. The Instagram URL is configured as `https://www.instagram.com/_aashish_sahani/`, based on the provided handle; verify the destination and update `src/lib/profile.ts` if needed.

### 3. Résumé PDF

No verified résumé PDF is bundled. When ready, put the final PDF at `public/resume.pdf`, then change `resumeAvailable: false` to `resumeAvailable: true` in `src/lib/profile.ts`. The download control is intentionally absent until then.

### 4. Site URL, sitemap and canonical metadata

Before launch, set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS URL in Vercel → Project → Settings → Environment Variables, e.g. `https://your-project.vercel.app`. Redeploy after setting it. Replace the placeholder URL in `public/robots.txt` with the same URL. If you later connect a custom domain, update the environment variable and robots file to match.

## Deploy to free Vercel hosting

1. Create a GitHub repository and upload this folder's contents. Do not upload `node_modules` or `.next`.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import your GitHub repository. Vercel should detect Next.js automatically.
4. Keep the default build command (`next build`) and output settings.
5. Add `NEXT_PUBLIC_SITE_URL` with the URL Vercel assigns to the project. Set it for Production, Preview and Development as appropriate; update the value to your production URL after the first deployment and redeploy.
6. Deploy. Open the supplied `.vercel.app` URL and check every route, all links, the mobile menu, and contact form on a phone and desktop.
7. Review Vercel build logs and browser console. This project has not been deployed or Lighthouse-tested from this generated archive, so do not assume those checks passed until you run them.

Vercel Hobby is generally suitable for a personal portfolio, subject to Vercel's current plan terms and usage limits.

## Contact form behaviour

The form validates the name, email and message in the browser and then opens the visitor's default email app with a prepared draft. It does **not** send or store a message, and the success/status copy explicitly says so. To receive submissions without requiring the visitor's email app, connect a form service or backend later. Keep private API keys in server-side environment variables; never place secrets in `NEXT_PUBLIC_*` variables.

## Important facts kept honest

- No project is presented as verified completed work.
- No certificates, testimonials, metrics or client outcomes have been invented.
- The expected education completion year is not supplied.
- The résumé PDF remains unavailable until a verified file is added.
- Instagram URL must be verified before publication.
