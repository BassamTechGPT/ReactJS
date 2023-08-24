import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math";
// import * as pi from "./math"; //2nd alternate

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    {/* <li>{pi.default}</li> //2nd Alternate */}
    <li>{doublePi()}</li>
    {/* <li>{pi.doublePi()}</li> //2nd Alternate */}
    <li>{triplePi()}</li>
    {/* <li>{pi.triplePi()}</li> //2nd Alternate */}
  </ul>,
  document.getElementById("root")
);
