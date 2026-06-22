---
title: Mermaid 图表使用指南
description: 在 Markdown 中使用 Mermaid 绘制流程图、序列图、甘特图等图表
date: 2024-05-25
tags: [教程, Mermaid, 图表]
category: 教程
cover: https://mermaid.js.org/images/header.png
---

Mermaid 是一个基于 JavaScript 的图表绘制工具，可以通过类似 Markdown 的语法生成各种图表。在文章中使用 ` ```mermaid ` 代码块即可自动渲染。

## 流程图

```mermaid
graph TD
    A[开始] --> B{是否需要登录?}
    B -->|是| C[输入账号密码]
    B -->|否| D[直接访问]
    C --> E{验证成功?}
    E -->|是| D
    E -->|否| C
    D --> F[结束]
```

## 序列图

```mermaid
sequenceDiagram
    participant U as 用户
    participant B as 浏览器
    participant S as 服务器
    participant D as 数据库

    U->>B: 输入查询条件
    B->>S: 发送搜索请求
    S->>D: 查询数据库
    D-->>S: 返回结果
    S-->>B: 返回 JSON 数据
    B-->>U: 展示搜索结果
```

## 类图

```mermaid
classDiagram
    class User {
        +String name
        +String email
        +login()
        +logout()
    }

    class Article {
        +String title
        +String content
        +Date createdAt
        +publish()
    }

    class Comment {
        +String text
        +Date createdAt
        +create()
    }

    User "1" --> "*" Article : writes
    User "1" --> "*" Comment : creates
    Article "1" --> "*" Comment : has
```

## 甘特图

```mermaid
gantt
    title 项目开发计划
    dateFormat  YYYY-MM-DD
    section 第一阶段
    需求分析           :a1, 2025-06-01, 7d
    UI 设计            :a2, after a1, 5d
    section 第二阶段
    前端开发           :b1, after a2, 10d
    后端开发           :b2, after a2, 12d
    section 第三阶段
    测试               :c1, after b2, 5d
    部署上线           :c2, after c1, 2d
```

## 饼图

```mermaid
pie title 技术栈占比
    "JavaScript" : 40
    "TypeScript" : 25
    "CSS" : 15
    "HTML" : 10
    "其他" : 10
```

## 状态图

```mermaid
stateDiagram-v2
    [*] --> 待审核
    待审核 --> 审核通过 : 通过
    待审核 --> 审核拒绝 : 拒绝
    审核通过 --> 已发布 : 发布
    审核拒绝 --> 待审核 : 重新提交
    已发布 --> [*]
```

## ER 图

```mermaid
erDiagram
    USER ||--o{ POST : creates
    POST ||--o{ COMMENT : has
    USER ||--o{ COMMENT : writes
    POST }o--|| CATEGORY : belongs_to

    USER {
        int id PK
        string name
        string email
    }

    POST {
        int id PK
        string title
        text content
        date created_at
    }

    COMMENT {
        int id PK
        text content
        date created_at
    }

    CATEGORY {
        int id PK
        string name
    }
```

## 总结

| 图表类型 | 适用场景 |
|----------|----------|
| 流程图 | 业务流程、决策逻辑 |
| 序列图 | 组件间交互、API 调用 |
| 类图 | 面向对象设计 |
| 甘特图 | 项目管理、时间规划 |
| 饼图 | 数据可视化 |
| 状态图 | 状态转换 |
| ER 图 | 数据库设计 |

Mermaid 图表自动适配暗色模式，主题跟随站点主题切换。
