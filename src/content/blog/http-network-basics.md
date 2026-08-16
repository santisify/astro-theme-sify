---
title: "HTTP 网络基础速览"
description: "请求响应模型、状态码语义、缓存与 HTTP/2/3——一次讲清 Web 传输层。"
pubDate: 2026-04-08
tags: ["网络", "HTTP"]
category: "网络"
---

# HTTP 网络基础速览

无论前端还是后端，HTTP 都是必须吃透的基础。本文帮你建立完整的知识框架。

## 请求与响应

一次 HTTP 交互由请求行、首部、消息体组成：

```http
GET /blog/astro-content-collections HTTP/1.1
Host: example.com
Accept: text/html
User-Agent: Mozilla/5.0
```

## 状态码语义

| 范围 | 含义 | 常见示例 |
| --- | --- | --- |
| 2xx | 成功 | 200 OK、204 No Content |
| 3xx | 重定向 | 301、302、304 Not Modified |
| 4xx | 客户端错误 | 400、401、404 |
| 5xx | 服务端错误 | 500、502、503 |

## 缓存策略

缓存是性能的关键，也是事故的高发区：

```http
Cache-Control: public, max-age=3600
ETag: "abc123"
```

- `max-age` 控制新鲜度
- `ETag` / `If-None-Match` 实现条件请求，命中返回 304

## HTTP/2 与 HTTP/3

- **HTTP/2**：多路复用、首部压缩，解决队头阻塞
- **HTTP/3**：基于 QUIC（UDP），弱网环境表现更好

## 小结

把 HTTP 当成**协议的语言**去理解：方法、状态码、首部共同构成服务之间的交流语法。掌握它，调试网络问题会事半功倍。
