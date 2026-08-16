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
    email: 'mailto:santisify@example.com',
    rss: '/rss.xml',
  },
  footer: {
    copyright: '© 2026 Sify. All rights reserved.',
    poweredBy: 'Powered by Astro & UnoCSS',
  },
};

export { siteConfig };
