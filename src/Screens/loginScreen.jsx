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
import FacebookLogo from "../Images/facebook.jpg";
import GoogleLogo from "../Images/google.webp";
import fire from "../fire";
import firebase from "firebase";
import "../Css/styleSheet.css";

class loginScreen extends Component {
  state = { email: "", password: "" };

  signinGoogle = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    await fire
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var token = result.credential.accessToken;
        var user = result.user;
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        Alert("Login Failed");
      });
  };

  signinFacebook = async () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    await fire
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var token = result.credential.accessToken;
        var user = result.user;
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        Alert("Login Failed");
      });
  };

  handleLogin = async () => {
    await fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        if (this.state.email) {
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
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          className="App overlay"
          style={{
            backgroundColor: "white",
          }}
        >
          <Image src={Logo} style={{ width: "50%", marginTop: "10%" }} />
          <div className="mt-4">
            <Button
              style={{
                width: "80%",
                backgroundColor: "white",
                borderColor: "blue",
              }}
              onClick={this.signinFacebook}
            >
              <Container>
                <Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Col
                    lg="2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={FacebookLogo} style={{ height: 20 }} />
                  </Col>
                  <Col
                    lg="10"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ color: "black", fontSize: 12 }}>
                      Continue with Facebook
                    </span>
                  </Col>
                </Row>
              </Container>
            </Button>
            <Button
              style={{
                width: "80%",
                backgroundColor: "white",
                borderColor: "green",
              }}
              onClick={this.signinGoogle}
              className="mt-2"
            >
              <Container>
                <Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Col
                    lg="2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={GoogleLogo} style={{ height: 20 }} />
                  </Col>
                  <Col
                    lg="10"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ color: "black", fontSize: 12 }}>
                      Continue with Google
                    </span>
                  </Col>
                </Row>
              </Container>
            </Button>
            <p style={{ color: "grey", fontSize: 12 }} className="mt-4 mb-4">
              or
            </p>
            <Form>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}
                  style={{
                    width: "80%",
                    marginLeft: "10%",
                    marginRight: "10%",
                    fontSize: 12,
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="email"
                  value={this.state.password}
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                  style={{
                    width: "80%",
                    marginLeft: "10%",
                    marginRight: "10%",
                    fontSize: 12,
                  }}
                />
              </Form.Group>
              <Form.Group
                style={{
                  marginLeft: "10%",
                  marginRight: "10%",
                  width: "80%",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <span
                    style={{
                      textAlign: "left",
                      flex: 1,
                    }}
                  >
                    <input type="checkbox" style={{ width: 10, height: 10 }} />
                    <label style={{ fontSize: 12, marginLeft: 5 }}>
                      Keep me signed in
                    </label>
                  </span>
                  <span style={{ marginLeft: "17%" }}>
                    <Link
                      style={{ fontSize: 12, textAlign: "right" }}
                      to="/forgotPassword"
                    >
                      Forgot Password?
                    </Link>
                  </span>
                </div>
              </Form.Group>
              <Button
                variant="danger"
                size="sm"
                style={{ width: "80%" }}
                onClick={this.handleLogin}
              >
                <span style={{ fontSize: 12 }}>Sign In</span>
              </Button>
              <Form.Group
                style={{
                  textAlign: "left",
                  width: "80%",
                  marginLeft: "10%",
                  marginRignt: "10%",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <span
                    style={{
                      textAlign: "left",
                      flex: 1,
                    }}
                  >
                    <label style={{ fontSize: 12, marginLeft: 5 }}>
                      Don't have an account?
                    </label>
                  </span>
                  <span style={{ marginLeft: "5%" }}>
                    <Link
                      style={{ fontSize: 12, textAlign: "right" }}
                      to={{
                        pathname: "/signup",
                      }}
                    >
                      Sign Up
                    </Link>
                  </span>
                </div>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(loginScreen);
