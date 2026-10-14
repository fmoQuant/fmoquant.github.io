# fmoquant.github.io

Personal site of Farid Moussaoui, built with [Astro](https://astro.build) and hosted on GitHub Pages at https://fmoquant.github.io. It replaces the former WordPress site mfquant.net, which is discontinued.

## Content

| Address | Source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/skills/`, `/research/`, `/galley/` (Gallery), `/computational-finance/`, `/computational-fluid-dynamics/`, `/again-cfd-computational-fun-dynamics/`, `/schwartz2f/`, `/erc_portfolio/`, `/hf-analysis/` | `src/pages/*.md` |
| `/blog/` | `src/pages/blog.astro`, lists every file in `src/posts/` |
| `/rp-solvers/` | `src/posts/rp-solvers.md` |

Page addresses are the same as on the former WordPress site. To write a new post, add a Markdown file to `src/posts/` with `title`, `date` and `description` in its front matter; its address is `/<file name>/`.

## First run, on your computer

You need Node.js 22.12 or newer (Astro 7 requires it). Check with `node -v`.

```sh
npm install          # installs Astro; creates package-lock.json (commit it)
npm run check        # confirms that every link and file resolves
npm run dev          # preview at http://localhost:4321
```

Images and downloads live in `public/uploads/`.

## Publish on GitHub

The repository is `fmoQuant/fmoquant.github.io`, which GitHub serves at https://fmoquant.github.io.

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**, once.
2. Every push to `main` builds and deploys the site (`.github/workflows/deploy.yml`).

```sh
git add .
git commit -m "Describe the change"
git push
```

There is no custom domain: `mfquant.net` is discontinued.

## Changes from the WordPress site

- The Gallery menu page was empty on WordPress. `/galley/` now lists its three sub-pages.
- The two TablePress tables on `/hf-analysis/` are plain tables.
- The code download on `/erc_portfolio/` pointed to `/codes/erc_code.zip`; it now points to the copy in the media library, `/uploads/erc_code.zip`.
- A stray closing brace at the end of the R listing in `/rp-solvers/` was removed.
- The post images use the original files instead of WordPress's 800 px copies.
- No comments, forms or search existed on the exported content, so nothing dynamic was lost.
