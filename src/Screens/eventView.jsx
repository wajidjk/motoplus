import React, { Component } from "react";
import Navbar from "../Components/NavbarComponent";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import {
  Row,
  Container,
  Image,
  Col,
  Button,
  Card,
  Modal,
} from "react-bootstrap";
import {
  FaMoneyBillAlt,
  FaChevronLeft,
  FaCalendarCheck,
  FaTimes,
} from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from "react-share";

class eventView extends Component {
  state = {
    show: false,
    selectedEvent: {
      id: 1,
      name: "TriClub ROUVY Ride",
      goal: "1 Session | Ride 30 km (Group ride on ROUVY recommended)",
      participants: "729",
      finishers: "77",
      remaining: "3/5",
      startDate: "9 October",
      endDate: "10 October",
      image:
        "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f5b03d06beade0006170e58/VR27_Kona_SBR_2360x10001599840539884.jpg",
      logo:
        "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f807acee118720006376193/ROKA_Reverse_Badge11602255679509.png",
      description:
        "You’re invited! Get your club together or grab a friend and log onto ROUVY for a group shakeout ride during the IRONMAN VR World Championship Celebration. Ride the first 30 km of the IRONMAN World Championship Ventum Bike Course on ROUVY with your fellow athletes live on Facebook on Friday, October 9 beginning at 1:20 pm ET/6:20 pm GMT.",
      prizeImage:
        "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/ROUVYKonaPrize1601536186864.jpg",
      prize:
        "FIVE lucky finishers of the Kona Inspired® Challenge will win a free 3-month subscription to ROUVY! Complete this challenge to find out if you’re an instant winner.",
      status: "current",
      conditions: [
        "Record 3 activities: 3.86 km of swimming in 1 Session, 180 km of biking in 1 Session, and 42.2 km of running in 1 Session over the Virtual Race period.",
        "Each activity has to be done in one go and must be equal to the distance required (or marginally greater). You may choose the order of the activities.",
        "Maximum distance accepted for the 3.86 km swim is 4.86 km.",
        "Maximum distance accepted for the 180 km bike is 181.25 km.",
        "Maximum distance accepted for the 42.2 km run is 42.3 km.",
        "You must register to have your activities counted. Only activities done after race registration will be counted.",
        "All activities must be completed between October 9, 2020 from 12:00 GMT and October 11, 2020 at 23:59 GMT.",
        "All your activities must be uploaded to IRONMAN VC before October 11 at 23:59 GMT.",
        "Activities don’t necessarily have to be consecutive but can be done with a lapse of time in between.",
        "Finishers will earn a badge by finishing the IRONMAN® VR27 Kona Challenger Division.",
        "The badge will be available in the Dashboard.",
        "Finishers will receive an email with final results on Monday October 12. Results will also be uploaded on this page.",
        "By participating in this event, you acknowledge that you have read, understand and agree to the terms and conditions of the PARTICIPANT WAIVER.",
      ],
    },
  };

  componentDidMount() {
    this.setState({ selectedEvent: this.props.location.selectedEvent });
  }

