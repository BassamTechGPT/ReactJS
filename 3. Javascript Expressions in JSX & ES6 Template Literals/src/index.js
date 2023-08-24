import React from "react";
import ReactDOM from "react-dom";

const fName = "Bassam";
const lName = "Sahibzada";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1> {/* ES6 Template Literal Method*/}
    {/* <h1>Hello {fName + " " + lName}!</h1>  */} {/* Old Method*/}
    <p>Your lucky number is {num} </p>
    <p>Your lucky number is {3 + 7} </p>
    <p>Your lucky number is {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);
