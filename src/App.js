import React, { Component } from "react";
import "./App.css";
import Bar from "./containers/Bar";
import Cards from "./containers/Cards";
import Main from "./containers/Main";
import Bottom from "./containers/Bottom";

const styles = {
  backgroundColor: "#2C3E50",
  height: "100vh",
  backgroundSize: "cover"
};

class App extends Component {
  render() {
    return (
      <div style={styles} className="main">
        <Bar />
        <br />
        <br />
        <br />
        <Main />
      </div>
    );
  }
}

export default App;
