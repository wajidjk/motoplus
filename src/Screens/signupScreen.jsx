import React, { Component } from "react";
import { Image, Container, Button, Row, Col, Form } from "react-bootstrap";
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
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "../Css/styleSheet.css";

class signupScreen extends Component {
  state = {
    email: "",
    password: "",
    cpassword: "",
    lname: "",
    fname: "",
    gender: "",
    country: "",
    dob: "",
  };

  selectCountry(val) {
    this.setState({ country: val });
  }

  handleSignup = async () => {
    await fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        fire
          .firestore()
          .collection("users")
          .doc(u.user.uid)
          .set({
            email: u.user.email,
            password: this.state.password,
            firstName: this.state.fname,
            lastName: this.state.lname,
            gender: this.state.gender,
            country: this.state.country,
            dob: this.state.dob,
          })
          .then(() => {
            this.props.history.push("/dashboard");
            alert("Account Created Successfully!");
          });
      })
      .catch((err) => {
        alert("Account Creation Failed!", err);
      });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url("${Background}")`,
          width: "100vw",
          display: "flex",
          backgroundSize: "cover",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          className="App overlay"
          style={{
            backgroundColor: "white",
            width: "25%",
            padding: 35,
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
              <Form.Group controlId="formGroupPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  value={this.state.fname}
                  onChange={(event) => {
                    this.setState({ fname: event.target.value });
                  }}
                  style={{ fontSize: 12 }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  value={this.state.lname}
                  onChange={(event) => {
                    this.setState({ lname: event.target.value });
                  }}
                  style={{ fontSize: 12 }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}
                  placeholder="Email Address"
                  style={{ fontSize: 12 }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New Password"
                  name="password"
                  value={this.state.password}
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                  style={{ fontSize: 12 }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm New Password"
                  name="cpassword"
                  value={this.state.cpassword}
                  onChange={(event) => {
                    this.setState({ cpassword: event.target.value });
                  }}
                  style={{ fontSize: 12 }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Country Representing</Form.Label>

                <CountryDropdown
                  value={this.state.country}
                  onChange={(val) => this.selectCountry(val)}
                  style={{ width: "100%" }}
                />
              </Form.Group>

              <Form.Group className="mb-0">
                <Form.Label style={{ fontWeight: "bold" }}>Gender</Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  name="gender"
                  onChange={(event) => {
                    this.setState({ gender: "Male" });
                  }}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  name="gender"
                  onChange={(event) => {
                    this.setState({ gender: "Female" });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  style={{ fontSize: 12 }}
                  value={this.state.dob}
                  onChange={(event) => {
                    this.setState({ dob: event.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Button
                  variant="danger"
                  size="sm"
                  style={{ width: "100%", fontSize: 12 }}
                  onClick={this.handleSignup}
                >
                  Create Account
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(signupScreen);
