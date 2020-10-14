import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import logo2 from "../images/logo2.jpeg";
class Mynavbar extends Component {
  render() {
    return (
      <Navbar
        style={{ zIndex: 9 }}
        bg="light"
        variant="light"
        className="ml-10 sticky-top"
      >
        <Navbar.Brand href="#home">
          <Image style={{ height: 55, width: 100 }} src={logo2} />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <Button variant="light">Home</Button>
          <Button variant="warning">Sign In Sign up</Button>{" "}
        </Form>
      </Navbar>
    );
  }
}

export default withRouter(Mynavbar);
