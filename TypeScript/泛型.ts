function identity<T>(arg: T): T {
    return arg
}

function loggingIdentity<T>(arg: T[]): T[] {
    console.log('arg.length :>> ', arg.length)
    return arg
}

function loggingIdentity1<T>(arg: Array<T>): Array<T> {
    console.log('arg.length :>> ', arg.length)
    return arg
}

// 使用不同的泛型参数名
// const myIdentity: <U>(arg: U) => U = identity

// 使用带有调用签名的对象字面量来定义泛型函数
// const myIdentity: { <U>(arg: U): U } = identity

// 泛型接口
// interface GenericIdentityFn {
//     <T>(arg: T): T
// }

// const myIdentity: GenericIdentityFn = identity

// 我们可能想把泛型参数当作整个接口的一个参数
// interface GenericIdentityFn<T> {
//     <T>(arg: T): T
// }

// 这里给接口传一个参数 number
// const myIdentity: GenericIdentityFn<number> = identity


// 泛型类

// class GenericNumber<T> {
//     zeroValue?: T
//     add?: (x: T, y: T) => T
// }

// let myGenericNumber = new GenericNumber<number>()
// myGenericNumber.zeroValue = 0
// myGenericNumber.add = (x: number, y: number) => x + y

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "123";
// stringNumeric.add = function(x, y) { return x + y; };

// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"))

// 泛型约束
// interface Lengthwise {
//     length: number
// }

// function loggingIdentity2<T extends Lengthwise>(arg: T ): T {
//     console.log('arg.length :>> ', arg.length)
//     return arg
// }

// loggingIdentity2('1')

// 在泛型约束中使用类型参数
// function getProperty<T, K extends keyof T>(obj: T, key: K):any {
//     return obj[key]
// }

// let x1 = { a: 1, b: 2, c: 3, d: 4 }


// console.log(getProperty(x1, 'a'))
// console.log(getProperty(x1, 'm')) // 类型“"m"”的参数不能赋给类型“"a" | "b" | "c" | "d"”的参数。

// 在泛型里使用类类型
function create<T>(c: { new(): T }): T {
    return new c()
}

// 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系
class BeeKeeper {
    hasMask?: boolean;
}

class ZooKeeper {
    nametag?: string
}

class Animal {
    numLegs?: number
}

class Bee extends Animal {
    keeper?: BeeKeeper
    // extends 之后有 numlegs 
}

class Lion extends Animal {
    keeper!: ZooKeeper
    // extends 之后有 nametag 
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

// console.log('createInstance(Lion).keeper?.nametag :>> ', createInstance(Lion).keeper?.nametag)


// createInstance(Bee).keeper.hasMask;   // typechecks!