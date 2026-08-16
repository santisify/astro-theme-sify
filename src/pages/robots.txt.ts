import { siteConfig } from '../site.config';

export const GET = () => {
  const sitemapUrl = `${siteConfig.site.url}/sitemap-index.xml`;
  const body = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
