import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem(event) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={addItem}>
        <div className="form">
          <input onChange={handleChange} type="text" value={inputText} />
          <button type="submit">
            <span>Add</span>
          </button>
        </div>
      </form>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
