---
title: "Markdown 排版示例"
description: "本主题支持的全部 Markdown 元素一览：标题、列表、表格、引用、代码与图片的渲染效果。"
pubDate: 2026-08-15
tags: ["示例", "Markdown", "写作"]
category: "教程"
---

# Markdown 排版示例

这篇文章用于展示本主题对 Markdown 各元素的排版支持，撰写文章时可以对照此页确认渲染效果。

## 标题与段落

一级标题用单个 `#`，依次向下。正文段落默认字号 1rem、行高 1.85，中文阅读体验经过专门调校。

这是一段**加粗**、*斜体*、~~删除线~~ 与 `行内代码` 混合的示例文字。行内代码使用等宽字体并带有主题色背景。

## 列表

无序列表：

- 列表项一
- 列表项二
  - 嵌套项
- 列表项三

有序列表：

1. 第一步：安装依赖
2. 第二步：启动开发服务器
3. 第三步：编写内容

## 引用

> 好的工具让正确的事变得容易，让错误的事变得困难。
> —— 这是多行引用的第二行，用于测试引用块换行效果。

## 代码块

语言标注支持语法高亮（shiki / github-dark）：

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('Astro'));
```

```bash
# 安装依赖并启动
bun install
bun run dev
```

## 表格

| 框架 | 类型 | 构建产物 |
| --- | --- | --- |
| Astro | 内容型框架 | 静态 HTML |
| Next.js | React 框架 | SSR / SSG |
| Vite | 构建工具 | 原生 ESM |

## 图片

![封面占位图](/images/cover-astro.svg)

## 分隔线与脚注

长文章可以用分隔线划分章节，Markdown 脚注[^1]同样受支持。

[^1]: 脚注内容会渲染在文末，适合放补充说明或参考来源。

---
