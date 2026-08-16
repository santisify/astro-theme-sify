---
title: "Go 语言进阶：接口与错误处理"
description: "接口的鸭子类型、类型断言与 errors.Is，以及 Go 独有的错误处理哲学。"
pubDate: 2026-07-22
tags: ["Go", "入门", "教程"]
order: 4
---

# Go 语言进阶：接口与错误处理

作为系列的收官篇，我们来谈 Go 最核心的两个抽象：**接口**与**错误**。

## 接口：鸭子类型

接口定义行为契约，实现是隐式的：

```go
type Reader interface {
    Read(p []byte) (n int, err error)
}
```

任何实现了 `Read` 方法的类型都自动满足 `Reader` 接口——不需要显式声明。

## 类型断言

从接口值中取回具体类型：

```go
var v any = "hello"
s, ok := v.(string)
if ok {
    fmt.Println(s)
}
```

## 错误处理哲学

Go 用显式的返回值表达错误，而不是异常：

```go
f, err := os.Open("file.txt")
if err != nil {
    return err
}
defer f.Close()
```

用 `errors.Is` / `errors.As` 判断错误链：

```go
if errors.Is(err, os.ErrNotExist) {
    // 文件不存在
}
```

## 小结

本系列到这里就结束了。回顾一下：**语法地基 → 变量与类型 → 结构体与方法 → 接口与错误**。接下来建议动手写一个小项目，比如 CLI 工具或 HTTP 服务，让这些知识真正内化。
