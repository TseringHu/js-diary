// 布尔类型
const isDone: boolean = false

// 数字类型 支持 十进制 二进制 八进制 十六进制
const num10: number = 10
const num2: number = 0b1010
const num8: number = 0o744
const num16: number = 0xf00d

// 字符串
const str: string = '1'
const str1: string = "1"
const str2: string = `1`

// 数组
const arrNum: number[] = [1]
const arrNum1: Array<number> = [1]

const arrStr: Array<string> = ['1']
const arrStr1: Array<string> = ['1']

const arrObj: Array<object> = [{ a: 1 }]
const arrObj1: Array<object> = [{ a: 1 }]

// 元组 Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为string和number类型的元组

let x:[string, number];

x = ['123456', 2]

// console.log(x[0].substr(1))

// console.log(x[1].substr(1)) // 类型“number”上不存在属性“substr”。

// x[3] = '11111' // 长度为 "2" 的元组类型 "[string, number]" 在索引 "3" 处没有元素。
// console.log(x[3]) // 长度为 "2" 的元组类型 "[string, number]" 在索引 "3" 处没有元素。

// console.log(x[5].toString()) // 长度为 "2" 的元组类型 "[string, number]" 在索引 "5" 处没有元素

// x[6] = true // 不能将类型“true”分配给类型“undefined”


// 枚举
enum Color { Red = 1, Green = 3, Blue = 2 }

let c: Color = Color.Green

let colorName: string = Color[3]

console.log('colorName :>> ', colorName)

// 任意值：any

let notSure: any = 4

notSure = '1'

// notSure = false

// notSure.ifItExists() // notSure.ifItExists is not a function

// notSure.toFixed() // notSure.toFixed is not a function

const arrAny: any[] = [1, '2', false]
arrAny[1] = true


// 空值: void
function warnUser(): void {
    console.log('warnUser')
}

// Null 和 Undefined 类型
let u: undefined = undefined;
let n: null = null;


// Never 类型

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}


// 类型断言

let someValue: any = 'this is a string'

// 类型断言有两种形式。 其一是“尖括号”语法
// let strLength: number = (<string>someValue).length

// 另一个为as语法：
let strLength: number = (someValue as string).length;

console.log('strLength :>> ', strLength)