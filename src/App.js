import React from "react";
import "./App.css";
import Dropdown from "./components/navbar/Dropdown";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Dropdown />
      </div>
    );
  }
}

export default App;
