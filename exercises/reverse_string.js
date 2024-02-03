// Instructions
// Your task is to reverse a given string.

// Some examples:

// Turn "stressed" into "desserts".
// Turn "strops" into "sports".
// Turn "racecar" into "racecar".

const reverseString = function (strToReverse) {
  let reversed = "";
  // for (let idx = strToReverse.length - 1; idx > -1; idx = idx - 1) {
  //   reversed += strToReverse[idx];
  // }
  // return reversed;

  let idx = strToReverse.length - 1;
  while (idx > -1) {
    reversed += strToReverse[idx];
    idx -= 1;
  }
};

const test1 = reverseString("stressed");

const test2 = reverseString("strops");
const test3 = reverseString("racecar");

console.log("stressed reversed to ", test1, "expected", "desserts");
console.log("strops reversed to ", test2, "expected", "sports");
console.log("racecar reversed to ", test3, "expected", "racecar");
