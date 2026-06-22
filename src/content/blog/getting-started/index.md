---
title: 从零搭建博客
description: 详细介绍如何基于 Sify Blog 主题从零搭建个人博客，包括安装、配置、编写文章和部署全流程。
date: 2024-05-10
tags: [教程, 入门]
category: 教程
cover: https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200
---

## 环境准备

确保已安装 [Bun](https://bun.sh)（推荐）或 Node.js 18+。

```bash
# 安装 Bun
curl -fsSL https://bun.sh/install | bash
```

## 创建项目

```bash
# 克隆项目
git clone <your-repo-url> my-blog
cd my-blog
bun install
```

### 常用命令

```bash
bun dev          # 启动开发服务器 (localhost:4321)
bun run build    # 构建生产版本
bun preview      # 预览生产构建
```

## 配置站点

编辑 `src/consts.ts`，修改站点基本信息：

```typescript
export const SITE_TITLE = 'My Blog';
export const SITE_DESCRIPTION = '这是我的个人博客';
export const SITE_AUTHOR = 'Your Name';
export const SITE_URL = 'https://example.com';
export const SITE_AVATAR = '/avatar.png';
export const SITE_COVER = '/cover.jpg';
export const PAGE_SIZE = 10;
```

### 导航菜单

```typescript
export const NAV_ITEMS = [
  { label: '首页', href: '/' },
  { label: '周刊', href: '/weekly' },
  { label: '文章', href: '/archives' },
  { label: '友链', href: '/friends' },
  { label: '关于', href: '/about' },
];
```

### 社交链接

```typescript
export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/yourname', icon: 'github' },
  { name: 'RSS', href: '/rss.xml', icon: 'rss' },
];
```

## 编写文章

在 `src/content/blog/` 目录下创建 `.md` 或 `.mdx` 文件。

### Frontmatter 字段

```yaml
---
title: 文章标题          # 必填
description: 文章描述    # 可选
date: 2024-06-01         # 必填
tags: [标签1, 标签2]     # 可选，默认 []
category: 教程           # 可选
cover: https://example.com/cover.jpg  # 可选，支持远程 URL 或本地路径
series: 系列名称         # 可选，同系列文章自动归组
pinned: false            # 是否置顶
draft: false             # 是否为草稿（构建时过滤）
---
```

### 文章存放方式

支持两种目录结构：

```
src/content/blog/
├── my-post.md              # 单文件形式
└── my-post/
    ├── index.md            # 目录形式（推荐，可存放本地图片）
    ├── cover.webp          # 封面图
    └── images/             # 文章内图片
```

### 本地图片

使用相对路径引用本地图片：

```yaml
cover: ./cover.webp
```

图片路径会通过 `src/pages/_imageStore.ts` 自动解析。

## 配置评论

在 `src/components/waline/Comment.astro` 中配置 Waline 服务端地址：

```typescript
const serverURL = 'https://your-waline-server.vercel.app';
```

## 配置友链

编辑 `public/links.json`，添加好友链接：

```json
{
  "friends": [
    {
      "id_name": "cf-links",
      "data": [
        {
          "name": "好友名称",
          "avatar": "https://example.com/avatar.png",
          "desc": "好友简介",
          "link": "https://example.com"
        }
      ]
    }
  ]
}
```

## 部署

### Vercel

```bash
vercel
```

### Cloudflare Pages

- 构建命令：`bun run build`
- 输出目录：`dist`

### 其他平台

任何支持静态文件托管的平台，直接部署 `dist/` 目录即可。

## 自定义主题

编辑 `src/styles/global.css` 中的 CSS 变量来自定义配色：

```css
@theme {
  --color-primary: #e9536a;       /* 主色调 */
  --color-bg-light: #f5f5f5;      /* 浅色背景 */
  --color-bg-dark: #1a1a2e;       /* 深色背景 */
  --color-card-light: #ffffff;    /* 浅色卡片 */
  --color-card-dark: #1e2a45;     /* 深色卡片 */
}
```

修改站点字体：

```css
--font-family-sans: 'Inter', 'Noto Sans SC', sans-serif;
--font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
```
