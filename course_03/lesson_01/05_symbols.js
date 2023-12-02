// Symbols
// Symbols are a relatively recent addition to the language.

const somethingUniq = Symbol();
console.log(typeof (somethingUniq)); // "symbol"
// It’s hard to explain their purpose and behavior without diving deeper into objects and properties, so for now we’re going to skip them. Sorry, symbols!

// Remember though that they are unique values. If you compare two symbols, they will never be equal:
const anotherUniq = Symbol();
console.log(somethingUniq === anotherUniq); // false