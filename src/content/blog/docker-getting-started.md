---
title: "Docker 容器化入门"
description: "从 Dockerfile 到多阶段构建与 Compose，快速上手容器化部署。"
pubDate: 2026-06-30
tags: ["Docker", "DevOps"]
category: "工程"
---

# Docker 容器化入门

容器让"在我机器上能跑"成为历史。本文用一个 Node 服务带你走完容器化全流程。

## 编写 Dockerfile

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

多阶段构建让最终镜像只包含运行所需文件。

## 构建与运行

```bash
docker build -t my-app .
docker run -p 3000:3000 --env-file .env my-app
```

## Compose 编排

本地开发一键拉起多服务：

```yaml
services:
  web:
    build: .
    ports: ["3000:3000"]
    depends_on:
      - db
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: devpass
```

## 小结

容器化的收益在**一致性**：镜像即部署单元，环境差异被彻底抹平。从多阶段构建开始，逐步引入镜像仓库与 CI 流水线。
