// Boolean
// Like day and night, there are only two boolean values: true and false.
console.log(typeof (true)); // "boolean"
console.log(typeof (false)); // "boolean"

// We can perform logical operations with them:
const isSad = true;
const isHappy = !isSad; // The opposite
// The Math rule of OR
// - All has to be false for the result to be false
// - Said another way, if one is true, the result is true
const isFeeling = isSad || isHappy; // Is at least one of them true?

// The Math rule of AND
// - All has to be true for the result to be true
// - Said another way, if one is false, the result is false
const isConfusing = isSad && isHappy; // Are both true?

// Truthiness of values
// Falsey values in JS: undefined, null, NaN, 0, '', false

// Quiz
// let isSad = true;
// let isHappy = !isSad;
// let isFeeling = isSad || isHappy;
// let isConfusing = isSad && isHappy;

// Open a sketching app or take a piece of paper, and sketch out the variables, the values, and the wires between them for the above snippet of code.