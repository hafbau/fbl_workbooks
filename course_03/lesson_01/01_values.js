// Primitive Values
// String
// Template Strings
const personName = 'John' + ' ' + 'Doe';
const addTitle = (name) => 'Mr. ' + name;
const templateNameWithoutTemplate = addTitle(personName) + ' is a good guy';
const templateName = `${addTitle(personName)} is a good guy`;
const templateNameFail = '${personName} is a good guy';

const sentence = "This ain't real"
const sentence2 = 'This ain\'t real'
const sentence3 = 'This aint\nreal';
const sentence4 = 'This ain\'t\treal';
// console.log(sentence3)
// console.log(sentence4)
// console.log({
//   sentence,
//   sentence2,
//   sentence3,
//   sentence4
// });
// console.log({
//   templateNameWithoutTemplate,
//   templateName,
//   templateNameFail,
//   personName
// });




// Objects & Functions