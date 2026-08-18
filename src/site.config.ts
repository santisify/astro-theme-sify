export type NavItem = {
  text: string;
  link: string;
};

export type SocialLinks = {
  github?: string;
  email?: string;
  twitter?: string;
  rss?: string;
};

export type SiteConfig = {
  site: {
    title: string;
    description: string;
    author: string;
    url: string;
    language: string;
  };
  nav: NavItem[];
  social: SocialLinks;
  footer: {
    copyright: string;
    poweredBy: string;
  };
  /**
   * 评论系统配置
   * - enabled: 总开关
   * - envId:  Twikoo 服务端地址（自部署时填 Vercel/Netlify 域名，
   *           使用 Twikoo 官方云时填 `https://twikoo.zhheo.com`）
   *           也可通过环境变量 `PUBLIC_TWIKOO_ENV_ID` 注入，便于 CI/CD
   */
  comments: {
    enabled: boolean;
    envId: string;
  };
};

const siteConfig: SiteConfig = {
  site: {
    title: 'Sify',
    description: '个人博客 — 技术笔记、教程与随笔',
    author: 'Sify',
    url: 'https://sify.dev',
    language: 'zh-CN',
  },
  nav: [
    { text: '首页', link: '/' },
    { text: '博客', link: '/blog' },
    { text: '系列', link: '/series' },
    { text: '标签', link: '/tags' },
    { text: '归档', link: '/archives' },
    { text: '关于', link: '/about' },
    { text: '项目', link: '/projects' },
    { text: '友链', link: '/links' },
  ],
  social: {
    github: 'https://github.com/santisify',
    email: 'mailto:santisify@qq.com',
    rss: '/rss.xml',
  },
  footer: {
    copyright: '© 2026 Sify. All rights reserved.',
    poweredBy: 'Powered by Astro & UnoCSS',
  },
  comments: {
    enabled: true,
    // 使用环境变量 PUBLIC_TWIKOO_ENV_ID 注入 Twikoo 服务端地址
    // 需要到部署平台（如 Vercel、Netlify）设置环境变量 PUBLIC_TWIKOO_ENV_ID。
    // 详细环境ID参考：https://twikoo.js.org/backend.html
    envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID,
  },
};

export { siteConfig };
