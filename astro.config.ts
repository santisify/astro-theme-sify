import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://astro-theme-sify-demo.vercel.app/',
  legacy: {
    collectionsBackwardsCompat: true,
  },
  integrations: [
    unocss({ injectEntry: true }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
