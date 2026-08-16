---
title: "Go 语言进阶：并发模式"
description: "学习 goroutine 与 channel 的组合方式，掌握 Worker Pool、扇出扇入等经典并发设计模式。"
pubDate: 2026-08-12
updatedDate: 2026-08-15
tags: ["Go", "并发", "后端"]
category: "Go"
---

# Go 语言进阶：并发模式

goroutine 轻量、channel 安全，但**组合方式**才是并发编程的难点。本文介绍几个经过实战检验的经典模式。

## Worker Pool

固定数量的 worker 从任务队列中消费，控制并发上限：

```go
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        results <- j * 2
    }
}

jobs := make(chan int, 100)
results := make(chan int, 100)

for w := 0; w < 3; w++ {
    go worker(w, jobs, results)
}
for j := 0; j < 100; j++ {
    jobs <- j
}
close(jobs)
```

## 扇出 / 扇入

多个 goroutine 并发处理，再用一个 channel 汇总结果：

```go
func fanIn[T any](chans ...<-chan T) <-chan T {
    out := make(chan T)
    var wg sync.WaitGroup
    for _, c := range chans {
        wg.Add(1)
        go func(ch <-chan T) {
            defer wg.Done()
            for v := range ch {
                out <- v
            }
        }(c)
    }
    go func() { wg.Wait(); close(out) }()
    return out
}
```

## select 超时

用 `select` + `time.After` 给操作加上超时保护：

```go
select {
case res := <-respChan:
    return res
case <-time.After(2 * time.Second):
    return nil, errors.New("timeout")
}
```

## 小结

> 不要通过共享内存来通信；而要通过通信来共享内存。

把 goroutine 视为廉价的"工人"，用 channel 定义他们之间的**数据流**，并始终记得关闭 channel 与等待 goroutine 收尾。
