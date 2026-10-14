import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site lives at the GitHub Pages address of the fmoQuant account.
export default defineConfig({
  site: 'https://fmoquant.github.io',
  build: { format: 'directory' },
  // Astro 7 trims whitespace between inline elements by default; keep the classic behaviour.
  compressHTML: true,
  integrations: [sitemap()],
  // Old WordPress addresses that no longer have a page of their own.
  redirects: {
    '/homepage': '/',
    '/rp-ivy-league-portfolio': '/rp-solvers/',
  },
});
