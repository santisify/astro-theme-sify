---
title: 欢迎使用 Sify Blog
description: Sify Blog 是一个基于 Astro 6 + Tailwind CSS v4 构建的现代化博客主题，开箱即用。
date: 2024-06-01
tags: [Astro, 介绍]
category: 笔记
pinned: true
cover: https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200
---

Sify Blog 是一个功能完备的 Astro 博客主题，基于 Astro 6 和 Tailwind CSS v4 构建。如果你正在寻找一个简洁、现代、易于定制的博客模板，那你就来对地方了。

## 快速开始

```bash
bun install
bun dev
```

打开 `http://localhost:4321` 即可预览。详细步骤请参考 [从零搭建博客](/post/getting-started)。

## 特性一览

| 特性 | 说明 |
|------|------|
| Markdown / MDX | 支持标准 Markdown 和 JSX 组件 |
| 数学公式 | KaTeX 渲染行内和块级公式 |
| Mermaid 图表 | 流程图、序列图、甘特图等 |
| 代码高亮 | Shiki 双主题，语言标签，一键复制，行号 |
| 暗色模式 | 跟随系统 + 手动切换，无闪烁 |
| 全站搜索 | `Ctrl+K` 唤起，标题 + 正文匹配，高亮显示 |
| 评论系统 | Waline 评论区，支持暗色模式 |
| RSS | 自动生成 RSS Feed |
| 友链 | 好友链接 + 友链圈动态 + 健康检测 |
| 文章系列 | 同系列文章自动归组 |
| 分享按钮 | Twitter / 微信扫码 / 复制链接 / 原生分享 |
| 阅读进度 | 顶部进度条 + 目录高亮 |
| i18n | 中英文切换 |
| PWA | 可安装，支持离线访问 |
| SEO | Open Graph、Twitter Card、JSON-LD |
| 响应式 | 移动端完美适配 |

## 页面路由

| 路径 | 页面 |
|------|------|
| `/` | 首页（文章列表 + Hero） |
| `/post/[...slug]` | 文章详情页 |
| `/categories/[category]` | 分类页面 |
| `/tags/[tag]` | 标签页面 |
| `/archives` | 文章归档 |
| `/weekly` | 周刊 |
| `/friends` | 友链页面 |
| `/about` | 关于页面 |
| `/rss.xml` | RSS 订阅 |

## 技术栈

- **框架**: Astro 6 + View Transitions
- **样式**: Tailwind CSS v4（`@theme` 语法）
- **代码高亮**: Shiki（双主题）
- **数学公式**: remark-math + rehype-katex
- **图表**: Mermaid.js
- **评论**: Waline
- **部署**: Vercel / Cloudflare Pages / 任意静态托管

> 使用 `Ctrl + K` 快捷键随时唤出搜索面板。
