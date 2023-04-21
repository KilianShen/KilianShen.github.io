# vue
## vue3
Vue3 广泛地使用了Typescript，包括响应性机制在内的许多方面都从头开始。这使得Vue 3在数据包大小、初始渲染、更新和内存使用方面的性能得到了明显的改善。
此外，还增加了很多新的功能。
- Composition API
- 语法糖 `<script setup>`
- Fragments
- Emits Component Option
- 来自@vue/runtime-core的createRenderer API可以创建自定义渲染器
- style 里面可以绑定变量
- SFC的`<style scoped>`现在可以包括全局规则或只针对插槽内容的规则
- Suspense

## 注意点
- Events API被摒弃。Vue实例不能再用作事件总线，但有即插即用的解决方案，如 mitt。
- 在setup中使用Composition API，要尽可能优雅的组织代码，避免难以维护。
