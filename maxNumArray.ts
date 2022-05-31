// find max number in array

const max = [10, 1, 100, 50, 800, 9].reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  0
)
console.log(max)
