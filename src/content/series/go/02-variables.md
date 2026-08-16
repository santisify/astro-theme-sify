---
title: "Go 语言基础：变量与基本类型"
description: "变量声明、类型推断、零值与常用基本类型，打好语法地基。"
pubDate: 2026-07-08
tags: ["Go", "入门", "教程"]
order: 2
---

# Go 语言基础：变量与基本类型

上一篇我们跑通了第一个程序，这一篇来夯实变量与类型这块地基。

## 声明变量的三种方式

```go
package main

import "fmt"

func main() {
    var a int = 10      // 完整声明
    var b = 20          // 类型推断
    c := 30             // 短声明（函数内）
    fmt.Println(a, b, c)
}
```

> `:=` 是 Go 的招牌语法：声明并初始化，类型由右侧推断。

## 基本类型

| 类型 | 说明 | 零值 |
| --- | --- | --- |
| `int` / `int64` | 整数 | 0 |
| `float64` | 浮点数 | 0 |
| `string` | 字符串 | `""` |
| `bool` | 布尔 | `false` |

变量声明后即使未赋值也有**零值**，不会出现"未初始化"的未定义行为：

```go
var s string
fmt.Println(s == "") // true
```

## 常量

用 `const` 声明编译期常量，配合 `iota` 生成枚举序列：

```go
const (
    StatusPending = iota // 0
    StatusRunning        // 1
    StatusDone           // 2
)
```

## 字符串

字符串不可变，用双引号或反引号（原始字符串）：

```go
raw := `多行
字符串`
```

---

下一篇文章将介绍结构体与方法，开始接触 Go 的面向对象风格。
