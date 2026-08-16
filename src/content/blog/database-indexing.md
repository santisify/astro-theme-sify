---
title: "数据库索引原理与调优"
description: "B-Tree 为什么快？覆盖索引是什么？用 EXPLAIN 分析并优化慢查询。"
pubDate: 2026-05-20
tags: ["数据库", "后端"]
category: "后端"
---

# 数据库索引原理与调优

索引是数据库性能的第一杠杆。理解它的原理，才能做出正确的取舍。

## B-Tree 为什么快

B-Tree 让查找复杂度维持在 **O(log n)**，且节点按页存储、磁盘 IO 次数极少：

```text
        [ 30 | 60 ]
       /     |      \
   [10|20] [40|50] [70|80]
```

每次查询只需访问 3~4 层节点，这就是"千万行也能毫秒返回"的秘密。

## 覆盖索引

当索引包含查询所需的全部列时，可以**免回表**：

```sql
CREATE INDEX idx_user_email ON users(email) INCLUDE (name);

-- 下面的查询只需读索引
SELECT name FROM users WHERE email = 'a@b.com';
```

## 用 EXPLAIN 分析

```sql
EXPLAIN ANALYZE
SELECT * FROM orders
WHERE user_id = 42 AND status = 'paid';
```

关注三个指标：

| 指标 | 含义 |
| --- | --- |
| type | 访问类型，`ref`/`range` 优于 `ALL` |
| rows | 预估扫描行数 |
| Actual Time | 实际执行耗时 |

## 常见误区

- 索引不是越多越好——每个索引都有写入成本
- 前导列才能命中联合索引
- 对低选择性的列建索引往往得不偿失

## 小结

调优的顺序应该是：**先 EXPLAIN，再建索引，最后观察**。索引是银弹的"前提是选对了子弹"。
