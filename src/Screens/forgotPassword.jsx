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

class forgotPassword extends Component {
  state = {
    email: "",
  };

  forgotPassword = () => {
    fire.auth().sendPasswordResetEmail(this.state.email);
    alert("Verification Email Sent!");
    this.props.history.push("/login");
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
          <div style={{ textAlign: "left" }} className="mb-0">
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Col>
                <Image src={back} style={{ height: 12, color: "grey" }} />
                <Link
                  style={{ fontSize: 12, color: "grey" }}
                  to={{
                    pathname: "/login",
                  }}
                >
                  Back
                </Link>
              </Col>
            </Row>
          </div>
          <Image
            src={Logo}
            style={{ width: "50%", marginTop: "10%" }}
            className="mt-0"
          />
          <div className="mt-4">
            <Form style={{ textAlign: "left", fontSize: 12 }}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}
                  style={{ fontSize: 12 }}
                />
              </Form.Group>

              <Form.Group>
                <Button
                  variant="danger"
                  size="sm"
                  style={{ width: "100%", fontSize: 12 }}
                  onClick={this.forgotPassword}
                >
                  Reset
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(forgotPassword);
