// At last, we got to objects!
// This includes arrays, dates, RegExps, and other non-primitive values:
console.log(typeof ({})); // "object"
console.log(typeof ([])); // "object"
console.log(typeof (new Date())); // "object"
console.log(typeof (/\d+/)); // "object"
console.log(typeof (Math)); // "object"

// Unlike everything before, objects are not primitive values. This also means that by default, they’re mutable. We can access their properties with . or []:
let rapper = { name: 'Malicious' };
rapper.name = 'Malice'; // Dot notation
rapper['name'] = 'No Malice'; // Bracket notation

// We haven’t talked about properties in detail yet, so your mental model about them might be fuzzy. We will return to properties in a future module.

// Making Our Own Objects
// There is one thing in particular that makes me excited about objects. We can make more of them! We can make our own objects.
// In our mental model, all of the primitive values we’ve discussed — null, undefined, booleans, numbers, and strings — have “always existed”. We can’t “make” a new string or a new number, we can only “summon” that value:
let sisters = 3;
let musketeers = 3;
// Same number value (Try it in your repl, sisters === musketeers)
// What makes objects different is that we can create more of them. Every time we use the {} object literal, we create a brand new object value:
let shrek = {};
let donkey = {};
// Different object value (Try it in your repl, shrek === donkey)
// The same goes for arrays, dates, and any other objects. For example, the [] array literal creates a new array value — a value that never existed before.

// Do Objects Disappear?
// You might wonder: do objects ever disappear, or do they hang around forever? JavaScript is designed in a way that we can’t tell one way or the other from inside our code. For example, we can’t destroy an object:
let junk = {};
junk = null; // Doesn't necessarily destroy an object
// Instead, JavaScript is a garbage-collected language.
// This means that although we can’t destroy an object, it might eventually “disappear” if there is no way to reach it by following the wires from our code.

// JavaScript doesn’t offer guarantees about when garbage collection happens.
// Unless you’re trying to figure out why an app is using too much memory, you don’t need to think about garbage collection too often. I only mention it here so that you know that we can create objects — but we cannot destroy them.
// In my universe, objects and functions float closest to my code. This reminds me that I can manipulate them and even make more of them.

// Why Object literals vs Arrays
// What type of object should we use to store a list of values? Should we use an array or an object literal?
// What about properties of a person? Should we use an array or an object literal?

// Anabi Bayo says Error Assignment Error due to const
// Bode says Error

person[2] = 200