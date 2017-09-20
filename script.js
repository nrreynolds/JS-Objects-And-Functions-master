// Enter your solutions for hw-w01-d04 here!
// Make sure to reference the readme.md for detailed instructions

// Part 1 - Objects
var matt = {
  name: "Matt Gershowitz",
  nickname: "the Gersh",
  age: 12,
  weight: 90,
  favoriteThings: {
    movie: "The Net",
    food: "Lasagna",
    website: "www.github.com",
    hat: "red hat"
  },
  hobbies: [
    "bird watching",
    "ceramics",
    "fashion photography"
  ]
}

// 1. console.log Matt's nickname
console.log(matt.name);

// 2. console.log Matt's age
console.log(matt.age);

// 3. console.log Matt's favorite movie
console.log(matt.favoriteThings.movie);

// 4. console.log Matt's first hobby
console.log(matt.hobbies[0]);


// Part 2 - Functions
// When you finish writing the functions, uncomment the function
// call to see the result

// 1.
function multiply(a, b) {
  return a * b;

}
multiply(3, 4);

// 2.
function maxOfThree(a, b, c) {
  // Do not use Math.max
  if (a >= b) {
    return a >= c ? (a: c);
  } else {
    return b >= c ? (b: c);
  }
}
maxOfThree(3, 4, 5);

// 3.
function howMuchCoffeeWillEndMe(weight) {
  // It's estimated that 6 grams per hundred pounds of body weight can cause
  // death! Given an 8oz cup of coffee has 95mg of caffeine, calculate how many
  // cups it takes to kill YOU (or the you that you want to be!).
  return ((weight * (6 / 100)) / (95 * .001));

}
howMuchCoffeeWillEndMe(200);

// 4(a)
// Your answer here
// 7 because the function changes the local variable x to 3, not the global

// 4(b)
// Your answer here
// 3 because the function changes the global variable x to 3

// 4(c)
// Your answer here
// 7 because the function changes the variable x defined in the parameter to 3, not the global variable


// 5
// Your answer here
// 40
// undefined 17 undefined

// Part 3 - DOM

// 1. Change the background-color to blue
document.addEventListener("DOMContentLoaded", function (event) {
  //do work
  document.body.style.backgroundColor = 'blue';
});


// 2. Append a new <li> with the text 'Fix cars' to Dom's Favorite Things

// 3. Remove the last <li> from Dom's Favorite Things