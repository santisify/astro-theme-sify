import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import unocss from '@unocss/astro';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
    syntaxHighlight: {
      type: 'shiki',
      // 保留 <pre><code class="language-mermaid"> 原始结构，供前端运行时用 mermaid 渲染。
      excludeLangs: ['mermaid'],
    },
    shikiConfig: {
      theme: 'github-dark',
    },
    processor: unified({
      remarkPlugins: [
        remarkMath,
      ],
      rehypePlugins: [
        rehypeKatex,
      ],
    }),
  },
});
