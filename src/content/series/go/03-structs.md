---
title: "Go 语言基础：结构体与方法"
description: "用结构体组织数据，用方法绑定行为，理解值接收者与指针接收者的区别。"
pubDate: 2026-07-15
tags: ["Go", "入门", "教程"]
order: 3
---

# Go 语言基础：结构体与方法

Go 没有类，但有结构体与方法——这构成了它独特的"面向对象"风格。

## 定义结构体

```go
package main

import "fmt"

type User struct {
    Name string
    Age  int
}

func main() {
    u := User{Name: "sify", Age: 18}
    fmt.Println(u.Name)
}
```

## 方法：值接收者

```go
func (u User) Greet() string {
    return "Hello, " + u.Name
}
```

## 方法：指针接收者

需要修改字段或避免拷贝时使用指针接收者：

```go
func (u *User) Birthday() {
    u.Age++
}
```

> 经验法则：要么全部用值接收者，要么全部用指针接收者，保持一致。

## 构造函数模式

Go 没有构造函数语法，惯例是提供 `NewXxx` 函数：

```go
func NewUser(name string, age int) *User {
    return &User{Name: name, Age: age}
}
```

## 嵌套与组合

用嵌入实现"组合优于继承"：

```go
type Admin struct {
    User        // 嵌入
    Permissions []string
}
```

---

下一篇文章将介绍接口与错误处理，这也是本系列的最后一篇。
