//Big Ints
// BigInts were only recently added to JavaScript, so you won’t see them used widely yet. If you use an older browser, they won’t work. Regular numbers can’t represent large integers with precision, so BigInts fill that gap (literally):
let alot = 9007199254740991n; // Notice n at the end
console.log(alot + 1n); // 9007199254740992n
console.log(alot + 2n); // 9007199254740993n
console.log(alot + 3n); // 9007199254740994n
console.log(alot + 4n); // 9007199254740995n
console.log(alot + 5n); // 9007199254740996n
// No funny business with the rounding! This is great for financial calculations where precision is especially important. Keep in mind that nothing is free. Operations with truly huge numbers may take time and resources.
// How many BigInts are there in our universe? The specification says they have an arbitrary precision. This means that in our JavaScript universe, there is an infinite number of BigInts — one for each integer in math.
// Yeah...
// If this sounds strange, consider that you’re already comfortable with the idea of there being infinite integers in math. (If you’re not, give it a few moments!) It’s not much of a leap then from a “math universe” to a “JavaScript universe”.