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
      { text: 'Docs', link: '/docs/js/built-in-objects/built-in-objects.md' }
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
          {
            text: 'React', link: '/docs/react/index.md', items: [
              { text: 'Hooks', link: '/docs/react/hooks/hooks.md' },
            ]
          },
          {
            text: 'Vue', link: '/docs/vue/index.md', items: [
              { text: '内置内容', link: '/docs/vue/built-in-content/build-in-content.md' }
            ]
          },
          { text: 'Flutter', link: '/docs/flutter/index.md' },
          {
            text: 'Project', items: [
              { text: 'NPM包', link: '/docs/project/npm/npm.md' },
              { text: '管理工具', link: '/docs/project/manage/manage.md' },
            ]
          },
          // { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KilianShen' }
    ],
    editLink: {
      pattern: 'https://github.com/KilianShen/KilianShen.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'local'
    }
  }
})
