# JavaScript 标准内置对象
本章包含部分 JavaScript 中所有的标准内置对象、以及它们的方法和属性。

## **[toLocaleString( locales, options )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)**
返回这个数字在特定语言环境下的表示字符串。新的 `locales` 和 `options` 参数让应用程序可以指定要进行格式转换的语言，并且定制函数的行为。

### **参数**
**locales**：可选，表示要转为目标语言的类型。

**options**：可选，配置属性对象。

- style:数字展示样式

- currency: 当 **options.style为currency** 时，**options.currency** 用来表示货币单位的类型

- currencyDisplay：如何在货币格式化中显示货币. 可能的值有 `"symbol"` 表示使用本地化的货币符号，例如 ￥, `"code"` 表示使用国际标准组织货币代码，例如CNY, `"name"` 表示使用本地化的货币名称。

- minimumFractionDigits：使用的小数位数的最小数目.可能的值是从 0 到 20；默认2；纯数字格式的默认值是`minimumfractiondigits` 和 3 中大的那一个；

- maximumFractionDigits：使用的小数位数的最大数目。可能的值是从 0 到 20；默认2;

- useGrouping：是否使用分组分隔符，如千位分隔符或千/万/亿分隔符。可能的值是 true 和 false，默认值是 true；

| style 字段值 | 说明                 |
| ------------ | -------------------- |
| decimal      | 用于纯数字格式(默认) |
| currency     | 用于货币格式         |
| percent      | 用于百分比格式       |

| currency 字段值 | 说明           |
| --------------- | -------------- |
| USD             | 美元格式(默认) |
| EUR             | 欧元格式       |
| CNY             | 人民币格式     |

### 示例
```js
//  1、将数字进行千分位切割展示
const num1 = 1234567890.1234;
num1.toLocaleString(); // 1,234,567,890.123
// 保留小数位数
num1.toLocaleString("zh", { maximumFractionDigits: 2 }); 
// 1,234,567,890.12

// 2、将数字转为货币样式
const num2 = 123456.789;
num2.toLocaleString("zh", { style: "currency", currency: "CNY" }); 
//¥123,456.79

num2.toLocaleString("zh", {
  style: "currency",
  currency: "CNY",
  currencyDisplay: "symbol",
  minimumFractionDigits: 3,
}); 
// ¥123,456.789

num2.toLocaleString("zh", {
  style: "currency",
  currency: "CNY",
  currencyDisplay: "code",
}); 
// CNY 123,456.79

num2.toLocaleString("zh", {
  style: "currency",
  currency: "CNY",
  currencyDisplay: "name",
}); 
// 123,456.79人民币

// 3、将数字转为百分比形式
const num3 = 0.12345;
num3.toLocaleString("en", { style: "percent" }); // 12%
num3.toLocaleString("en", { style: "percent", maximumFractionDigits: 3 }); 
//  12.345%
```


## [JSON](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)

### JSON.parse(text[, reviver])

`text`: 要被解析成 JavaScript 值的字符串。
`reviver` :可选。转换器，如果传入该参数 (函数)，可以用来修改解析生成的原始值，调用时机在 parse 函数返回之前。

```js
const str = '{"a":1,"b":2}';
JSON.parse(str); //{ a: 1, b: 2 }
JSON.parse(str, (key, value) => key === 'a' ? value * 2 : value);  
//{ a: 2, b: 2 }
```

### JSON.stringify(value[, replacer [, space]])

`value`:将要序列化成 一个 JSON 字符串的值。

`replacer`: 可选。如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。

`space`： 可选。指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为 10。该值若小于 1，则意味着没有空格；如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格。

```js
const obj = { a: 1, b: 2, c: null, d: '', e: undefined };
console.log(JSON.stringify(obj)); //{"a":1,"b":2,"c":null,"d":""}
console.log(JSON.stringify(obj, null, 2));
//{
//  "a": 1,
//  "b": 2,
//  "c": null,
//  "d": ""
//}
console.log(JSON.stringify(obj, ['a'], 2));
//{
//  "a": 1
//}
console.log(JSON.stringify(obj, (key, value) => value ? value : undefined, 2));
//{
//  "a": 1,
//  "b": 2
//}
```

## [Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
Array.from() 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。

`arrayLike`:想要转换成数组的类数组或可迭代对象。

`mapFn`:可选。*(item,index) => void;* 调用数组每个元素的函数。如果提供，每个将要添加到数组中的值首先会传递给该函数，然后将 mapFn 的返回值增加到数组中。

`thisArg`:可选执行 mapFn 时用作 this 的值。

```js
// 通过字符串创建一个数组：
Array.from('HELLO')// ['H', 'E', 'L', 'L', 'O']

// 从 Set 构建数组
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

// 生成一个数字序列
// 因为数组在每个位置都使用 `undefined` 初始化，
// 下面的 `v` 值将是 `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]

// React中使用fill填充时key重复
const item = Array(10).fill(<div></div>);
const item = Array.from({ length: 10 }, (_, idx) => {
  return <div key={idx}></div>;
});
```