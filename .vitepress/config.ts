import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SQLnote",
  description: "A VitePress Site",
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/js/index.md' }
    ],
    sidebar: [
      {
        text: '目录',
        items: [
          {
            text: 'JS', items: [
              { text: '内置对象', link: '/docs/js/built-in-objects/built-in-objects.md' },
              { text: '实用函数', link: '/docs/js/practical-function/practical-function.md' },
            ]
          },
          { text: 'CSS', link: '/docs/css/index.md' },
          { text: 'React', link: '/docs/react/index.md' },
          { text: 'Vue', link: '/docs/vue/index.md' },
          { text: 'Flutter', link: '/docs/flutter/index.md' },
          {
            text: 'Project', items: [
              { text: 'NPM包', link: '/docs/project/npm/npm.md' },
            ]
          },
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KilianShen' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Kilian Shen'
    },
    editLink: {
      pattern: 'https://github.com/KilianShen/KilianShen.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
  }
})
