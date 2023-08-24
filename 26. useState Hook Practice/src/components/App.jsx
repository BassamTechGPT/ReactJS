import React, { useState } from "react";

// Option 1 (Time Update on Click)
// function App() {
//   const now = new Date().toLocaleTimeString();

//   const [time, setTime] = useState(now);

//   function updateTime() {
//     const newTime = new Date().toLocaleTimeString();
//     setTime(newTime);
//   }

//   return (
//     <div className="container">
//       <h1>{time}</h1>
//       <button onClick={updateTime}>Get Time</button>
//     </div>
//   );
// }

// Option 2 (Time Update Automatically)
function App() {
  const [TIME, setTime] = useState();

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{TIME}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
