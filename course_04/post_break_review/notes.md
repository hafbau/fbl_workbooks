Review
---

- [] fbl content/direction
- [] HOF - what
- [] HOF - builtin array methods

## regular katas - Option
- release practice questions every Sunday to be done by end of day Friday


## Higher Order Functions

- A body of code should do one thing:: Single Responsibility Principle
- Open / Close principle

### Array.map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

- transformation of all items in an array to new items.
- calls a transformation fn on all items in the array and returns the newly transformed array
- the length of input array MUST be the same as length of output array

```js
const names = ['hafiz', 'bode', 'jubilation', 'lukman'];
// Return array of the number of characters in each name of names
// Expected output: [5, 4, 10, 6]
const nameCharCounts = names.map((currentItem, currentIndex, originalArray) => {
  // return 'nada'
  console.log('This is not a return value')
})
```

### Array.forEach

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

### Array.filter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

### Array.reduce

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

- what is reduction?
  - literarily reduce from a collection to a single value
  - reduce to a different data structure
  - reducing from a collection to a different version of the collection e.g
    - array of 10 items reduced to array of 2 items. Input items may or may not be of the same data type
    - reducing from 10 items to 200 items
    - reducing from 10 to 10