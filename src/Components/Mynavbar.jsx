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
        expand="lg"
        variant="light"
        className="ml-10 sticky-top"
      >
        <Navbar.Brand href="#home">
          <Image style={{ height: 55, width: 100 }} src={logo2} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Button variant="light">Home</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="warning">Sign In Sign up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Mynavbar);
