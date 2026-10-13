import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The WordPress site used https://www.mfquant.net, so we keep that as the canonical address.
export default defineConfig({
  site: 'https://www.mfquant.net',
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
