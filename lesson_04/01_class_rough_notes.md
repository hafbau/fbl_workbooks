Introduction to Object Properties
---

## Agenda

- [ ] Check-in on git
- [ ] Creating Objects Literals
- [ ] How to destroy a created object
- [ ] Introduction to object properties
- [ ] Property Names
[BREAK]
- [ ] Reading a property
- [ ] Assigning to a property
- [ ] Missing Properties
- [ ] Recap: Journey so far


## Checkin on git

1. How do I check if pwd (current working directory), is a git repository (is git enabled)

2. What are unstaged files?

3. Are unstaged files different from untracked files?

4. Diff between `git add .` vs `git add -A`

5. Why is `git status` so important?

BONUS: what is the point of a `.gitignore` file?


## Creating Objects Literals

```js
const sisters = 3;
const musketeers = 3;

// What are we changing here?
let sisters = 5;
sisters = 7;


const shrek = {};
const donkey = {};
```





## How to destroy a created object

```js
let junk = {};

junk = null;
```

- We don't actively destroy an object, but JS cleans during garbage

## Introduction to object properties

[story](02_object_properties.js)

- variables & properties
  + vars and props point to values
  + unlike variables, a property starts from objects


```js
const bayo = {
  surname: 'Holmes',
  age: 64,
  Age: 45,
  cars: ['pink ferrari', 'black rolls royce']
  // cars: {
  //   0: 'pink ferrari',
  //   1: 'black rolls royce'
  // }
}

const a = []
```

## Property Names

- names are unique.
- names are case sensitive
- can be dynamic, using `[]` notation and variables



## [BREAK] ~10mins


## Reading value off of a property

```js
const sherlock = {
  surname: 'Holmes',
  age: 64,
}

console.log(sherlock.age)
```

## Assigning value to a property

```js
sherlock.age = 65
```
 Three steps
 - Figure the pointer on the left side
 - Figure the value on the right side
 - point the pointer to the value


## Missing Properties

```js
const lukman = {
  name: 'Lukman',
  cars: ['bentley', 'corvette']
}
// We don't want cars anymore
// We want boats instead
lukman.boats = ['Holy Mary', 'Fish pi']

{
  name: 'Lukman',
  cars: ['bentley', 'corvette'],
  boats: ['Holy Mary', 'Fish pi']
}

// After selling the cars on fb
lukman.cars = undefined;// in lukman, the cars property still exists, it just points to undefined
console.log(lukman.cars) // undefined

OR
delete lukman.cars;// in lukman, the cars property is totally removed

// How might 'delete' be working under the hood? A thought experiment
// go through your current obj
// copy all existing props but the one to delete
// reassing this copy to your variable
lukman = {name: 'jkldf', boat: [],}


// The question of which one should you use and which is more performant, depends on the use case and we won't worry too much bout all that at the moment.
```


## Recap: Journey so far

- Properties are pointers — a bit like variables. They both point at values. Unlike variables, properties start from objects in our universe.
- Properties have names. Properties belong to particular objects. You can’t have more than one property with the same name on an object.
- Generally, you can perform an assignment in three steps:
  + Figure out which pointer is on the left.
  + Figure out which value is on the right.
  + Point that pointer to that value.
- An expression like obj.property is calculated in three steps:
  + Figure out which value is on the left.
  + If it’s null or undefined, throw an error.
  + If that property exists, the result is the value its pointer points to.
  + If that property doesn’t exist, the result is `undefined`.

  ## What about our mystery?