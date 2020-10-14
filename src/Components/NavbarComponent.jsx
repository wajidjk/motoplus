import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import Logo from "../Images/logo.png";
import { FaEllipsisV } from "react-icons/fa";
import fire from "../fire";

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/dashboard">
          <Image src={Logo} style={{ width: 150 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" justify variant="tabs">
            <Nav.Item>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/events">Events</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/articles">Articles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/rewards">Rewards</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline style={{ marginRight: "10%" }}>
            <Button variant="link" style={{ textDecoration: "none" }} href="#">
              Ali Zain
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(250, 173, 108)",
                  borderRadius: "50%",
                  height: 50,
                  width: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                AB
              </div>
            </div>
            <NavDropdown id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Settings</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Help Center</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Privacy Policies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                eventKey="4.4"
                onClick={() => {
                  fire.auth().signOut();
                  this.props.history.push("/login");
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(NavbarComponent);
