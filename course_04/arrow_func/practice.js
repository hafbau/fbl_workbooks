/**
 * Your task is to figure out if a sentence is a pangram.

A pangram is a sentence using every letter of the alphabet at least once. It is case insensitive, so it doesn't matter if a letter is lower-case (e.g. k) or upper-case (e.g. K).

For this exercise, a sentence is a pangram if it contains each of the 26 letters in the English alphabet.
The input sentences are guaranteed English. 
*/

// - Should we write a function? The answer is almost always YES

// - What could the function signature be? how will this function be used
// verifyPangram(sentence); // boolean / true /false

// function declaration or function expression
// function declaration
// function verifyPangram() {}

// function expression
// const verifyPangram = function() {}
// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Choose function expression
const verifyPangram = (sentenceParam) => {
  // get the count of the distinct letters in sentenceParams
  // How to count distinct letters
  // - maybe existing string method
  // - loop through it, keep only distinct

  // Distinct Count Algo - 2
  // turn our sentence to array of characters
  const characterArr = sentenceParam.toLowerCase().split("");
  console.log("characterArr", characterArr);
  // filter the array for letters whose first index is the same as the last index
  const filteredChars = characterArr.filter(function (char, currentIndex) {
    if (char === " ") return false;
    const firstIndex = characterArr.indexOf(char);
    const lastIndex = characterArr.lastIndexOf(char);

    return firstIndex === lastIndex || firstIndex === currentIndex;
  });

  console.log("filteredChars", filteredChars);
  // count will be the length of the filtered array
  const count = filteredChars.length;
  console.log("count", count);
  // If count equals 26, then return true
  // otherwise return false
  return count === 26;
};

// Distinct Count Algo - 1
// turn our sentence to an object with the characters as keys point to count of 1;
// use Object.keys(sentenceObject) to get an array of distinct letters in the sentence
// count will be the length of the array Object.keys(sentenceObject).length

// Distinct Count Algo - 2
// turn our sentence to array of characters
// filter the array for letters whose first index is the same as the last index
// count will be the length of the filtered array

// Distinct Count Algo - 3
// create an empty string (could use array); call it distinctLetters = ''
// loop through given sentence
// for each letter in sentence,
// check if letter already exists in distinctLetters e.g. distinctLetters.includes(letter);
// if it is already in distinctLetters; continue the loop
// otherwise add it to distinctLetters e.g. distinctLetters = distinctLetters + letter;then continue
// count will be distinctLetters.length

// TESTS
let sentence = "today is saturday";
console.log(
  sentence,
  "Expected result: false",
  "Test Passed?:",
  verifyPangram(sentence) === false
); // false

sentence = "The quick brown fox jumps over the lazy dog";
console.log(
  sentence,
  "Expected result: true",
  "Test Passed?:",
  verifyPangram(sentence) === true
); // true
