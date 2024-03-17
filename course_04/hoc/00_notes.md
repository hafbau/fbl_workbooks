Higher Order Functions
---

## Agenda

- [x] Why HOCs
- [ ] What they are
- [ ] Why are they possible
- [ ] Examples
- [ ] Built-in array methods


### Why Higher Order Functions

```js
const nums = [2, 5, 6, 7]

const sum = (arr) => {
  let sum;
  for (const num of arr) {
    if (!sum) {
      sum = num;
      continue;
    }
    sum = sum + num
  }
  return sum;
}

const product = (arr) => {
  let prod;
  for (const num of arr) {
    if (prod === undefined) {
      prod = num;
      continue;
    }
    prod = prod * num
  }
  return prod;
}

const calculateProductOfTwoNums = (a, b) => a * b;
const calculateSumOfTwoNums = (a, b) => a + b;

// This type of processing is of aggregation type
// reduction
const processorHOF = (operationFn, arr) => {
  let result;
  for (const num of arr) {
    if (result === undefined) {
      result = num;
      continue;
    }
    result = operationFn(result, num);
  }
  return result;
}

const summation = processorHOC(calculateSumOfTwoNums, nums)
```

### HOF

- takes another function(s) as argument
- returns a function (currying)


```js
// The case for filtering
const numbers = [2, 3, 4, 5, 6, 9]

// even numbers ====> [2, 4, 6]
const filterEven = (arr) => {
  // create empty array for filtered number
  const evenNums = [];
  // loop through the array of numbers
  for (const num of arr) {
    // for each number in the array, check if number is even
    if (num % 2 === 0) {
      // if even, add to filtered array
      evenNums.push(num);
    } else if (odd) {

    } else if (prime) {

    } else if (multiplesOf5) {

    } else if ()
    // otherwise continue
  }
  // return filtered array
  return evenNums
}

filterEven([1, 2, 3]); // [2]

// Filteration HoF
const filterStuff = (arrOfStuff, filterFn) => {
  // create empty array for filtered number
  const filtered = [];
  // loop through the array of numbers
  for (const item of arr) {
    // for each number in the array, check if number is even
    if (filterFn(item)) {
      // if even, add to filtered array
      filtered.push(item);
    }
    // otherwise continue
  }
  // return filtered array
  return filtered
}

const filterEvenFn = (num) => num % 2 === 0
// const filterEvenFn = (num) => !num % 2

filterStuff(numbers, filterEvenFn);// [2, 4, 6]
filterStuff(numbers, (num) => num % 2 === 0);

// multiples of 3
filterStuff(numbers, (num) => num % 3 === 0);

// filter for consonants
filterStuff(['a', 'b', 'c', 'E'], (letter) => !'aeiou'.includes(letter.toLowerCase()))

// randomly filter
filterStuff(
  [
    {id: 'org-1', name: 'We are numba one', brandColor: 'Maroon Not 5'},
    {id: 'org-2', name: 'We are numba two', brandColor: 'Tomato'},
    {id: 'org-3', name: 'We are numba tiri', brandColor: 'Teal'},
  ],
  () => Boolean(Math.floor(Math.random() * 2))
)
```