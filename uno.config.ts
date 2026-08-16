import { defineConfig } from 'unocss';
import presetWind4 from '@unocss/preset-wind4';
import presetAttributify from '@unocss/preset-attributify';

export default defineConfig({
  presets: [
    presetWind4(),
    presetAttributify({ strict: true }),
  ],
  theme: {
    // 语义化颜色 token —— 值来自 global.css 的 CSS 变量，深浅色自动翻转
    colors: {
      primary: 'var(--accent)',
      paper: 'var(--paper)',
      paper2: 'var(--paper2)',
      ink: 'var(--ink)',
      muted: 'var(--muted)',
      faint: 'var(--faint)',
      line: 'var(--line)',
      accent: 'var(--accent)',
      accent2: 'var(--accent2)',
      accentsoft: 'var(--accentsoft)',
      code: 'var(--code-bg)',
    },
    fontFamily: {
      sans: '"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif',
      mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace',
      serif: '"Newsreader", ui-serif, Georgia, "Songti SC", "Noto Serif SC", "Source Han Serif SC", serif',
    },
  },
  shortcuts: [
    {
      // 极简文本按钮
      btn: 'inline-flex items-center gap-1.5 font-medium text-sm px-4 py-2 rounded-md border border-line text-ink hover:text-accent hover:border-accent transition-colors duration-200 cursor-pointer select-none',
      'btn-primary': 'btn border-transparent bg-accent text-paper hover:text-paper hover:bg-accent2',
      'btn-outline': 'btn border-accent text-accent hover:bg-accentsoft',
      // 无阴影卡片：仅发丝线边框
      card: 'rounded-xl border border-line bg-paper hover:border-accent/40 transition-colors duration-200',
      // 编辑式眉题（mono 小号大写）
      eyebrow: 'font-mono text-[0.7rem] uppercase tracking-[0.18em] text-faint',
      container: 'max-w-6xl mx-auto px-5 sm:px-8',
    },
  ],
});
