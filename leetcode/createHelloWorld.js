// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// - Write at least 3 example uses of the function / program, complete with output expectations
// - Write the function signature matching the use cases
// - Write pseudocode of your minimum intuition
// - Turn it into code
// - Repeat last two steps
// - Remember to keep it simple and test the logic by reading/running your code in your head

const createHelloWorld = () => {
  return () => {
    return "Hello World";
  };
  // return function() {}
};

// const createHelloWorld = () => () => 'Hello World'
// const createHelloWorld = function() {
//   return function() {
//     return 'Hello World'
//   }
// }

// const returnHelloWorld = function() {
//   return 'Hello World'
// }

// const createHelloWorld = function() {
//   return returnHelloWorld
// }
const newFn = createHelloWorld();
const result = newFn();
console.log("Test 1 Passed", result === "Hello World");
