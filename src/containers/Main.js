import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Register from "./Register";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Form} />
        <Route path="/signup" component={Register} />
      </Switch>
    );
  }
}

export default Main;
