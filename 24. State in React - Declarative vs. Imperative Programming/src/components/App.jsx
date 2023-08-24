import React from "react";

function App() {
  // var isDone = false;

  // const strikeThrough = { textDecoration: "line-through" };

  // return <p style={isDone ? strikeThrough : null}>Buy milk</p>;

  function strike() {
    document.getElementById("root").style.textDecoration = "line-through";
  }

  function unStrike() {
    document.getElementById("root").style.textDecoration = null;
  }

  //My Option 2
  // function strikeToggle() {
  //   document.getElementById("root").style.textDecoration =
  //     document.getElementById("root").style.textDecoration === "line-through" ? "" : "line-through";
  // }

  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>Change to Strike Through</button>
      <button onClick={unStrike}>Change Back</button>
      {/* <button onClick={strikeToggle}>Change to Strike Through</button> //My Option 2 */}
    </div>
  );
}

export default App;