  render() {
    return (
      <>
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>SHARE</Modal.Title>
            <FaTimes
              size="30"
              onClick={() => {
                this.setState({ show: false });
              }}
              style={{ cursor: "pointer" }}
            />
          </Modal.Header>

          <Modal.Body style={{ textAlign: "center" }}>
            <h4>{this.state.selectedEvent.name}</h4>
            <p>Share the challenge on:</p>
            <FacebookShareButton url="https://www.fiverr.com/alphaverx">
              <FacebookIcon round size="60" className="px-2" />
            </FacebookShareButton>
            <TwitterShareButton url="https://www.fiverr.com/alphaverx">
              <TwitterIcon round size="60" className="px-2" />
            </TwitterShareButton>
            <RedditShareButton url="https://www.fiverr.com/alphaverx">
              <RedditIcon round size="60" className="px-2" />
            </RedditShareButton>
            <LinkedinShareButton url="https://www.fiverr.com/alphaverx">
              <LinkedinIcon round size="60" className="px-2" />
            </LinkedinShareButton>
            <TelegramShareButton url="https://www.fiverr.com/alphaverx">
              <TelegramIcon round size="60" className="px-2" />
            </TelegramShareButton>
          </Modal.Body>
        </Modal>
        <Navbar />
        <div>
          <Container
            style={{
              cursor: "pointer",
            }}
            className="pt-3"
            onClick={() => {
              this.props.history.push("/events");
            }}
          >
            <FaChevronLeft /> RETURN
          </Container>
          <Container>
            <Row>
              <Col lg="1" className="m-3">
                <Image
                  src={this.state.selectedEvent.logo}
                  style={{ width: 100 }}
                />
              </Col>
              <Col className="p-3">
                <h1
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "left",
                  }}
                >
                  {this.state.selectedEvent.name}
                </h1>
                <p>{this.state.selectedEvent.description}</p>
              </Col>
            </Row>
          </Container>
          <Container className="mb-5 pb-5">
            <Row>
              <Col className="pr-3">
                Goal
                <p style={{ fontSize: 12, color: "#42BDE1" }}>
                  {this.state.selectedEvent.goal}
                </p>
              </Col>
              <Col>
                Date
                <p style={{ fontSize: 12, color: "#42BDE1" }}>
                  From {this.state.selectedEvent.startDate} to{" "}
                  {this.state.selectedEvent.endDate}
                </p>
              </Col>
              <Col>
                Participants
                <p style={{ fontSize: 12, color: "#42BDE1" }}>
                  {this.state.selectedEvent.participants}
                </p>
              </Col>
              <Col>
                Finishers
                <p
                  style={{
                    fontSize: 12,
                    color: "#42BDE1",
                  }}
                >
                  {this.state.selectedEvent.finishers}
                </p>
              </Col>
            </Row>
            <div className="my-5">
              <Image
                src={this.state.selectedEvent.image}
                style={{ width: "100%" }}
              />
            </div>
            <Container>
              <Row>
                <Col lg="8">
                  <Row>
                    <h4>
                      <FaCalendarCheck />
                    </h4>
                    <h3 className="ml-3">Date</h3>
                  </Row>
                  <p className="ml-4">
                    From {this.state.selectedEvent.startDate} to
                    {this.state.selectedEvent.endDate}
                  </p>
                  <Row className=" mt-5">
                    <h4>
                      <BsCardChecklist />
                    </h4>
                    <h3 className="ml-3"> Conditions</h3>
                  </Row>
                  {this.state.selectedEvent.conditions.map((condition) => (
                    <ul key={condition.toUpperCase()}>
                      <li style={{ fontSize: 14 }}>{condition}</li>
                    </ul>
                  ))}
                </Col>
                <Col>
                  <Card style={{ borderRadius: 20 }}>
                    <Card.Img
                      style={{
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      }}
                      variant="top"
                      src={this.state.selectedEvent.prizeImage}
                    />
                    <Card.Body>
                      <Card.Title>Prize</Card.Title>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 12,
                          color: "#757286",
                        }}
                      >
                        {this.state.selectedEvent.prize}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
          <div
            className="fixed-bottom pt-3"
            style={{
              backgroundColor: "#f0f1f2",
              borderTopWidth: 20,
              borderTopColor: "black",
            }}
          >
            <Container>
              <Row>
                <Col>
                  <h6>Date</h6>
                  <p style={{ fontSize: 12 }}>
                    From {this.state.selectedEvent.startDate} to
                    {this.state.selectedEvent.endDate}
                  </p>
                </Col>
                <Col>
                  <h6>Participants</h6>
                  <p style={{ fontSize: 12 }}>
                    {this.state.selectedEvent.participants}
                  </p>
                </Col>
                <Col>
                  <h6>Finishers</h6>
                  <p style={{ fontSize: 12 }}>
                    {this.state.selectedEvent.finishers}
                  </p>
                </Col>
                <Col>
                  <h6>Remaining Prizes</h6>
                  <p style={{ fontSize: 12 }}>
                    {this.state.selectedEvent.remaining
                      ? this.state.selectedEvent.remaining
                      : "0"}
                  </p>
                </Col>
                <Col
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <Button
                      style={{
                        borderRadius: 50,
                        backgroundColor: "#71BE1E",
                        color: "white",
                        borderWidth: 0,
                      }}
                      className="px-5"
                    >
                      Sign Up
                    </Button>
                  </div>
                </Col>
                <Col
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <Button
                      style={{
                        borderRadius: 50,
                        backgroundColor: "#D7DEE1",
                        color: "#747F90",
                        borderWidth: 0,
                      }}
                      className="px-5"
                      onClick={() => {
                        this.setState({ show: true });
                      }}
                    >
                      SHARE
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(eventView);
