---
title: "Go 语言入门：环境与第一个程序"
description: "安装 Go 工具链，认识 go.mod，运行你的第一个 Go 程序。"
pubDate: 2026-07-01
tags: ["Go", "入门", "教程"]
order: 1
---

# Go 语言入门：环境与第一个程序

这是《Go 入门系列》的第一篇。本系列面向有其他语言基础的读者，目标是快速掌握 Go 的核心语法与思维方式。

## 安装与验证

从 [go.dev](https://go.dev/dl/) 下载安装包，然后验证：

```bash
go version
# go version go1.24.x linux/amd64
```

## 第一个程序

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
```

运行方式：

```bash
go run main.go
go build -o hello main.go   # 编译为可执行文件
```

## go.mod 与模块

每个项目都是一个模块，用 `go mod init` 初始化：

```bash
go mod init example.com/hello
```

`go.mod` 记录模块路径与依赖版本，是 Go 依赖管理的核心文件。

## 关键语法速览

- 函数用 `func` 声明，参数类型在后
- `main` 包中的 `main` 函数是程序入口
- 包内小写标识符为私有，大写为导出（跨包可见）

---

下一篇文章将介绍变量、常量与基本数据类型。
