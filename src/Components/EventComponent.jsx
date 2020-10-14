import React, { Component } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import "../App.css";

class EventComponent extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: "/eventView",
          selectedEvent: this.props.events,
        }}
        style={{ textDecoration: "none" }}
      >
        <Card
          className="m-2"
          style={{
            height: 500,
            width: 380,
            backgroundImage: `url("${this.props.events.image}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: 20,
          }}
        >
          <Card.Body />

          <footer
            style={{
              color: "white",
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            className="cardBack"
          >
            <Row>
              <Col lg={3} className="ml-1">
                <Image src={this.props.events.logo} style={{ width: 70 }} />
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "left",
                }}
              >
                <h5>{this.props.events.name}</h5>
              </Col>
            </Row>
            <Row className="px-3">
              <Col className="pt-1">
                Goal
                <br />
                <p style={{ fontSize: 12, color: "#42ABC8" }}>
                  {this.props.events.goal.length > 30
                    ? this.props.events.goal.substring(0, 30 - 3) + "..."
                    : this.props.events.goal}
                </p>
              </Col>
              <Col style={{ textAlign: "right" }} className="pt-1">
                Date
                <br />
                <p style={{ fontSize: 12, color: "#42ABC8" }}>
                  {this.props.events.startDate} to {this.props.events.endDate}
                </p>
              </Col>
            </Row>
          </footer>
        </Card>
      </Link>
    );
  }
}

export default withRouter(EventComponent);
