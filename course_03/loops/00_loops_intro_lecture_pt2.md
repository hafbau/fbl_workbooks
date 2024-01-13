Introduction to Loops - part II
---

- [x] Why loops
- [x] Anatomy of loops
- [x] C-Style For loop
- [x] While loop
- [x] Do While loop
- [x] For in loop
- [x] For of loop
- [x] break and continue
- [x] Practice

### Problem

Write a JavaScript loop that iterates through integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz". For all the other numbers, prints the number.

To write the above program, we need to understand, not only conditionals, but also loops.

## For .. in

> General Syntax

```js>
// please use semantic names, as with any human
for (pointerToAProperty in object) <statements>
```

- loops through the string enumerable keys of an object

```js
const object = { a: 1, b: 2, c: 3};

for (const letter in object) {
  console.log(`${letter}: ${object[letter]}`);
}
```

- all through it's prototype chain

```js
const animal = {canWalk: true, hasLimbs: true,};
const human = {legs: 2, hands: 2, __proto__: animal};
const alice = {name: 'Alice', age: 16, canRun: true, isAwesome: undefined, __proto__: human};

for (const attribute in alice) {
  if (alice.hasOwnProperty(attribute)) {
    console.log(`${attribute}: ${alice[attribute]}`);
  }
  // continue;
};

```

- what about with an array

- loops through the indexes NOT the items (elements) in an array
  
```js
const noiseMakers = ['Alice', 'Bob', 'Cathy', 'Dom', 'Evan']
// this will only print the index
for (const x in noiseMakers) {
  console.log(x)
}
// this will print the names of noise makers, because we're using the index to access the values in an array
for (const x in noiseMakers) {
  console.log(noiseMakers[x])
}
```

## For .. of

> General Syntax
>
> ```js
> for (pointerToAProperty of array) <statements>
> ```

- loops through items (elements) in an array
- used when you don't care about the index

```js
// Print the names of noise makers
for (const x of noiseMakers) {
  console.log(x)
}
```

## break and continue

- break
  
```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i equals 5
  }
  console.log(i); // This will log numbers from 0 to 4
}
```

- continue

```js
let j = 0;
while (j < 10) {
  j++;
  if (j % 2 === 0) {
    continue; // Skip the rest of the loop for even numbers
  }
  console.log(j); // This will log odd numbers from 1 to 9
}
```

PRACTICE TIME - FizzBuzz
=========================

Write a JavaScript loop that iterates through integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz". For all the other numbers, prints the number.

See attempts in class here: [01_fizzbuz.js](./01_fizzbuz.js)

```js
for (let integer = 1; integer < 101; integer += 1) {
  if (integer % 15 === 0) {
    console.log('FizzBuzz');
  } else if (integer % 3 === 0) {
    console.log('Fizz')
  } else if (integer % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(integer)
  }
}
```

## More Exercise?

Checkout a bonus exercise here [01_bonus_exercise.js](./01_bonus_exercise.js).
Same exercise is at this gist:  <https://gist.github.com/hafbau/247c537ae9607674ae1e9c1c7e7f9336>
