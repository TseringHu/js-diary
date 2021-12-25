"use strict";
// 布尔类型
const isDone = false;
// 数字类型 支持 十进制 二进制 八进制 十六进制
const num10 = 10;
const num2 = 0b1010;
const num8 = 0o744;
const num16 = 0xf00d;
// 字符串
const str = '1';
const str1 = "1";
const str2 = `1`;
// 数组
const arrNum = [1];
const arrNum1 = [1];
const arrStr = ['1'];
const arrStr1 = ['1'];
const arrObj = [{ a: 1 }];
const arrObj1 = [{ a: 1 }];
// 元组 Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为string和number类型的元组
let x;
x = ['123456', 2];
// console.log(x[0].substr(1))
// console.log(x[1].substr(1)) // 类型“number”上不存在属性“substr”。
// x[3] = '11111' // 长度为 "2" 的元组类型 "[string, number]" 在索引 "3" 处没有元素。
// console.log(x[3]) // 长度为 "2" 的元组类型 "[string, number]" 在索引 "3" 处没有元素。
// console.log(x[5].toString()) // 长度为 "2" 的元组类型 "[string, number]" 在索引 "5" 处没有元素
// x[6] = true // 不能将类型“true”分配给类型“undefined”
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
let colorName = Color[3];
console.log('colorName :>> ', colorName);
// 任意值：any
let notSure = 4;
notSure = '1';
// notSure = false
// notSure.ifItExists() // notSure.ifItExists is not a function
// notSure.toFixed() // notSure.toFixed is not a function
const arrAny = [1, '2', false];
arrAny[1] = true;
// 空值: void
function warnUser() {
    console.log('warnUser');
}
// Null 和 Undefined 类型
let u = undefined;
let n = null;
// Never 类型
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// 类型断言
let someValue = 'this is a string';
// 类型断言有两种形式。 其一是“尖括号”语法
// let strLength: number = (<string>someValue).length
// 另一个为as语法：
let strLength = someValue.length;
console.log('strLength :>> ', strLength);
