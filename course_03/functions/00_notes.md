Introduction to Functions
---

- [x] Function Definition
- [x] Function Execution
- [x] Function Signature
- [x] Function Expression vs Declaration
- [x] Anonymous Functions

> Rewrite fizzbuzz to start from 101 to 200
> Then rewrite to go from 2000 to 2100
> Then rewrite to go from 420 to 4337

## Definition

```js
function doSomething() {
  console.log('I am a function that does something')
}
```

> Conventions about naming function:
> Every thing that applies to variable
> action oriented name
>

## Execution

Other terms
- call
- execute
- invoke
- run

```js
doSomething()
```


## Function Signature

input ---> CPU ---> output
input ---> Function ---> output

input ->
DuringDefinition:
- function Parameters (formal Argument)
During Execution:
- function Arguments (actual parameters)

output -> return value.

```js
function sayHelloToName(name) {
  console.log(`Hello ${name}`);
  return 'Consider yourself greeted';
}

sayHelloToName('Demo');
```