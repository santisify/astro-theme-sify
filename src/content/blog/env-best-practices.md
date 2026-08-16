---
title: "环境变量管理最佳实践"
description: "从 .env 文件到密钥管理，如何在项目中安全、高效地管理环境变量。"
pubDate: 2026-08-05
tags: ["DevOps", "最佳实践"]
category: "工程"
---

# 环境变量管理最佳实践

环境变量是应用配置的"最后一公里"。管理不当，轻则配置混乱，重则密钥泄露。

## 基本原则

1. **绝不硬编码**：密钥、连接串一律走环境变量
2. **区分环境**：开发、测试、生产使用不同的变量集合
3. **显式声明**：缺失必填变量时启动即失败，而不是运行时才崩溃

## 目录结构

```
project/
├── .env              # 本地开发（提交到 git）
├── .env.example      # 变量清单（必须提交）
├── .env.production   # 生产（绝不提交）
└── .gitignore        # 忽略真实 .env*
```

## 启动时校验

用 zod 在进程启动时校验并归一化配置：

```ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'test', 'production']),
});

const env = envSchema.parse(process.env);
```

校验失败会立刻抛出清晰的错误，避免带着残缺配置运行。

## 密钥管理

- 本地：`.env` + 密钥管理工具（如 `direnv`）
- CI：平台的 Secrets 面板（GitHub Actions / GitLab CI）
- 生产：Vault / 云厂商 Secret Manager，**不要**把密钥写进镜像

## 小结

环境变量的目标只有一个：**让配置可审查、可追溯、可安全替换**。从 `.env.example` 和启动校验开始，建立一条清晰的配置流水线。
