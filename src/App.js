import React, { Component } from "react";
import logo from "./logo.svg";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import landingScreen from "./Screens/landingScreen";
import dashboard from "./Screens/dashboard";
import Switch from "react-bootstrap/esm/Switch";
import "./App.css";
import users from "./Screens/users";
import rewardAdmin from "./Screens/rewardAdmin";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch style={{ paddingLeft: 0 }}>
          <Route path="/landingscreen" exact component={landingScreen} />
          <Route path="/dashboard" exact component={dashboard} />
          <Route path="/users" exact component={users} />
          <Route path="/rewardAdmin" exact component={rewardAdmin} />
        </Switch>
      </Router>
    );
  }
}
export default App;
