import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";
import cardImage from "../Images/splash.jpg";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class RewardComponent extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: "/rewardView",
          selectedReward: this.props.rewards,
        }}
        style={{ textDecoration: "none" }}
      >
        <Card
          style={{
            width: "18rem",
            margin: 30,
            textAlign: "center",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.rewards.image}
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          />
          <Card.Body className="px-5">
            <Image
              style={{
                width: "50%",
                marginTop: -60,
                borderRadius: "50%",
                border: "solid 3px white",
              }}
              src={this.props.rewards.logo}
              className="mb-3"
            />
            <Card.Title>{this.props.rewards.name}</Card.Title>
            <Card.Subtitle
              className="mt-2 mb-2 text-muted"
              style={{ fontSize: 12 }}
            >
              {this.props.rewards.description}
            </Card.Subtitle>
            <Card.Text style={{ color: "black" }} className="mt-5">
              {this.props.rewards.price}
              <FaMoneyBillAlt className="ml-1" style={{ color: "#ffc72f" }} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  }
}

export default withRouter(RewardComponent);
