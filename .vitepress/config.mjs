import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '8门语言',
  description: '一本让你学会"怎么看一门语言"的书',
  lang: 'zh-CN',
  base: '/8-languages/',
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/00-前言' },
    ],

    sidebar: [
      {
        text: '前言',
        items: [
          { text: '写在前面', link: '/00-前言' },
        ]
      },
      {
        text: '第一部分：表达 — 你对语言说什么',
        items: [
          { text: '第1章 声明', link: '/01-声明' },
          { text: '第2章 塑造', link: '/02-塑造' },
          { text: '第3章 组织', link: '/03-组织' },
        ]
      },
      {
        text: '第二部分：运行 — 语言替你做什么',
        items: [
          { text: '第4章 流转', link: '/04-流转' },
          { text: '第5章 捕获', link: '/05-捕获' },
          { text: '第6章 边界', link: '/06-边界' },
        ]
      },
      {
        text: '第三部分：失控 — 当事情不按计划走',
        items: [
          { text: '第7章 生死', link: '/07-生死' },
          { text: '第8章 并行', link: '/08-并行' },
          { text: '第9章 失败', link: '/09-失败' },
        ]
      },
      {
        text: '第四部分：带走 — 你的迁移能力',
        items: [
          { text: '第10章 看懂第九门语言', link: '/10-第九门语言' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    docFooter: {
      prev: '上一章',
      next: '下一章',
    },

    lastUpdated: {
      text: '最后更新',
    },
  },
})
