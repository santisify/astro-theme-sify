---
title: "Git 协作工作流指南"
description: "功能分支、提交规范与代码评审——建立可持续的团队协作方式。"
pubDate: 2026-06-12
tags: ["Git", "协作"]
category: "工程"
---

# Git 协作工作流指南

多人协作的痛点大多不在 Git 命令本身，而在**约定**。一套清晰的规范比任何技巧都重要。

## 功能分支模型

每个需求一条分支，主干保持可发布：

```bash
git checkout -b feat/user-profile
# 开发、提交……
git push origin feat/user-profile
```

## 提交信息规范

采用 Conventional Commits，让历史可读、可自动生成 changelog：

```text
feat: 增加用户资料编辑
fix: 修复移动端菜单无法关闭的问题
docs: 更新 README 部署说明
```

## 合并策略

- 主干合并：**rebase** 保持线性历史
- 功能分支并入：**squash merge** 压缩为一次提交

```bash
git fetch origin
git rebase origin/main
```

## 保护规则

- 主干禁止直接推送
- PR 至少一人评审通过
- CI 全绿才可合并

## 小结

> 好的工作流不是约束，而是让每个成员都清楚"下一步该做什么"。

从提交规范和保护规则入手，小团队也能获得大厂级的协作体验。
