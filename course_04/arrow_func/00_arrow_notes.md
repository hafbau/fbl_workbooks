Arrow functions
---


Note: This lesson includes exercises at the end that requires submission.




Picture this: you're in the kitchen, trying to whip up a quick meal. You could use the old-fashioned method, chopping and dicing with a knife. Or, you could use that fancy new food processor you just got, which does the job in half the time. In the world of JavaScript, arrow functions are like your new food processor: a sleek, efficient way to write functions that saves you time and effort.




Quick Warm-Up Quiz! 🤓🚀


How do we tell computers what to do?
Can you name a method for completing tasks in JavaScript?
If you're scratching your head, don't worry! We're about to dive in.





Understanding Arrow Functions: The Basics 🏹


Arrow functions are a modern addition to JavaScript that allow us to write functions in a more concise way. Think of them as the express lane on the highway: they get you to your destination faster and with less hassle.



Traditional Function:
function sayHello() {
  return "Hello, world!";
} 
This is like calling someone on the phone to say hello.


Arrow Function:
const sayHello = () => "Hello, world!"; 
This is like sending a text instead. Quick and to the point.





Let's See Them in Action! 🎬


No Parameters:
Traditional: function makeCoffee() { return "Coffee is ready!"; }
Arrow: const makeCoffee = () => "Coffee is ready!";
One Parameter:
Traditional: function double(number) { return number * 2; }
Arrow: const double = number => number * 2;
Multiple Parameters:
Traditional: function add(a, b) { return a + b; }
Arrow: const add = (a, b) => a + b;
With a Block of Code:
Traditional:
function isWeekend(day) {
   if (day === "Saturday" || day === "Sunday") {
     return true;
   } else {
     return false;
   }
  } 


Arrow:
const isWeekend = day => {
   if (day === "Saturday" || day === "Sunday") {
     return true;
   } else {
     return false;
   }
}; 


Exercise Time: Your Turn to Cook! 🍳📚


Note: Do these exercises in a files (or multiple files), and put them on GitHub. Submit a link to your GitHub repo in the #assignments channel in Slack.


Now that you've seen arrow functions in action, it's time to try creating some of your own. Here are some exercises to help you get comfortable:

Simple Greeting:
Convert a function that returns "Good morning, world!" into an arrow function.
Double a Number:
Create an arrow function doubleNumber that takes one number as input and returns its double.
Sum It Up:
Write an arrow function sum that takes two numbers and returns their sum.
Maximum Finder:
Craft an arrow function findMax that takes two numbers and returns the larger one.
Personalized Greeting:
Create an arrow function personalGreet that takes a person's name as input and returns a personalized greeting.
Age Calculator:
Write an arrow function calculateAge that takes a birth year and returns the age based on the current year (let's say 2023 for simplicity).
Even Number Filter:
Use an arrow function with the filter method to make a function evenNumbersOnly that takes an array of numbers and returns an array of the even numbers.


Wrapping Up: Arrow Functions Unleashed 🚀


You've just explored the sleek and powerful world of arrow functions in JavaScript. These exercises are your stepping stones to mastering a tool that'll make your code cleaner and your life easier. Remember, practice is key. Experiment with arrow functions in different situations, and soon, you'll be using them like a pro.

Questions? Curiosities? Don't hesitate to reach out. The journey into the depths of coding is full of discovery. Keep coding, and enjoy the ride! 🌟💻