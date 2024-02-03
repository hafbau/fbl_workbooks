/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/
// - convert number to string, to loop over the digits
// - reverse the stringified number
// - compare reversed to stringified
const isPalindromeNumber = function (x) {
  const xString = x.toString();
  let reverseX = "";
  for (let index = xString.length; index > -1; index -= 1) {
    reverseX += xString[index];
  }
  // - compare reversed to stringified
  return reverseX === xString;
  // if (reverseX === xString) {
  //   return true
  // } else {
  //   return false
  // }
};
