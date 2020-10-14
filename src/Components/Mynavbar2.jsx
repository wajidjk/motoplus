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
class Mynavbar2 extends Component {
  render() {
    return (
      <Navbar
        style={{ zIndex: 9, top: 0 }}
        bg="light"
        variant="light"
        className="ml-10 position-sticky"
      >
        <Navbar.Brand href="#home">
          <Image style={{ width: 100 }} src={logo2} />
        </Navbar.Brand>
        <Nav variant="tabs" defaultActiveKey="/dashboard">
          <Nav.Item>
            <Nav.Link eventKey="link-0" href="/dashboard">
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" href="/users">
              Users
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" href="/rewardAdmin">
              Rewards
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" href="#">
              Events
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" href="#">
              Articles
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5" href="#">
              Chat
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mr-0">
            <Button variant="warning" href="#">
              Logout
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
}

export default withRouter(Mynavbar2);
