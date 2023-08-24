import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

// Option 1
// const newNumbers = numbers.map(function (x) {
//   return x * x;
// });

// console.log(newNumbers);

// Option 2 (for single input value - single line function)
// 1. const newNumbers = numbers.map((x) => {
//   return x * x;
// });
// 2. const newNumbers = numbers.map((x) => x * x);
// 3. const newNumbers = numbers.map(x => x * x); //(SIMPLIFIED)

// console.log(newNumbers);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//SIMPLIFIED
// const newNumbers = numbers.map(x => x * 2);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

//SIMPLIFIED
// const newNumbers = numbers.filter(num => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

//SIMPLIFIED
// var newNumber = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

//SIMPLIFIED
// const newNumber = numbers.find(num => num > 10);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

//SIMPLIFIED
// const newNumber = numbers.findIndex(num => num > 10);
