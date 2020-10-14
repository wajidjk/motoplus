import React, { Component } from "react";
import { Container, Image, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Mynavbar2 from "../Components/Mynavbar2";
import Dirtbike from "../images/dirtbike.jpg";

class dashboard extends Component {
  render() {
    return (
      <div>
        <Mynavbar2 />
        <Container
        // style={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        // }}
        >
          <Row
            style={{
              backgroundColor: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1> Dashboard</h1>
          </Row>

          <Row>
            <Container
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image style={{ width: 300 }} src={Dirtbike} />
            </Container>
          </Row>
        </Container>
      </div>
    );
  }
}
export default withRouter(dashboard);
