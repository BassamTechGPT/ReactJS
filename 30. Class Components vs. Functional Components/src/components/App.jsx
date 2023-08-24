import React from "react";
// import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

class App extends React.Component {
  render() {
    // return <ClassComponent />; //Obsolete not more recommended
    return <FunctionalComponent />; //Hooks recommended as per REACT Team
  }
}

export default App;
