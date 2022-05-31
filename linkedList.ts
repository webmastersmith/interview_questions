// create linked list
const arr = [5, 6, 4]

//create linked list: { value: 5, next: { value: 6, next: { value: 4, next: null } } }
let ll = arr.reduceRight((next: any, value) => ({ value, next }), null)
console.log(ll)

//extract linked list into array.
const llArr = [ll.value]
while (ll.next !== null) {
  ll = ll.next
  llArr.push(ll.value)
}

console.log(llArr)
