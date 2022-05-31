const str = 'Madam'

console.time('1')
const rStr = str
  .split('')
  .map((char: string, i: number, arr: string[]) => arr[arr.length - (i + 1)])
  .join('')
console.timeEnd('1')
console.log(rStr)

console.time('2')
const splitStr = str.split('')
const arr = []
for (let i = str.length - 1; i >= 0; i--) {
  arr.push(splitStr[i])
}
const rStr2 = arr.join('')
console.timeEnd('2')
console.log(rStr2)

console.time('reduceRight')
const rStr3 = str
  .split('')
  .reduceRight((acc: string[], cur: string) => {
    acc.push(cur)
    return acc
  }, [])
  .join('')
console.timeEnd('reduceRight')
console.log('str3', rStr3)

if (str.toLowerCase() === rStr.toLowerCase()) {
  console.log('palindrome')
} else {
  console.log('not palindrome')
}
