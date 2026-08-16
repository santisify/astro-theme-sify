/**
 * 内容集合兼容工具
 *
 * 项目启用了 `legacy.collectionsBackwardsCompat`，此时 entry 不再提供
 * `slug` 属性，且 `entry.id` 包含文件扩展名（如 `test.md`、`go/02-variables.md`）。
 * 这里统一提供"去扩展名的路由路径"。
 */
export function entryPath(id: string): string {
  return id.replace(/\.[^/.]+$/, '');
}
