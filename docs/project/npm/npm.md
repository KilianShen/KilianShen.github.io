# 实用高效的NPM包

## 样式框架与组件

### [styled-components](https://styled-components.com/)
在组件和样式之间架起桥梁的 CSS-in-JS 工具，提供了大量的特性，让你以一种功能性和可重用的方式启动和运行样式组件。

### [echarts-for-react](https://www.npmjs.com/package/echarts-for-react)
最简单最好的ECharts封装组件。支持按需引入。

### [swiper](https://swiperjs.com/migration-guide-v9)
Swiper是免费，最现代的移动触摸滑块，具有硬件加速过渡和惊人的本地行为。它旨在用于移动网站，移动Web应用程序和移动本机/混合应用程序中。

### [react-activation](https://www.npmjs.com/package/react-activation)
Vue 中 <keep-alive /> 功能在 React 中的实现。
::: tip
建议关注 React 18.x 中的官方实现 `<Offscreen />`
:::

### [react-error-boundary](https://www.npmjs.com/package/react-error-boundary)
可复用的React错误边界组件。支持所有Reaction渲染器(包括Reaction DOM和Reaction Native),避免项目中的错误导致白屏。

### [react-markdown](https://www.npmjs.com/package/react-markdown)
渲染markdown文件

### [@codesandbox/sandpack-react](https://sandpack.codesandbox.io/)
提供在浏览器中运行的可编辑sandboxes的强大功能的react组件

## 数据处理

### [@reduxjs/toolkit](https://redux-toolkit.js.org/)
Redux Toolkit 是 Redux 官方强烈推荐，开箱即用的一个高效的 Redux 开发工具集。可以简化最常见场景下的 Redux 开发，包括配置 store、定义 reducer，不可变的更新逻辑、甚至可以立即创建整个状态的 “切片 slice”，而无需手动编写任何 action creator 或者 action type。它还自带了一些最常用的 Redux 插件，例如用于异步逻辑 Redux Thunk，用于编写选择器 selector 的函数 Reselect。

### [lodash-es](https://www.npmjs.com/package/lodash-es)
lodash为了良好的浏览器兼容性, 它使用了旧版es5的模块语法; 而lodash-es则使用了es6的模块语法, 这让webpack之类的打包工具可以对其进行tree shake以删除为使用的代码来优化打包尺寸。

### [crypto-js](https://github.com/brix/crypto-js)
加密标准的JavaScript库。

### [dayjs](https://day.js.org/zh-CN/)
Moment.js 的 2kB 轻量化方案，拥有同样强大的 API

### [nanoid](https://github.com/ai/nanoid#readme)
一个小巧、安全、URL友好、唯一的 JavaScript 字符串ID生成器。


## CLI 和调试工具

### [vconsole](https://www.npmjs.com/package/vconsole)
一个轻量、可拓展、针对手机网页的前端开发者调试面板。vConsole 是框架无关的，可以在 Vue、React 或其他任何框架中使用。

## 构建工具及插件

### [vite-plugin-eslint](https://www.npmjs.com/package/vite-plugin-eslint)
用于VITE的ESLint插件
#### 用法:
``` js
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
export default defineConfig({
  plugins: [
       eslintPlugin({
        include: ['src/**/*.ts', 'src/*.ts', 'src/**/*.tsx', 'src/*.tsx'],
      }),
    ],
})
```

### [vite-plugin-zip-pack](https://www.npmjs.com/package/vite-plugin-zip-pack)
可用于vite打包后自动压缩打包文件成zip。
#### 用法:
此处引入vite运行时环境变量控制不同环境下打包配置。

::: code-group

``` ts [config.ts]
import { defineConfig } from 'vite'
import zipPack from 'vite-plugin-zip-pack';
export default ({ mode }) => { 
  return defineConfig({
     plugins: [
      zipPack({
        inDir: mode === 'prod' ? 'build/prod/dist' : 'build/dev/dist',
        outDir: mode === 'prod' ? 'build/prod/' : 'build/dev/',
      }),
    ],
  })
}
``` 

``` json [package.json]
{
  // ...
   "scripts": {
    "dev": "vite --mode dev",
    "dev-prod": "vite --mode prod",
  }
  // ...
}
```

### [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)
使用标准commit生成changelog标准化

### [rollup-plugin-visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer)
可视化并分析打包文件，以查看哪些模块占用多少空间，便于优化项目打包。

### [depcheck](https://www.npmjs.com/package/depcheck)
Depcheck 是一个工具，用于分析项目中的依赖项以查看：如何使用每个依赖项，哪些依赖项无用，以及 package.json 中缺少哪些依赖项。





