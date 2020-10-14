import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import loginScreen from "./Screens/loginScreen";
import signupScreen from "./Screens/signupScreen";
import fire from "./fire";
import forgotPassword from "./Screens/forgotPassword";
import adminLogin from "./Screens/adminLogin";
import dashboard from "./Screens/dashboard";
import rewards from "./Screens/rewards";
import rewardView from "./Screens/rewardView";
import articles from "./Screens/articles";
import articleView from "./Screens/articleView";
import events from "./Screens/events";
import eventView from "./Screens/eventView";

class App extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.props.history.push("/dashboard");
      } else {
        this.setState({ user: null });
        this.props.history.push("/login");
      }
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          {this.state.user ? (
            <Route path="/dashboard" exact component={dashboard} />
          ) : (
            <Route path="/login" exact component={loginScreen} />
          )}
          <Route path="/forgotPassword" exact component={forgotPassword} />
          <Route path="/signup" exact component={signupScreen} />
          <Route path="/adminLogin" exact component={adminLogin} />
          <Route path="/articles" exact component={articles} />
          <Route path="/articleView" exact component={articleView} />
          <Route path="/rewards" exact component={rewards} />
          <Route path="/rewardView" exact component={rewardView} />
          <Route path="/events" exact component={events} />
          <Route path="/eventView" exact component={eventView} />
        </Switch>
      </Router>
    );
  }
}
export default App;
