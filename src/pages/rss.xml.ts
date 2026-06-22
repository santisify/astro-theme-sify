import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/consts';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    stylesheet: '/rss-styles.xsl',
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description || '',
      pubDate: post.data.date,
      link: `/post/${post.id}`,
    })),
  });
}
