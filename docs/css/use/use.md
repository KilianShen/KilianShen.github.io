# 应用

## [媒体查询 `@media`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media)
### 媒体类型
| 值     | 描述                                                 |
| ------ | ---------------------------------------------------- |
| all    | 适用于所有设备。                                     |
| print  | 适用于在打印预览模式下在屏幕上查看的分页材料和文档。 |
| screen | 主要用于屏幕。                                       |

Media Queries Level 4 引入了一种新的范围语法，在测试接受范围的任何特性时允许更简洁的媒体查询，如下面的示例所示：
```css
@media (400px <= width <= 700px) {
  body {
    line-height: 1.4;
  }
}
```
@media 可以针对不同的屏幕尺寸设置不同的样式，这在设计响应式的页面会非常有用。


例：不同屏幕尺寸下的grid布局
```css
.grid {
  position: relative;
  display: grid;
  @media only screen and (max-width: 580px) {
    --columns-count: 2;
    --columns-width: 48%;
  }
  @media only screen and (min-width: 580px) and (max-width: 1130px) {
    --columns-count: 3;
    --columns-width: 32%;
  }
  @media only screen and (min-width: 1130px) {
    --columns-count: 6;
    --columns-width: 16%;
  }
  grid-template-columns: repeat(var(--columns-count), var(--columns-width));
  grid-column-gap: calc((100% - var(--columns-width) * var(--columns-count)) / (var(--columns-count) - 1));
}
```