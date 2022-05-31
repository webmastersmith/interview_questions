//count characters in string

function countChar(str: string, char: string) {
  let nums = 0

  for (let i = 0; i < str.length; i++) {
    if (char === str.charAt(i)) {
      nums++
    }
  }
  return nums
}

const str = 'Peeps'

console.log(countChar(str, 'e'))
