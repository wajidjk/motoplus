import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
class RewardsRow extends Component {
  render() {
    return (
      <>
        <div>
          <Row style={{ backgroundColor: "yellow" }}>
            <Col style={{ backgroundColor: "green" }}>sdsd</Col>
            <Col style={{ backgroundColor: "brown" }}></Col>
            <Col style={{ backgroundColor: "purple" }}></Col>
            <Col style={{ backgroundColor: "red" }}></Col>
          </Row>
        </div>
      </>
    );
  }
}
export default withRouter(RewardsRow);
