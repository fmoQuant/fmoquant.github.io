// Source-level checks, no build needed:  npm run check
//  - every internal link points to a page that exists (fails the run if not)
//  - every /wp-content file that pages refer to is present in public/ (warning only)
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

// Routes that exist
const routes = new Set(['/', '/blog/', '/404/']);
for (const f of walk(join(root, 'src/pages'))) {
  const rel = f.slice(join(root, 'src/pages').length).replace(/\\/g, '/');
  const ext = extname(rel);
  if (!['.md', '.astro'].includes(ext)) continue;
  const name = rel.slice(0, -ext.length);
  if (name === '/index' || name.includes('[')) continue;
  routes.add(`${name}/`);
}
for (const f of walk(join(root, 'src/posts'))) routes.add(`/${f.split('/').pop().replace(/\.md$/, '')}/`);

const config = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
for (const m of config.matchAll(/'(\/[^']*)':/g)) routes.add(m[1].endsWith('/') ? m[1] : `${m[1]}/`);

// Links and assets used in source
const files = walk(join(root, 'src')).filter((f) => ['.md', '.astro', '.js'].includes(extname(f)));
const broken = [];
const assets = new Set();

for (const f of files) {
  const text = readFileSync(f, 'utf8');
  const targets = [
    ...text.matchAll(/href="(\/[^"#?]*)/g),
    ...text.matchAll(/href=\{`(\/[^`$"]*)`\}/g),
    ...text.matchAll(/\]\((\/[^)#?\s]*)/g),
    ...text.matchAll(/href: '(\/[^']*)'/g),
  ].map((m) => m[1]);

  for (const t of targets) {
    if (t.startsWith('/wp-content/')) { assets.add(t); continue; }
    const route = t.endsWith('/') || extname(t) ? t : `${t}/`;
    if (extname(t) || routes.has(route)) continue;
    broken.push(`${f.slice(root.length)}: ${t}`);
  }
  for (const m of text.matchAll(/(?:src|href)="(\/wp-content\/[^"]+)"|\]\((\/wp-content\/[^)\s]+)\)/g)) assets.add(m[1] ?? m[2]);
}

const missing = [...assets].filter((a) => !existsSync(join(root, 'public', a))).sort();

console.log(`${routes.size} routes, ${assets.size} referenced files in /wp-content/`);
if (broken.length) {
  console.error(`\nBroken internal links:\n  ${broken.join('\n  ')}`);
}
if (missing.length) {
  console.warn(`\nMissing from public/ (run "npm run assets"):\n  ${missing.join('\n  ')}`);
}
if (!broken.length && !missing.length) console.log('All links and files check out.');
process.exit(broken.length ? 1 : 0);
