import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import unocss from '@unocss/astro';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMermaid from 'rehype-mermaid';

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
      // 把 mermaid 代码块排除在 shiki 高亮之外，保留 <pre><code class="language-mermaid">
      // 原始结构，供 rehype-mermaid 构建期渲染。
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
        [
          rehypeMermaid,
          {
            strategy: 'img-svg',
            dark: true,
            mermaidConfig: {
              fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
            },
          },
        ],
      ],
    }),
  },
});
