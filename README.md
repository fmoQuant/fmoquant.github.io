# mfquant.net

Static version of the WordPress site, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Content

| Address | Source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/skills/`, `/research/`, `/galley/` (Gallery), `/computational-finance/`, `/computational-fluid-dynamics/`, `/again-cfd-computational-fun-dynamics/`, `/schwartz2f/`, `/erc_portfolio/`, `/hf-analysis/` | `src/pages/*.md` |
| `/blog/` | `src/pages/blog.astro`, lists every file in `src/posts/` |
| `/rp-solvers/` | `src/posts/rp-solvers.md` |

All addresses are the same as on WordPress. To write a new post, add a Markdown file to `src/posts/` with `title`, `date` and `description` in its front matter; its address is `/<file name>/`.

## First run, on your computer

You need Node.js 22.12 or newer (Astro 7 requires it). Check with `node -v`.

```sh
npm install          # installs Astro; creates package-lock.json (commit it)
npm run assets       # downloads the images and the zip the pages use from your live site
npm run check        # confirms that every link and file resolves
npm run dev          # preview at http://localhost:4321
```

`npm run assets` copies only the files the pages use into `public/uploads/`, so old image URLs keep working.
It leaves out the videos and the 42 MB PDF that sit in your WordPress media library but appear on no page. GitHub rejects files over 100 MB, and one of the videos is 125 MB.

## Publish on GitHub

1. Create the repository (any name; `fmoQuant.github.io` also gives you a free `fmoquant.github.io` address) and push:

   ```sh
   git init -b main
   git add .
   git commit -m "Static site"
   git remote add origin https://github.com/fmoQuant/<repository>.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Every push to `main` now builds and deploys the site (`.github/workflows/deploy.yml`).
3. Custom domain: in **Settings → Pages**, enter `www.mfquant.net` and tick **Enforce HTTPS** once the certificate is ready. The `public/CNAME` file already contains it.
4. DNS, at the registrar:
   - `www` CNAME to `fmoquant.github.io`
   - for `mfquant.net` without `www`, four A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (check GitHub's "Managing a custom domain" page for the current list); GitHub redirects it to `www`.
5. Change DNS last. Check the site at its `github.io` address first, and keep the WordPress site and a backup until the new one looks right.

If you use the `github.io` address only (no custom domain) and the repository is not named `fmoQuant.github.io`, add `base: '/<repository>'` to `astro.config.mjs`.

## Changes from the WordPress site

- The Gallery menu page was empty on WordPress. `/galley/` now lists its three sub-pages.
- The two TablePress tables on `/hf-analysis/` are plain tables.
- The code download on `/erc_portfolio/` pointed to `/codes/erc_code.zip`; it now points to the copy in the media library, `/uploads/erc_code.zip`.
- A stray closing brace at the end of the R listing in `/rp-solvers/` was removed.
- The post images use the original files instead of WordPress's 800 px copies.
- No comments, forms or search existed on the exported content, so nothing dynamic was lost.
