// Pre Evaluation
// Meet Sherlock Holmes, a world-renowned detective from London:

const sherlock = {
  surname: 'Holmes',
  address: { city: 'London' }
};

// His friend John Watson has recently moved in to live with Sherlock:

const john = {
  surname: 'Watson',
  address: sherlock.address
};

// Sherlock is a brilliant detective but a difficult flatmate. One day, John decides he’s had enough. John changes his surname and moves to live in Malibu:

john.surname = 'Lennon';
john.address.city = 'Malibu';

// Time for a small exercise. Write down your answers to these questions:

console.log(sherlock.surname); // ?
console.log(john.surname); // ?
console.log(john.address.city); // ?
console.log(sherlock.address.city); // ?