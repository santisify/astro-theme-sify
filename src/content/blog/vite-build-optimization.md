---
title: "Vite 构建优化实战"
description: "从分包策略到产物瘦身，总结 Vite 构建优化的几个实用切入点。"
pubDate: 2026-07-18
tags: ["Vite", "构建", "前端"]
category: "工程"
---

# Vite 构建优化实战

Vite 开发时很快，但生产构建的**产物质量**同样值得打磨。下面几个优化点按性价比排序。

## 手动分包

第三方依赖打进同一个 chunk 会拖慢首屏，按需拆分：

```ts
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          ui: ['antd'],
        },
      },
    },
  },
});
```

## 按需加载

路由级懒加载配合 `React.lazy`，让首屏只加载必要代码：

```tsx
const Dashboard = lazy(() => import('./pages/Dashboard'));
```

## 产物分析

用 `rollup-plugin-visualizer` 生成依赖体积报告，找出"隐形胖子"：

```bash
bun add -d rollup-plugin-visualizer
```

```ts
plugins: [visualizer({ open: true })],
```

## 图片与字体

- 图片交给 `vite-plugin-imagemin` 或压缩后再入库
- 字体使用 `font-display: swap`，避免阻塞渲染

## 小结

构建优化的核心是**为浏览器减负**：更小的包、更少的请求、更合理的缓存。先分析、再动手，避免无谓的微优化。
