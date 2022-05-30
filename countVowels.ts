//count vowels and consonants in string

const str = 'programming'

const vowels = ['a', 'e', 'i', 'o', 'u']
const vObj = { a: 0, e: 1, i: 2, o: 3, u: 4 }

console.time('forLoop')
const count = str
  .split('')
  .reduce((acc: number, cur: string, i: number, arr: string[]) => {
    for (let i = 0; i < vowels.length; i++) {
      if (cur === vowels[i]) {
        acc++
        break
      }
    }
    return acc
  }, 0)
console.timeEnd('forLoop') //133ms
console.log(count)

console.time('hasProperty')
const { v, c } = str.split('').reduce(
  (acc: { v: number; c: number }, cur: string) => {
    vObj.hasOwnProperty(cur) ? acc.v++ : acc.c++
    return acc
  },
  { v: 0, c: 0 }
)
console.timeEnd('hasProperty') //37ms

console.log(v, c)

console.time('slickLoop')
let consonants = 0,
  vow = 0
for (let k = 0; k < str.length; k++) {
  const c = str.charAt(k)
  c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'
    ? vow++
    : consonants++
}
console.timeEnd('slickLoop') //11ms
console.log(vow, consonants)
