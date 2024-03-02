// https://leetcode.com/problems/roman-to-integer/description/
const romanLetterToNumObj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const ruleOfPreviousObj = {
  IV: 4,
  IX: 9,
  // XIV - no real rule for 14, same for XIX
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};
// 3999 ===> 3000 + 900 + 90 + 9 ===> MMM + CM + XC + IX => MMMCMXCIX
const sum = (nums) => {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
};

// sum([1, 1, 1])// 3
// M CM XC IV
const romanToInt = function (s) {
  // For each char in s, use romanLetterToNumObj
  // to get number equivalent and
  // const arrOfNums = [];
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i]; // 'X'
    if (i + 1 < s.length) {
      //3 < 7 ==> true
      const nextTwoChars = currentChar + s[i + 1]; // 'CM'
      // console.log("nextTwochars", nextTwoChars);

      const convertedToNum = ruleOfPreviousObj[nextTwoChars]; // 900
      // console.log("nextTwochars converted to number", convertedToNum);
      if (convertedToNum !== undefined) {
        sum += convertedToNum;
        // arrOfNums.push(convertedToNum); // [1000, 900]
        i = i + 1;
      } else {
        const currentNum = romanLetterToNumObj[currentChar]; // 1000
        // arrOfNums.push(currentNum); //[1000, 900, 1000]
        sum += currentNum;
      }
    }
  }
  // [100, 40]
  // return sum(arrOfNums); // 140
  return sum;
};

// Demonstrate understanding through testing
// console.log(romanToInt("I")); // 1
// console.log(romanToInt("V")); // 5
// console.log(romanToInt("L")); // 50

// console.log(romanToInt("III")); // 3 => 1 + 1 + 1
// console.log(romanToInt("VIII")); // 8
// console.log(romanToInt("MD")); // 1500 ==> 1000 + 500 ==> 'M' + 'D'

console.log(romanToInt("CXL")); // 140
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("MMMCMXCIX")); // 3999
