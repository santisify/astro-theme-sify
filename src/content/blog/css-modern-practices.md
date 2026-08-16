---
title: "CSS 现代化实践"
description: "容器查询、:has()、级联层与逻辑属性——这些新特性正在改变我们写 CSS 的方式。"
pubDate: 2026-07-05
tags: ["CSS", "前端"]
category: "前端"
---

# CSS 现代化实践

CSS 在近年迎来了一批真正改变开发体验的特性，本文挑选四个高频场景介绍。

## 容器查询

不再只能"看窗口"，组件可以根据自身容器尺寸响应：

```css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-title {
    font-size: 1.5rem;
  }
}
```

## :has() 选择器

"父选择器"让状态驱动的样式变得简洁：

```css
/* 含图片的卡片增加间距 */
.card:has(img) {
  padding-top: 1rem;
}
```

## 级联层

用 `@layer` 明确管理样式优先级，告别 `!important` 军备竞赛：

```css
@layer base, components, utilities;
```

## 逻辑属性

`margin-inline`、`padding-block` 让样式天然适配书写方向：

```css
/* 物理属性 */ margin-left: 1rem;
/* 逻辑属性 */ margin-inline-start: 1rem;
```

## 小结

新特性不是玩具，而是让 CSS 更**可维护**的工具。建议从逻辑属性和 `:has()` 开始，逐步迁移存量代码。
