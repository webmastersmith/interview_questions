//function that adds numbers in array and give back a summed reversed list
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function arrayToLinkedList(a: number[]) {
  return a.reduceRight(
    (next: ListNode | null, val: number) => ({ val, next }),
    null
  ) as ListNode
}

function linkedListToArray(ll: ListNode) {
  const arr = [ll.val]
  while (ll.next !== null) {
    ll = ll.next
    arr.push(ll.val)
  }
  return arr
}

function addTwoLinkedList(ll1: ListNode, ll2: ListNode) {
  const arr1 = linkedListToArray(ll1).reverse()
  const arr2 = linkedListToArray(ll2).reverse()

  const num1 = BigInt(arr1.join(''))
  const num2 = BigInt(arr2.join(''))

  const numArr = (num1 + num2)
    .toString()
    .split('')
    .reverse()
    .map((el) => +el)

  return arrayToLinkedList(numArr)
}
console.log(JSON.stringify(arrayToLinkedList([2, 4, 9]), null, 2))
console.log(
  JSON.stringify(
    addTwoLinkedList(
      arrayToLinkedList([2, 4, 9]),
      arrayToLinkedList([5, 6, 4, 9])
    ),
    null,
    2
  )
)
console.log(
  JSON.stringify(
    addTwoLinkedList(arrayToLinkedList([0]), arrayToLinkedList([0])),
    null,
    2
  )
)
console.log(
  JSON.stringify(
    addTwoLinkedList(
      arrayToLinkedList([9, 9, 9, 9, 9, 9, 9]),
      arrayToLinkedList([9, 9, 9, 9])
    ),
    null,
    2
  )
)
console.log(
  JSON.stringify(
    addTwoLinkedList(
      arrayToLinkedList([
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ]),
      arrayToLinkedList([5, 6, 4])
    ),
    null,
    2
  )
)
