// 3110. Score of a String
// You are given a string s. The score of a string is defined as
// the sum of the absolute difference between
// the ASCII values of adjacent characters.

// Return the score of s.

// Ways to represent all english letters
// const alphabets = ['a', 'b', 'c', 'd']
// const alphabets = {'a': 0, 'b': 1, 'c': 2, ...}
const alphabets = "abcdefghijklmnopqrstuvwxyz";
const scoreOfAString = function (str) {
  // 'abc'
  let sum = 0;
  // Get the numeric (ascii - we're not using ascii codes here but it won't make a difference) representation of each char
  const len = str.length;
  for (let i = 0; i < len - 1; i++) {
    const char = str[i];
    const charNum = alphabets.indexOf(char) + 1;
    console.log(char + str[i + 1]);
  }
  return sum;
};

const s = "abc"; //1 2 3//ab, bc //1-2, 2-3// -1, -1// 1, 1// 1+1
const score = scoreOfAString(s);
console.log('Test "abc" passed', score === 2);

const s1 = "averyveryloongstring";
// //1 22 5 18 25 22 5 18 25 12 15 15 14 7 19 20 18 9 14 7
// //av ve er ry yv ve er ry yl lo oo on ng gs st tr ri in ng
// //21 17 13 07 03 17 13 07 13 03 00 01 07 12 01 02 09 05 07
// //148
const score1 = scoreOfAString(s1);
console.log('Test "averyveryloongstring" passed', score1 === 148);

const s2 = "zz";
const score2 = scoreOfAString(s2);
console.log('Test "zz" passed', score2 === 0);

const s3 = "zzaa";
const score3 = scoreOfAString(s3);
console.log('Test "zzaa" passed', score3 === 25);
