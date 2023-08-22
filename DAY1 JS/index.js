//task 1
const age = 25;

const isStudent = true;

const favoriteColors = ["blue", "green", "purple"];

//task 2

const stringWithQuotes = 'This is a string with "single" and \'double\' quotes.';
console.log(stringWithQuotes);

//task 3
const name = "John Doe";
const studentStatus = isStudent ? "a student" : "not a student";
const resultString = `${name} is ${age} years old and ${studentStatus}.`;
console.log(resultString);

//task 5
const myFavoriteAnimal = "elephant";
const myFavoriteColor = "blue";

const userFavoriteAnimal = prompt("What is your favorite animal?");
const userFavoriteColor = prompt("What is your favorite color?");

const animalMatch = myFavoriteAnimal === userFavoriteAnimal;
const colorMatch = myFavoriteColor === userFavoriteColor;

if (animalMatch && colorMatch) {
  console.log("Wow, we have the same favorite animal and color!");
} else if (animalMatch || colorMatch) {
  console.log("You share at least one favorite with me!");
} else {
  console.log("We have different tastes in animals and colors.");
}

//task 6
const userInput = parseFloat(prompt("Enter a number:"));

if (userInput > 0) {
  console.log("The number is positive.");
} else if (userInput < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//task 8
const userValue = prompt("Enter a value:");

if (userValue) {
  console.log("The value is truthy.");
} else {
  console.log("The value is falsy.");
}






























