// function doSomething() {
//   console.log("I am a function that does something");
// }

// doSomething();

// function sayHelloToName(name) {
//   console.log(`Hello ${name}`);
//   // return "Consider yourself greeted";
// }

// const result = sayHelloToName("Demo");
// console.log("Result is: ", result);

function addTwoNumbers(num1, num2) {
  // const sum = num1 + num2;
  // if you need to do stuff here
  // console
  // return sum;
  // return num1 + num2;
  let sum;
  const weirdValue = (sum = num1 + num2);
  return weirdValue;
}

// const sum = addTwoNumbers(3, 4);

// console.log("And the sum isssss....", sum);

// function multiplyOrAdd(num1, num2) {
//   return num1 + num2;
//   return num1 * num2;
// }

// function multiplyOrAdd(num1, num2, operation) {
//   console.log("All Args: ", arguments.length);
//   // const arguments = []
//   const sum = num1 + num2;
//   const product = num1 * num2;
//   return operation === "+" ? sum : product;
// }

// const sum = multiplyOrAdd(3, 4, '+');
// console.log("Result is: ", result);
// const product = multiplyOrAdd(3, 4, '*');
// const wtf = multiplyOrAdd(3, 4, 'wtf');

// Too few arguments
// const result = multiplyOrAdd(undefined, undefined, undefined);
// const result = multiplyOrAdd();
// const result = multiplyOrAdd(3, 4);
// const result = multiplyOrAdd(3);
// const result = multiplyOrAdd(3, 4, "+", "extra");

// console.log("Result is", result);

// const fncExpression = function multiplyOrAdd(num1, num2, operation) {
//   console.log("Internal Additions: ", multiplyOrAdd);
//   // const arguments = []
//   const sum = num1 + num2;
//   const product = num1 * num2;
//   return operation === "+" ? sum : product;
// };

// const fncExpression = function (num1, num2, operation) {
//   // const arguments = []
//   const sum = num1 + num2;
//   const product = num1 * num2;
//   return operation === "+" ? sum : product;
// };
// console.log(fncExpression(7, 9, "*"));
// console.log(multiplyOrAdd(7, 9, "*"));

// console.log("What is deez: ", fncExpression);

// IIFE - Immediately Invoked Function Expression
// (function (num1, num2, operation) {
//   // const arguments = []
//   const sum = num1 + num2;
//   const product = num1 * num2;
//   return operation === "+" ? sum : product;
// })(7, 9, "*");

// hoistedFunction();
// function hoistedFunction() {
//   console.log("I am hoisted");
// }

// unhoistedFunction();
console.log("What is unhoistedFunction: ", unhoistedFunction);
const unhoistedFunction = function () {
  console.log("I am Not hoisted");
};
