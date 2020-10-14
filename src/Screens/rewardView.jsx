import React, { Component } from "react";
import Navbar from "../Components/NavbarComponent";
import {
  FaMoneyBillAlt,
  FaChevronLeft,
  FaExclamationCircle,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

class rewardView extends Component {
  state = {
    selectedReward: {
      id: "",
      name: "",
      price: "",
      description: "",
      image: "",
      logo: "",
      benefits: "",
      retail: "",
      background: "",
    },
  };

  componentDidMount() {
    this.setState({ selectedReward: this.props.location.selectedReward });
  }
  render() {
    return (
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <Navbar />
        <Container
          style={{
            cursor: "pointer",
          }}
          className="pt-3"
          onClick={() => {
            this.props.history.push("/rewards");
          }}
        >
          <FaChevronLeft /> RETURN
        </Container>
        <div style={{ textAlign: "center" }} className="mt-5 px-5">
          <Row>
            <Col>
              <Image
                src={this.state.selectedReward.background}
                style={{
                  height: 500,
                  width: 500,
                  borderRadius: 20,
                }}
                // className="sticky-top"
              />
            </Col>
            <Col className="pr-5">
              <div
                style={{
                  borderRadius: 20,
                  backgroundColor: "white",
                  textAlign: "left",
                }}
              >
                <div className="p-5">
                  <Image
                    src={this.state.selectedReward.logo}
                    style={{ width: "20%" }}
                  />
                  <h1 className="my-5">
                    {this.state.selectedReward.description}
                  </h1>
                  <Button
                    disabled
                    style={{
                      borderRadius: 30,
                      color: "white",
                      backgroundColor: "#D7D7D7",
                      borderWidth: 0,
                    }}
                  >
                    <div className="mx-4 my-2" style={{ fontWeight: "bold" }}>
                      MORE CREDITS NEEDED
                    </div>
                  </Button>
                </div>
              </div>
              <div
                style={{
                  borderRadius: 20,
                  backgroundColor: "#E7F0ED",
                  borderWidth: 30,
                  borderColor: "red",
                }}
                className="p-3 mt-3 mb-5"
              >
                <Row>
                  <Col xs="1">
                    <FaExclamationCircle
                      size="lg"
                      style={{ color: "#6EC2AB" }}
                    />
                  </Col>
                  <Col style={{ color: "#6EC2AB", textAlign: "left" }}>
                    Promotional coupon code may not be combined with other
                    discounts or sales incentives. Coupon code must be entered
                    at checkout. Discount valid for one qualifying item. Offer
                    valid for 90 days past redemption. Coupon is valid for
                    one-time use only at ironmanstore.com and
                    eu.ironmanstore.com.
                  </Col>
                </Row>
              </div>
              <div style={{ textAlign: "left" }} className="mb-5">
                <p style={{ fontWeight: "bold" }}>
                  {this.state.selectedReward.retail} Retail Price
                </p>
                <h6>IRONMAN ATHLETE BENEFIT</h6>
                <br />
                <h6>{this.state.selectedReward.price} Athlete Credits</h6>
                <p>{this.state.selectedReward.benefits}</p>
              </div>
              <div className="py-5">
                <div>share</div>
                <FaFacebookF className="mx-2" style={{ color: "#72A7DA" }} />
                <FaTwitter className="mx-2" style={{ color: "#72A7DA" }} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(rewardView);
