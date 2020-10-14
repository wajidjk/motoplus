import React, { Component } from "react";
import { Accordion, Card, Col, Container, Row, Table } from "react-bootstrap";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
class UsersTable extends Component {
  render() {
    return (
      <div>
        {/* <Accordion>
          <Card style={{ textAlign: "left" }}>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {this.props.userInfo.firstName} {this.props.userInfo.lastName}
              <div style={{ textAlign: "right" }}>
                <FaRegTrashAlt />
              </div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Container>
                  <Row>
                    <Col>{this.props.userInfo.gender}</Col>
                    <Col>{this.props.userInfo.dob}</Col>
                    <Col>{this.props.userInfo.email}</Col>
                    <Col>{this.props.userInfo.country}</Col>
                  </Row>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}

        <tr></tr>
      </div>
    );
  }
}
export default withRouter(UsersTable);
