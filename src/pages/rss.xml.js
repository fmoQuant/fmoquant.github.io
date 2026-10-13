import rss from '@astrojs/rss';

export function GET(context) {
  const modules = import.meta.glob('../posts/*.md', { eager: true });

  const items = Object.entries(modules)
    .map(([path, post]) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description ?? '',
      pubDate: new Date(post.frontmatter.date),
      link: `/${path.split('/').pop().replace(/\.md$/, '')}/`,
    }))
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Farid Moussaoui',
    description: 'Quantitative analysis, portfolio optimisation and numerical simulation.',
    site: context.site,
    items,
  });
}
