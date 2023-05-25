
const o = {"a": 10, "b": 2, "c": "xy"}

const a = Object.values(o)

const arr = Array.from(Array(10).keys())

console.log(Object.fromEntries(arr.map(i => [`p${i}`,i])))
console.log(a)
console.log(o)