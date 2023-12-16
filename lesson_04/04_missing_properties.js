// Missing properties
const person = { surname: 'Suara', age: 40, boat: undefined };
// 1.
console.log(person.boat); // undefined


/**
 * What JS does
 * Figure out the value of the part before the dot (.).
 * If that value is null or undefined, throw an error immediately.
 * Check whether a property with that name exists in our object.
 * a. If it exists, answer with the value this property points to.
 * b. If it doesn’t exist, answer with the undefined value.
 */

// 2. How about this?
console.log(person.boat.name); // TypeError?
object.undefined.name