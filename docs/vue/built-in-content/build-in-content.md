# 内置内容

## CSS 中的 `v-bind()`
除了标签内属性的单向绑定,单文件组件的 `<style>` 标签支持使用 `v-bind` CSS 函数将 CSS 的值链接到动态的组件状态。
``` vue
<script lang='ts' setup>
import { reactive, toRefs } from "vue";

let red = ref("#f00");
let obj = reactive({
  blue: "#00f",
});
</script>
    
<style lang="scss" scoped>
.box{
  border: 2px solid v-bind("red");
  background: v-bind("obj.blue");
}
</style>
```