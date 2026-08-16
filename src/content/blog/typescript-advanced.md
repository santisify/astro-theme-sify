---
title: "TypeScript 高级类型技巧"
description: "深入理解泛型、条件类型、模板字面量类型与 infer 推断，写出更安全的类型代码。"
pubDate: 2026-08-08
tags: ["TypeScript", "编程", "前端"]
category: "TypeScript"
---

# TypeScript 高级类型技巧

TypeScript 的类型系统能力远超大多数人的想象。掌握下面几个高级技巧，可以让类型真正成为你的"文档"。

## 条件类型与 infer

条件类型 `T extends U ? X : Y` 允许在类型层面做分支判断，配合 `infer` 可以从类型中"提取"出结构：

```ts
type ElementType<T> = T extends (infer U)[] ? U : never;

type A = ElementType<string[]>; // string
type B = ElementType<number[]>; // number
```

## 模板字面量类型

借助模板字符串，可以构造出受约束的字符串类型：

```ts
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<'click'>; // "onClick"
```

## 映射类型

遍历联合类型的每个成员并转换：

```ts
type ReadonlyRecord<T> = {
  readonly [K in keyof T]: T[K];
};

interface User { name: string; age: number }
type Frozen = ReadonlyRecord<User>;
```

## 实用工具类型

`Partial`、`Pick`、`Omit`、`ReturnType` 等工具类型覆盖了绝大多数日常需求：

```ts
type Result = ReturnType<typeof fetch>; // Promise<Response>
type Name = Pick<User, 'name'>;
```

## 小结

高级类型技巧的关键是**让非法状态在编译期就不可表达**。建议从条件类型与 `infer` 开始练习，逐步构建你自己的类型工具库。
