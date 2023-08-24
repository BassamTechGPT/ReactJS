import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App(props) {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
