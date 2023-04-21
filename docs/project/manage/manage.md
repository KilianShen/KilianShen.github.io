# 项目管理工具

## [NVM](https://github.com/coreybutler/nvm-windows)
用于Windows的Node.js版本管理器。
```shell
nvm install 16.18.0
nvm list
nvm use 16.18.0
nvm uninstall 16.18.0
// 设置node镜像
nvm node_mirror [url]
// 设置npm镜像
nvm npm_mirror [url]
```

## [pnpm](https://www.pnpm.cn/)
速度快、节省磁盘空间的软件包管理器
### 常用CLI命令
| 命令      | 功能                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------- |
| pnpm i    | 下载依赖 (执行前删除lock文件)                                                                      |
| pnpm init | 创建一个package.json文件。                                                                         |
| pnpm up   | 根据指定范围将包更新为其最新版本<br>(-L:忽略package中指定的范围; -i: 以互动形式选择是否更新)       |
| pnpm add  | 添加依赖 ，默认添加到生产依赖项,可配置提交到 开发依赖性或全局<br>(-D:添加到开发依赖性;-g:全局安装) |
| pnpm rm   | 从 node_modules 目录下和 package.json 文件中删除软件包                                             |
| pnpm env  | 管理Node.js环境。                                                                                  |

## [vite](https://cn.vitejs.dev/)
一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。
### 静态资源处理
字符串模板支持动态 URL
``` ts
function getAssets(url: string): string {
  return new URL(`/src/assets/${url}`, import.meta.url).href;
}
```

### 共享选项
- base
  开发或生产环境服务的公共基础路径。合法的值包括以下几种：
  - 绝对 URL 路径名，例如 /dist/,对应上线后https://github.com/dist/
  - 完整的 URL，例如 https://github.com/
  - 空字符串或 ./（用于嵌入形式的开发）
  
- resolve.alias
  ```ts [vite.config.ts]
  resolve: {
    alias: {
      '@': '/src',
    },
  }
  ```

- esbuild
   vite默认使用esbuild构建，可进行相关配置，如生产移除打印：
   ```ts [vite.config.ts]
   esbuild: {
     drop: ['console', 'debugger'],
   }
   ```

### 服务器选项

```ts [vite.config.ts]
server: {
  host: '192.168.84.37',
  port: 4173,
  proxy: {
    // 接口地址代理
    '/api': {
      target:'https://text.cn',
      secure: true, // 如果是https接口，需要配置这个参数
      changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
    }
  },
}
 ```


### 构建选项
- build.target
  设置最终构建的浏览器兼容目标。
  ```ts [vite.config.ts]
  build:{
    target:['es2020', 'firefox78', 'chrome75']
  }
  ```
- build.outDir
  指定输出路径（相对于项目根目录）。
  ```ts [vite.config.ts]
  build:{
    outDir: 'build/dist',
  }
  ```
