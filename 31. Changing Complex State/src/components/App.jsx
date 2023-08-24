import React, { useState } from "react";

function App() {
  // Option 1
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");

  // const [fNameHeadingText, fNameSetHeading] = useState("");
  // const [lNameHeadingText, lNameSetHeading] = useState("");

  // function updateFName(event) {
  //   const firstName = event.target.value;
  //   setFName(firstName);
  // }

  // function updateLName(event) {
  //   const lastName = event.target.value;
  //   setLName(lastName);
  // }

  // function handleClick(event) {
  //   fNameSetHeading(fName);
  //   lNameSetHeading(lName);
  //   event.preventDefault();
  // }

  // Option 2
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      {/* <h1>
        Hello {fName} {lname}
      </h1> */}
      {/* <h1>
        Hello {fNameHeadingText} {lNameHeadingText}
      </h1> */}
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      {/* <form onSubmit={handleClick}> */}
      <form>
        <input
          name="fName"
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
