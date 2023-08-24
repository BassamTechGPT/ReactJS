var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// Option 1
// function double(x) {
//   return x * 2;
// }

// const mapNewNumbers = numbers.map(double);
// console.log(mapNewNumbers);

//Option 2
// var mapNewNumbers = [];

// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// console.log(mapNewNumbers);

// Option 3 (React)
const mapNewNumbers = numbers.map(function (x) {
  return x * 2;
});

console.log(mapNewNumbers);
document.getElementById("mapResults").innerHTML = "Map = " + mapNewNumbers;

//Filter - Create a new array by keeping the items that return true.

// Option 1
// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

//Option 2 (React)
const filterNewNumbers = numbers.filter(function (num) {
  return num > 10;
});
console.log(filterNewNumbers);
document.getElementById("filterResults").innerHTML =
  "Filter = " + filterNewNumbers;

//Reduce - Accumulate a value by doing something to each item in an array.

// Option 1
// var newNumber = 0;

// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });
// console.log(newNumber);
// document.getElementById("reduceResults").innerHTML = newNumber;

// Option 2 (React)

var reduceNewNumber = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

console.log(reduceNewNumber);
document.getElementById("reduceResults").innerHTML =
  "Reduce = " + reduceNewNumber;

//Find - find the first item that matches from an array.

// Option 1 (React)
const findNewNumber = numbers.find(function (num) {
  return num > 10;
});

console.log(findNewNumber);
document.getElementById("findResults").innerHTML = "Find = " + findNewNumber;

//FindIndex - find the index of the first item that matches.
const findIndexNewNumber = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(findIndexNewNumber);
document.getElementById("findIndexResults").innerHTML =
  "FindIndex = " + findIndexNewNumber;

//Emojipedia Meaning (Limit to 100 characters)
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
document.getElementById("newEmojipedia").innerHTML =
  "Meaning = " + newEmojipedia;
