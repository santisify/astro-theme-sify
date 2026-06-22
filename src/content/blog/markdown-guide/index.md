---
title: Markdown 语法指南
description: 本主题支持的全部 Markdown 语法示例，包括标题、列表、表格、代码块、引用、图片等。
date: 2024-05-20
tags: [Markdown, 教程]
category: 教程
cover: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200
---

## 标题

# H1 一级标题
## H2 二级标题
### H3 三级标题
#### H4 四级标题

## 文本格式

**粗体**、*斜体*、~~删除线~~、`行内代码`、[超链接](https://astro.build)。

## 列表

### 无序列表

- 第一项
- 第二项
  - 嵌套项
  - 另一个嵌套项
- 第三项

### 有序列表

1. 第一步
2. 第二步
3. 第三步

### 任务列表

- [x] 已完成的任务
- [ ] 待办事项
- [ ] 另一项待办

## 引用

> 这是一段引用文字。
>
> 可以有多行和多段。
>
> > 嵌套引用

## 表格

| 姓名 | 年龄 | 城市 |
|------|------|------|
| 张三 | 25 | 北京 |
| 李四 | 30 | 上海 |
| 王五 | 28 | 深圳 |

## 代码块

### TypeScript

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

const getUser = (id: number): Promise<User> => {
  return fetch(`/api/users/${id}`).then(res => res.json());
};
```

### Python

```python
def fibonacci(n: int) -> list[int]:
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result
```

### CSS

```css
.card {
  border-radius: 12px;
  padding: 24px;
  background: var(--color-card);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

### Shell

```bash
#!/bin/bash
for file in *.md; do
  echo "Processing $file"
  sed -i 's/foo/bar/g' "$file"
done
```

代码块支持语言标签显示、一键复制和行号。复制按钮在右上角，点击后显示 ✓ 表示已复制。

## 分割线

---

## 图片

![风景](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800)

## 脚注

这是一段带脚注的文字[^1]。

[^1]: 这是脚注内容。

## HTML 嵌入

<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-sm">
  提示：本主题支持在 Markdown 中嵌入 HTML 标签。
</div>
