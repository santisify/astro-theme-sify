---
title: "Astro 内容集合完全指南"
description: "从 schema 定义到类型安全查询，系统讲解 Astro Content Collections 的使用方法。"
pubDate: 2026-08-10
updatedDate: 2026-08-11
tags: ["Astro", "教程", "前端"]
cover: "/images/cover-astro.svg"
category: "前端"
---

# Astro 内容集合完全指南

Astro Content Collections 让 Markdown 内容拥有**类型安全**的管理方式：每个文档的 frontmatter 都会经过 zod schema 校验，并在编辑器与构建期获得完整的类型提示。

## 定义集合 Schema

在 `src/content.config.ts` 中声明集合及其字段：

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

> 字段写错、类型不符时，构建会直接报错并指出是哪一篇文章——这正是集合存在的意义。

## 查询内容

```ts
import { getCollection } from 'astro:content';

// 过滤草稿，按日期倒序
const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
  (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
);
```

## 渲染文章

详情页通过 `getStaticPaths` 生成路由，用 `render()` 得到内容组件：

```ts
export async function getStaticPaths() {
  return posts.map((post) => ({
    params: { id: post.slug },
    props: { post },
  }));
}

const { Content } = await render(post);
```

## 小结

内容集合是 Astro 内容型站点的基础设施。配合子目录 slug、分页与草稿机制，可以构建出结构清晰、可维护的博客系统——本主题的博客、系列、标签、归档全部建立在这套机制之上。
