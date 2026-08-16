import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../site.config';
import { entryPath } from '../utils/content';

export async function GET(context: { url: URL }) {
  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = blogPosts
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .slice(0, 20);

  return rss({
    title: siteConfig.site.title + ' — Blog',
    description: siteConfig.site.description,
    site: context.url.origin,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${entryPath(post.id)}`,
      pubDate: post.data.pubDate,
      content: post.body,
    })),
  });
}
