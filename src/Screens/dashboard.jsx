import React, { Component } from "react";
import fire from "../fire";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import {
  Image,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Modal,
} from "react-bootstrap";
import noApp from "../Images/no-app.png";
import suunto from "../Images/suunto.png";
import garmin from "../Images/garmin.png";
import polar from "../Images/polar.png";
import rouvy from "../Images/rouvy.png";
import triBadge from "../Images/badges-snapshot-no-badge.png";
import NavbarComponent from "../Components/NavbarComponent";
import {
  FaStar,
  FaExclamationCircle,
  FaAngleDoubleRight,
  FaMoneyBillAlt,
  FaShare,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";
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

class dashboard extends Component {
  state = {
    show: false,
  };
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
            <h4>Share Profile on Social Media</h4>
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
        <NavbarComponent />
        <div style={{ backgroundColor: "#f5f5f5", padding: 30 }}>
          <Container
            style={{
              textAlign: "center",
            }}
          >
            <Row>
              <Col>
                <Card>
                  <Card.Body
                    style={{
                      height: 180,
                    }}
                  >
                    <div style={{ textAlign: "right" }}>
                      <FaShareAlt
                        size="20"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.setState({ show: true });
                        }}
                      />
                    </div>
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
                          height: 100,
                          width: 100,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h6>AB</h6>
                      </div>
                    </div>
                    <Card.Title>Ali Zain Bukhari</Card.Title>
                  </Card.Body>
                  <ListGroup>
                    <Container>
                      <Row
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Col
                          style={{
                            borderRight: "1px solid #d4d2d2",
                            height: 100,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              0{" "}
                              <FaStar
                                className="ml-2"
                                style={{ color: "#ffc72f" }}
                              />
                            </div>
                            <div>Points</div>
                          </div>
                        </Col>
                        <Col
                          style={{
                            borderLeft: "1px solid #d4d2d2",
                            height: 100,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              0{" "}
                              <FaMoneyBillAlt
                                className="ml-2"
                                style={{ color: "#ffc72f" }}
                              />
                            </div>
                            <div>Credits</div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </ListGroup>
                </Card>

                <Card className="mt-3">
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaExclamationCircle className="mr-2" /> CONNECT AN APP
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
                <Card className="mt-3">
                  <Card.Header>My Achievements</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Image src={triBadge} inline fluid />
                      Your badges will display here as you achieve them.
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col
                xs={6}
                style={{
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
              >
                <Image src={noApp} style={{ width: "60%" }}></Image>
                <h2>Connect your app</h2>
                <p>
                  In order to compete for and earn points, your activity must be
                  validated by a GPS enabled, heart rate tracking device.
                  Connect your app below! Don’t see your app here? Go to
                  Settings {">"} My applications
                </p>
                <Image src={suunto} style={{ margin: 20 }}></Image>
                <Image src={garmin} style={{ margin: 20 }}></Image>
                <Image src={polar} style={{ margin: 20 }}></Image>
                <Image src={rouvy} style={{ margin: 20 }}></Image>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://oly-one-product.s3-eu-west-1.amazonaws.com/ironman/static/imgs/dashboard/VR27DashboardImage.jpg"
                  />
                  <Card.Body className="px-3">
                    <Card.Title>E OLA MAU</Card.Title>
                    <Card.Text>
                      Keep on Living. And get up and after it this week with the
                      first ever full distance triathlon event on the IRONMAN
                      Virtual Club, IRONMAN VR27 Kona. The race is officially
                      underway for 7-Day athletes! 3-Day and 17-Hour athletes'
                      race window opens on Friday, October 9. Best of luck!
                    </Card.Text>
                    <Card.Link href="#">
                      Review Race Info <FaAngleDoubleRight />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
export default withRouter(dashboard);
