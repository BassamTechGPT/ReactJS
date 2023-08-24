import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease} className="btn">
        -
      </button>
      <button onClick={reset} className="resetbtn">
        Reset
      </button>
      <button onClick={increase} className="btn">
        +
      </button>
    </div>
  );
}

export default App;
