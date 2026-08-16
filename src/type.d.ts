/// <reference types="astro/client" />

// UnoCSS 虚拟模块声明（供 CSS / 组件引用时获得类型提示）
declare module 'virtual:uno.css';
declare module 'uno.css';

// 静态资源导入声明
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
