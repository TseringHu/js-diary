const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    status = PENDING

    value = null

    reason = null

    onFulfilledCallBack = []
    onRejectedCallBack = []

    resolve = (value) => {
        if (this.status === PENDING) {
            this.value = value
            this.status = FULFILLED

            while (this.onFulfilledCallBack.length) {
                this.onFulfilledCallBack.shift()(value)
            }
        }
    }

    reject = (reason) => {
        if (this.status === PENDING) {
            this.reason = reason
            this.status = REJECTED

            while (this.onRejectedCallBack.length) {
                this.onRejectedCallBack.shift()(reason)
            }
        }
    }

    static resolve(parameter) {
        if (parameter instanceof MyPromise) {
            return parameter
        }
        return new MyPromise(resolve => {
            resolve(parameter)
        })
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }

    then = (onFulfilled, onRejected) => {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }


        const promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                queueMicrotask(() => {
                    try {
                        // 获取成功回调函数的执行结果
                        const x = onFulfilled(this.value);
                        // 传入 resolvePromise 集中处理
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }

                })


            } else if (this.status === REJECTED) {
                queueMicrotask(() => {
                    try {
                        onRejected(this.reason)
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.status === PENDING) {
                this.onFulfilledCallBack.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onFulfilled(this.value);
                            // 传入 resolvePromise 集中处理
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    })
                })

                this.onRejectedCallBack.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onRejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
        })

        return promise2

    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if (x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        resolve(x)
    }
}

module.exports = MyPromise