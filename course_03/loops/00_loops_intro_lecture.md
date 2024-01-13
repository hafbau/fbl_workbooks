Introduction to Loops
---

- [x] Why loops
- [x] Anatomy of loops
- [x] C-Style For loop
- [x] While loop
- [x] Do While loop
- [ ] For in loop
- [ ] For of loop
- [ ] break and continue
- [ ] Practice


One of the magics of programming is the ability automate repetitive tasks - the whole point of scripting languages like JS.

### Problem

Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz". For all the other numbers, prints the number.

To write the above program, we need to understand, not only conditionals, but also loops.


Imagine if coach said "Run 30 laps.". Do we have all the information to do this? Let's look at the anatomy of loops to find out.

## Anatomy of loops

At their core, every loops have the following four sections:

- initialization aka the starting point
- condition to continue
- things to repeat - statements
- change in your condition aka post iteration logic to make sure that at some point your condition to continue fails.

## For loop

The general structure of a c-style for loop is as below:

```
for (<init>; <condition>; <post iteration>) <statements>
```

```js
// 1. Print from 1 to 10
for (let num = 0; num < 10; num = num + 1) console.log(num)

// Print the number, and print if they are even on another line
// 2
// Even
// OR
// 3
// Odd
for (let num = 1; num < 11; num += 1) {
  console.log(num);
  // console.log(num % 2 === 0 ? 'Even' : 'Odd')
  // console.log(num % 2 === 1 ? 'Odd' : 'Even')
  // console.log(num % 2 ? 'Odd' : 'Even')
  console.log(!num % 2 ? 'Even' : 'Odd')
  // condition ? expressionIfTrue : expressionIfFalse
  // Boolean(any expression) ? then : else
}
```

- May use compound assignment operators
  ```js
  += ----> num += 1; num = num + 1
  -= ----> num -= 1; num = num - 1
  ```
- Always use your curly braces

```js
// All between 1-10
// Print only the multiples of 3
for (let num = 1; num < 11; num += 1) {
  if (num % 3 === 0) {
    console.log(num);
  }
}

for (let num = 3; num < 11; num += 3) {
  console.log(num);
}
// Print in reverse order
for (let num = 10; num === 1; num -= 1) {
  console.log(num);
}

// Print multiples of four in reverse order
// 8
// 4

// Bayo
for (let num = 8; num >= 3; num = num - 4) {
  console.log(num);
}

// Lukman
for (let num = 8; num > 0; num -= 4) {
  console.log(num);
}
```

## While loops

```
<init>
while (<condition>) {
  <statements>
  <post_iteration logic>
}
```

```js

let numWhile = 1;
while (numWhile < 11) {
  console.log('Number is:', numWhile)
  numWhile += 1
}
```

```js
// indefinite condition
// Print randomly generated numbers until it generates a forbidden number
// forbidden number any decimal greater than 0.420

let rando = Math.random();
console.log('Rando first value', rando)
while (rando > 0.420) {
  console.log(rando)
  rando = Math.random();
}

console.log('DONE');

// More examples on the Browser
answer = prompt('How old are you')
age = Number(answer)
while (age > 200) {
  answer = prompt('How old are you? Damn it!')
  age = Number(answer)
}

// Another way to write this is to use an absolute truthy condition and break within the loop
// based on desired condition
while (true) {
  answer = prompt('How old are you? Damn it!')
  age = Number(answer)
  if (age < 200) break;
}
```

## Do While

Guaranteed to do the statements at least once.

```js
// Compare this while loop to the do while that follows
// while that never happens
while (false) {
  answer = prompt('How old are you? Damn it!')
  age = Number(answer)
  if (age < 200) break;
}

// do while - happens at least once
do {
  answer = prompt('How old are you? Damn it!')
  age = Number(answer)
} while (false);
```
