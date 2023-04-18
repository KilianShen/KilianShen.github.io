# 实用函数
本章记录一些常用、实用的函数，用于解决常见问题。

## 手机号、证件号、姓名等中间隐藏
```js
var str =  "12300006789";
var reg = /^(\d{3})\d+(\d{4})$/;
str = str.replace(reg, "$1 **** $2");  // 123 **** 6789

"张三".replace(/^(.{1})(.{1})(.*)$/, "$1*$3");// 张*
"王老五".replace(/^(.{1})(.{1})(.*)$/, "$1*$3");// 王*五
"欧阳铁柱".replace(/^(.{1})(.{1})(.*)$/, "$1*$3");// 欧*铁柱
```

## 对象数组按某属性进行分组
```js
let list = [
    { fldm: 'AAA', value: 'value1', count: 1 },
    { fldm: 'AAA', value: 'value2', count: 2 },
    { fldm: 'AAA', value: 'value3', count: 3 },
    { fldm: 'BBB', value: 'value4', count: 4 },
    { fldm: 'BBB', value: 'value5', count: 5 },
    { fldm: 'CCC', value: 'value6', count: 6 },
];
const m = new Map();
list.map((item) =>
    m.set(item.fldm, [...(m.get(item.fldm) || ''), item]));
const group = Object.fromEntries(m.entries());
console.log('group: \n', group);
// group: 
//  {
//   AAA: [
//     { fldm: 'AAA', value: 'value1', count: 1 },
//     { fldm: 'AAA', value: 'value2', count: 2 },
//     { fldm: 'AAA', value: 'value3', count: 3 }
//   ],
//   BBB: [
//     { fldm: 'BBB', value: 'value4', count: 4 },
//     { fldm: 'BBB', value: 'value5', count: 5 }
//   ],
//   CCC: [ { fldm: 'CCC', value: 'value6', count: 6 } ]
// }
```