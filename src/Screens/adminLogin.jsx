import React, { Component } from "react";
import {
  Image,
  Container,
  Button,
  Row,
  Col,
  Form,
  Alert,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import Background from "../Images/background.jpg";
import Logo from "../Images/logo.png";
import back from "../Images/back.svg";
import fire from "../fire";
import "../Css/styleSheet.css";

class adminLogin extends Component {
  state = {
    email: "ad.motoplus@gmail.com",
    password: "",
  };

  handleLogin = async () => {
    await fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        if (this.state.password) {
          this.props.history.push("/dashboard");
          alert("Login Successful!");
        }
      })
      .catch((error) => {
        alert("Login Failed!");
      });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url("${Background}")`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          className="App overlay"
          style={{
            width: "25%",
            backgroundColor: "white",
            padding: 35,
            borderRadius: 10,
          }}
        >
          <Image
            src={Logo}
            style={{ width: "50%", marginTop: "10%" }}
            className="mt-0"
          />
          <div className="mt-4">
            <Form style={{ textAlign: "left", fontSize: 12 }}>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Enter Admin Password"
                  name="password"
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                  style={{ fontSize: 12 }}
                />
              </Form.Group>

              <Form.Group>
                <Button
                  variant="danger"
                  size="sm"
                  style={{ width: "100%", fontSize: 12 }}
                  onClick={this.handleLogin}
                >
                  Login
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(adminLogin);
