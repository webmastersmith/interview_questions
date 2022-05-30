//check if two strings are anagrams (same letters to make two different words)
const str1 = 'cinema'
// const str2 = 'iceman'
const str2 = 'icemin'

if (str1.length === str2.length) {
  const arr1 = str1.toLowerCase().split('').sort()
  const arr2 = str2.toLowerCase().split('').sort()

  arr1.every((char, i) => char === arr2[i])
    ? console.log('anagram')
    : console.log('not anagram')
} else {
  console.log('not anagram')
}
