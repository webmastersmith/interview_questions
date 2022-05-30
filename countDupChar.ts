const str = 'programming'

// split string into arr
const strArr = str.split('')

console.time('for loop')
const obj: any = {}
for (let i = 0; i < strArr.length; i++) {
  if (!obj.hasOwnProperty(strArr[i])) {
    obj[strArr[i]] = 1
  } else {
    obj[strArr[i]]++
  }
}
console.timeEnd('for loop') //108ms
console.log('obj', obj)

console.time('reduce')
const res = strArr.reduce((acc: any, cur: string) => {
  if (acc.hasOwnProperty(cur)) {
    acc[cur]++
    return acc
  } else {
    acc[cur] = 1
    return acc
  }
}, {})
console.timeEnd('reduce') //50ms

console.log('res', res)

const matching = Object.entries(res).reduce((acc: string[], cur: any) => {
  const [key, value] = cur
  if (+value > 1) {
    acc.push(key)
  }
  return acc
}, [])
const notMatching = Object.entries(res).reduce((acc: string[], cur: any) => {
  const [key, value] = cur
  if (+value === 1) {
    acc.push(key)
  }
  return acc
}, [])

console.log(matching)
console.log(notMatching)
