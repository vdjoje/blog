import React, { Component } from "react";
import Cards from "./Cards";
import Cards1 from "./Cards1";

const styles = {
  float: "left",
  width: "33%"
};

class Home extends Component {
  render() {
    return (
      <div>
        <div style={styles}>
          <Cards />
        </div>
        <div style={styles}>
          <Cards1 />
        </div>
        <div style={styles}>
          <Cards />
        </div>
        <div style={styles}>
          <Cards />
          <p
            style={{
              marginLeft: "7%"
            }}
          >
            naslov clanka
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
