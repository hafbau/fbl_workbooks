/**
 * Write a JavaScript loop that iterates through integers from 1 to 100.
 * But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz".
 * For numbers multiples of both three and five print "FizzBuzz".
 * For all the other numbers, prints the number.
 */
let integer = 3454;
while (integer <= 29745594) {
  if (integer % 3 === 0 && integer % 5 === 0) {
    console.log("FizzBuzz");
    integer = integer + 1;
    continue;
  }
  if (integer % 3 === 0) {
    console.log("Fizz");
  } else if (integer % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(integer);
  }

  integer = integer + 1;
}

// Other Attempts in class
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let i = 1;
// while (i < 101) {
//   // console.log(i);
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
//   i += 1;
// }
