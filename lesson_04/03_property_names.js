// Object property names
const sherlock = { surname: 'Holmes', age: 64 };
// 1. Unique - Cannot have the same name twice
sherlock.race = 'White';
sherlock.race = 'Brown';
sherlock.race = 'Black';

console.log(sherlock.race);

// 2. Case sensitive

// 3. Using variables to get properties
// const propertyName = prompt('What do you want to know?');
// alert(sherlock[propertyName]); // Read property by its name

// 4. Using variables to set properties
const person = {};
person.name = 'Bode'; // how does JS read this?
const gotNuts = 2;
person[gotNuts] = 200;