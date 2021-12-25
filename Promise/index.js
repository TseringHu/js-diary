const MyPromise = require('.')

// const promise = new MyPromise((resolve, reject) => {
//     resolve(1)
//     reject(2)
// })

// promise.then((res) => {
//     console.log('res :>> ', res)
// }, (err) => {
//     console.log('err :>> ', err)
// })

// const promise1 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 2000)
// })

// promise1.then((res) => {
//     console.log('res :>> ', res)
// }, (err) => {
//     console.log('err :>> ', err)
// })


// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 2000);
// })

// promise.then(value => {
//     console.log(1)
//     console.log('resolve1', value)
// })

// promise.then(value => {
//     console.log(2)
//     console.log('resolve2', value)
// })

// promise.then(value => {
//     console.log(3)
//     console.log('resolve3', value)
// })


// const promise = new MyPromise((resolve, reject) => {
//     // 目前这里只处理同步的问题
//     resolve('success')
// })

// function other() {
//     return new MyPromise((resolve, reject) => {
//         resolve('other')
//     })
// }
// promise.then(value => {
//     console.log(1)
//     console.log('resolve', value)
//     return other()
// }).then(value => {
//     console.log(2)
//     console.log('resolve', value)
// })


// const promise = new MyPromise((resolve, reject) => {
//     resolve(100)
// })

// const p1 = promise.then(value => {
//     console.log(value)
//     return p1
// })


// const promise = new MyPromise((resolve, reject) => {
//     resolve('success')
// })

// // 这个时候将promise定义一个p1，然后返回的时候返回p1这个promise
// const p1 = promise.then(value => {
//     console.log(1)
//     console.log('resolve', value)
//     return p1
// })

// // 运行的时候会走reject
// p1.then(value => {
//     console.log(2)
//     console.log('resolve', value)
// }, reason => {
//     console.log(3)
//     console.log(reason.message)
// })


// const promise = new MyPromise((resolve, reject) => {
//     // resolve('success')
//     throw new Error('执行器错误')
// })

// promise.then(value => {
//   console.log(1)
//   console.log('resolve', value)
// }, reason => {
//   console.log(2)
//   console.log(reason.message)
// })


// const promise = new MyPromise((resolve, reject) => {
//     resolve('success')
//     // throw new Error('执行器错误')
// })

// // 第一个then方法中的错误要在第二个then方法中捕获到
// promise.then(value => {
//     console.log(1)
//     console.log('resolve', value)
//     throw new Error('then error')
// }, reason => {
//     console.log(2)
//     console.log(reason.message)
// }).then(value => {
//     console.log(3)
//     console.log(value);
// }, reason => {
//     console.log(4)
//     console.log(reason.message)
// })


// const promise = new MyPromise((resolve, reject) => {
//     resolve('success')
// })

// promise.then().then().then(value => console.log(value))


// const promise = new MyPromise((resolve, reject) => {
//     reject('err')
// })

// promise.then().then().then(value => console.log(value), reason => console.log(reason))

MyPromise.resolve().then(() => {
    console.log(0);
    return MyPromise.resolve(4);
}).then((res) => {
    console.log(res)
})
