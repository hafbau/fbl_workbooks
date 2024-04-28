// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const bracketTypes = {
  "(": "round",
  ")": "round",
  "[": "square",
  "]": "square",
  "{": "curly",
  "}": "curly",
};

const bracketStatuses = {
  "(": "open",
  ")": "close",
  "[": "open",
  "]": "close",
  "{": "open",
  "}": "close",
};

const isValidParens = (st) => {
  const len = st.length;
  if (len % 2 === 1) return false;

  for (let i = 0; i < len - 1; i++) {
    const bracket = st[i];
    const type = bracketTypes[bracket];
    const status = bracketStatuses[bracket];

    const followingBracket = st[i + 1];
    const followingType = bracketTypes[followingBracket];
    const followingStatus = bracketStatuses[followingBracket];
    // console.log("current char", {
    //   bracket,
    //   type,
    //   status,
    //   followingBracket,
    //   followingStatus,
    //   followingType,
    // });

    if (
      status === "open" &&
      followingStatus === "close" &&
      type !== followingType
    ) {
      return false;
    }
  }
  return true;
};

// Algorithm Psuedo
/**
 * Given an open bracket of a certain type,
 * the immediately following bracket has to be same type if it is a closed bracket
 *  example: give '[', following needs to be ']'
 *  example: {()}, {{([]){}}}
 *  example: {}()
 *
 * { ]
 * [
 * (
 */

// Use cases aka tests
const str1 = "[]";
const result = isValidParens(str1);
console.log('"[]" is valid', result === true);

const str2 = "[]{]";
const result2 = isValidParens(str2);
console.log('"[]{]" is NOT valid', result2 === false);

const str3 = "[({]})";
const result3 = isValidParens(str3);
console.log('"[({]})" is NOT valid', result3 === false);

const str4 = "[]{}}";
const result4 = isValidParens(str4);
console.log('"[]{}}" is NOT valid', result4 === false);
