const arr = new Array(100000)
const len = arr.length

console.log('forEach :>> ')
console.time()
arr.forEach(() => {})
console.timeEnd()

console.log('map :>> ')
console.time()
arr.map(() => {})
console.timeEnd()

console.log('of :>> ')
console.time()
for (let i of arr){}
console.timeEnd()

console.log('++ :>> ')
console.time()
for (let i = 0; i < len; i++) {}
console.timeEnd()

console.log('-- :>> ')
console.time()
for (let i = len; i > 0; i--) {}
console.timeEnd()