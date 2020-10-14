import React, { Component } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Mynavbar from "../Components/Mynavbar";
import Background from "../images/cycle.jpg";
import Blackimage from "../images/black.jpg";
import Swimming from "../images/swimming.png";
import Fullblack from "../images/fullblack1.jpg";
import Fullblack12 from "../images/fullblack12.jpg";
import Watch from "../images/watch.png";
import Gym from "../images/gym.jpg";
import Cyclist from "../images/cyclist.jpg";
import Snow from "../images/snow.jpg";
import Dirtbike from "../images/dirtbike.jpg";
import Boy from "../images/boy.png";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import {
  FaBeer,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaRegCheckSquare,
} from "react-icons/fa";

class landingScreen extends Component {
  render() {
    return (
      <>
        <Mynavbar />
        <div
          style={{
            backgroundImage: `url("${Dirtbike}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            height: 900,
          }}
        >
          <div
            style={{
              // height: "80vh",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                filter: "blur(3px)",
                color: "grey",
                fontSize: 30,
                right: "20px",
                textAlign: "right",
              }}
            >
              <h1>RIDE</h1>
              <h1>REWARD</h1>
              <h1>REPEAT</h1>
            </div>
            <div style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
              <Row className="py-5">
                <Col style={{ backgroundColor: "transparent" }} sm>
                  <p
                    className="pl-5"
                    style={{
                      fontSize: 15,
                      color: "white",
                      filter: "blur(1px)",
                    }}
                  >
                    RIDE.REWARD.REPEAT
                  </p>
                  <p
                    className="pl-5"
                    style={{
                      fontSize: 50,
                      fontWeight: "bold",
                      color: "white",
                      filter: "blur(1px)",
                    }}
                  >
                    MOTO
                  </p>
                  <p
                    className="pl-5"
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "white",
                      filter: "blur(1px)",
                    }}
                  >
                    PLUS PRO
                  </p>
                </Col>
                <Col sm></Col>
              </Row>
            </div>

            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.8)",
              }}
            >
              <div>
                <Row style={{}}></Row>
                <Row style={{ height: 50 }}>
                  {/* <Col></Col> */}
                  <Col
                    lg={{ offset: 2, span: 2 }}
                    xs={{ offset: 1, span: 6 }}
                    // xs={6}
                    // className="ml-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      color: "white",
                      borderBottom: " solid 2px #af8d59",
                      marginBottom: 10,
                      paddingBottom: 20,
                    }}
                  >
                    <Button
                      style={{
                        borderWidth: 0,
                        borderColor: "#af8d59",
                        backgroundColor: "transparent",
                        fontWeight: "bold",

                        color: "white",
                      }}
                    >
                      GET STARTED TODAY
                    </Button>
                    {/* GET STARTED TODAY */}
                  </Col>
                  {/* <Col></Col>
              <Col></Col>
              <Col></Col> */}
                </Row>

                <Row
                  style={{
                    height: 50,
                  }}
                >
                  <Col className="d-none d-lg-flex"></Col>
                  <Col className="d-none d-lg-flex"></Col>
                  <Col
                    style={{
                      backgroundColor:
                        "linear-gradient(90deg,rgba(0,0,0,0) 15%,#2a2e60 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    support@motopluspro.com
                  </Col>
                  <Col
                    style={{
                      backgroundColor:
                        "linear-gradient(90deg,rgba(0,0,0,0) 15%,#2a2e40 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  ></Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col
                    xs={12}
                    md={6}
                    style={{
                      backgroundColor: "#af8d59",
                      height: 450,
                      padding: 30,
                      borderRadius: 30,
                    }}
                  >
                    <h3 style={{ color: "white" }}>
                      SUBSCRIBE TO OUR NEWSLETTER
                    </h3>
                    <br />
                    <p style={{ color: "white" }}>
                      Get the latest update of our all the offers regarding the
                      awards and free points policies.
                    </p>
                    <Form>
                      <br />
                      <br />

                      <Row>
                        <Col>
                          <Form.Control
                            placeholder=" Name"
                            style={{
                              backgroundColor: "transparent",
                              // paddingBottom: 20,
                              border: "none",
                              borderBottom: "solid 2px white",

                              // border: "4px",
                              color: "white",
                            }}
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Email Address"
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              borderBottom: "solid 2px white",

                              border: "4px",
                            }}
                          />
                          <br />
                          <br />
                          <br />
                          <Button
                            style={{
                              borderWidth: 1,
                              borderColor: "white",
                              backgroundColor: "transparent",
                            }}
                          >
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <Row style={{ backgroundImage: `url("${Blackimage}")` }}>
            <Col
              className="d-none d-lg-flex"
              style={{ height: 550, backgroundColor: "black" }}
              sm
            ></Col>
            <Col
              style={{
                backgroundColor: "black",
              }}
              sm
            >
              <br />
              <h6 style={{ color: "white", textAlign: "center" }}> WHY?</h6>
              <br />

              <h1 style={{ color: "white", textAlign: "center" }}> join US</h1>
              <br />

              <p style={{ color: "white" }}>
                The only place that rewards you with the products you need, for
                simply doing what you love, in all seasons, in all locations.
                <br /> It’s that simple. <br />
                You are part of community of riders, on all types of vehicles,
                in all seasons.
                <br /> Your access to rewards are only limited by how often you
                get outdoors.
                <br /> No prior purchase needed to earn <FaRegCheckSquare />
                <br /> No enter-to-win needed to earn <FaRegCheckSquare />
                <br /> It’s all about supporting YOU, the riding community.
              </p>
              <br />
              <br />
              <Button
                style={{
                  borderWidth: 1,
                  borderColor: "#af8d59",
                  backgroundColor: "transparent",

                  color: "white",
                }}
              >
                Join Now
              </Button>
            </Col>

            <Col style={{ backgroundColor: "black" }} sm>
              {/* <br />

              <h3
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                GET TO KNOW US
              </h3>
              <>
                <br />
                <Button
                  style={{
                    backgroundColor: "transparent",
                    borderWidth: 0,
                    borderBottom: " solid 2px #af8d59",
                    paddingRight: 50,
                    marginBottom: 10,
                    paddingBottom: 5,
                  }}
                  size="lg"
                  block
                >
                  <p style={{ color: "black" }}>Who we are?</p>
                </Button>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    borderWidth: 0,
                    borderBottom: " solid 2px #af8d59",
                    paddingRight: 50,
                    marginBottom: 10,
                    paddingBottom: 5,
                  }}
                  variant="secondary"
                  size="lg"
                  block
                >
                  <p style={{ color: "black" }}>Benefits</p>
                </Button>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    borderWidth: 0,
                    borderBottom: " solid 2px #af8d59",
                    paddingRight: 50,
                    marginBottom: 10,
                    paddingBottom: 5,
                  }}
                  variant="secondary"
                  size="lg"
                  block
                >
                  <p style={{ color: "black" }}>How its work?</p>
                </Button>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    borderWidth: 0,
                    borderBottom: " solid 2px #af8d59",
                    paddingRight: 50,
                    marginBottom: 10,
                    paddingBottom: 5,
                  }}
                  size="lg"
                  block
                >
                  <p style={{ color: "black" }}>Join now</p>
                </Button>
                <Button
                  style={{ backgroundColor: "transparent", borderWidth: 0 }}
                  size="lg"
                  block
                >
                  <p
                    style={{
                      color: "black",
                      borderBottom: " solid 2px #af8d59",
                      paddingRight: 50,
                      marginBottom: 10,
                      paddingBottom: 5,
                    }}
                  >
                    Contact US
                  </p>
                </Button>
                <br />
                <Button
                  style={{
                    borderWidth: 1,
                    borderColor: "#af8d59",
                    backgroundColor: "transparent",

                    color: "black",
                  }}
                >
                  LEARN MORE
                </Button>
              </> */}
            </Col>
          </Row>
          <div
            style={{
              backgroundImage: `url("${Fullblack12}")`,
              // height: 1000,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <Row
              style={{
                height: "20%",

                justifyContent: "center",
              }}
            >
              <h1 style={{ color: "white" }}>
                <br />
                <br />
                HOW ITS WORKS
              </h1>
            </Row>
            <br />
            <br />
            <br />
            <br />

            <Row style={{ height: "65%" }}>
              <Col sm>
                <Accordion defaultActiveKey="0">
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        First Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        1-Create a Moto Plus Pro account and sign in to access
                        your custom dashboard
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="1"
                      >
                        Second Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        2-Sync your chosen riding tracker app with your Moto
                        Plus account to upload your rides
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="2"
                      >
                        Third Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        3-Sign up for chosen challenges, or simply start
                        tracking your rides. Multiple types of rides and any
                        vehicle type always accepted: street, off-road, snow,
                        etc.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="3"
                      >
                        Fourth Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        4-Earn reward credits for your activity. Track your
                        activity and account in your dashboard
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="4"
                      >
                        Fifth Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        5-Earn reward credits for your activity. Track your
                        activity and account in your dashboard
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="5"
                      >
                        Sixth Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        6-Earn reward credits for your activity. Track your
                        activity and account in your dashboard
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>

              <Col sm>
                <Image src={Watch} fluid />
                <Button
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#af8d59",
                  }}
                  // variant="primary"
                  size="lg"
                  sm
                >
                  SIGN UP NOW
                </Button>
              </Col>
            </Row>
            <Row style={{ backgroundColor: "white", height: "20%" }}> </Row>
          </div>
          {/* <div
            style={{
              backgroundImage: `url("${Snow}")`,
              height: 1000,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.8)",
                textAlign: "center",
              }}
            >
              <br />
              <br />
              <h1
                style={{
                  color: "white",
                  justifyContent: "center",
                  // textAlign: "center",
                }}
              >
                0.00
              </h1>
              <br />

              <h5 style={{ color: "white", textAlign: "center" }}>
                K N O W .A B O U T. U S
              </h5>
              <br />
              <h1 style={{ color: "white", textAlign: "center" }}> WHAT IS</h1>
              <br />
              <h1 style={{ color: "white", textAlign: "center" }}>
                MOTO PLUS PRO?
              </h1>
              <br />
              <p
                style={{
                  color: "white",
                  // textAlign: "center",
                }}
                sm
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <br />
              <br />
              <Button
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 0,
                  borderBottom: " solid 2px #af8d59",
                }}
              >
                BECOME A MEMBER
              </Button>
            </div>
          </div> */}
          <div
            style={{
              backgroundImage: `url("${Fullblack}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
          >
            <div
              style={{
                // height: "100%",
                // width: "100%",
                backgroundColor: "rgba(0,0,0,0.9  )",

                // textAlign: "center",
              }}
            >
              <Row
                style={
                  {
                    // textAlign: "right",
                    // height: 400,
                  }
                }
              >
                {/* <Col sm></Col>
                <Col sm></Col> */}
                <Col md={{ span: 6, offset: 6 }} lg={{ span: 4, offset: 8 }} sm>
                  <br />
                  <br />
                  <br />
                  <div className="w-100 text-md-right p-3 ">
                    <h1 style={{ color: "white", paddingRight: 100 }}>
                      BENEFITS
                    </h1>
                    <p
                      style={{
                        color: "white",
                        paddingRight: 50,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor.
                    </p>
                    <br />

                    <Button
                      variant="light"
                      style={{
                        color: "white",
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        borderBottom: " solid 2px #af8d59",
                        paddingRight: 50,
                        marginBottom: 10,
                        paddingBottom: 20,
                        animation: "none",
                      }}
                    >
                      SIGN UP FOR A CLASS
                    </Button>
                  </div>
                </Col>
              </Row>
              <Container>
                <Row>
                  <Col
                    style={{
                      backgroundColor: "#2a2e40",
                      borderRadius: 10,
                      wordWrap: "break-word",
                    }}
                    md
                  >
                    <br />
                    <h3 style={{ color: "white" }}>COMPATIBLE APP</h3>
                    <br />
                    <br />
                    <p style={{ color: "white" }}>
                      o Use a variety of tracking apps for your rides. Each of
                      your ride’s data will be accessed by Moto Plus Pro into
                      your custom dashboard. Smart watch not necessary, just
                      travel with your cell phone as your tracker.
                    </p>
                  </Col>
                  <Col
                    style={{
                      backgroundColor: "white",
                      borderRadius: 10,
                      wordWrap: "break-word",
                    }}
                    md
                  >
                    <br />
                    <h3 style={{ color: "#2a2e40" }}>REWARDS</h3>
                    <br />
                    <br />
                    <p style={{ color: "#2a2e40" }}>
                      o Your rides equal reward credit. Use your reward points
                      on a wide selection of top industry brands and products.
                      Keep riding to earn more.
                    </p>
                  </Col>
                  <Col
                    style={{
                      backgroundColor: "#af8d59",
                      borderRadius: 10,
                      wordWrap: "break-word",
                    }}
                    md
                  >
                    <br />
                    <h3 style={{ color: "white" }}>AUTO SYNCHRONIZATION</h3>
                    <br />
                    <br />
                    <p style={{ color: "white" }}>
                      o Your rides will be logged in automatically to your
                      dashboard from your app
                    </p>
                  </Col>
                  <Col
                    style={{
                      backgroundColor: "#2a2e40",
                      borderRadius: 10,
                      wordWrap: "break-word",
                    }}
                    md
                  >
                    <br />
                    <h3 style={{ color: "white" }}>Challenges</h3>
                    <br />
                    <br />
                    <p style={{ color: "white" }}>
                      o Each week multiple challenges will be set for you to
                      achieve. Sign up for as many challenges as prefer, and
                      continue to get out and ride in addition to your
                      challenges to keep tracking your rides.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* <div
            style={{
              backgroundImage: `url("${Fullblack}")`,
              // height: 1000,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <Row
              style={{
                height: "20%",

                justifyContent: "center",
              }}
            >
              <h1 style={{ color: "white" }}>
                <br />
                <br />
                HOW ITS WORKS
              </h1>
            </Row>
            <br />
            <br />
            <br />
            <br />

            <Row style={{ height: "65%" }}>
              <Col sm>
                <Accordion defaultActiveKey="0">
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        First Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        1-Create a Moto Plus Pro account and sign in to access
                        your custom dashboard
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="1"
                      >
                        Second Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        2-Sync your chosen riding tracker app with your Moto
                        Plus account to upload your rides
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="2"
                      >
                        Third Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        3-Sign up for chosen challenges, or simply start
                        tracking your rides. Multiple types of rides and any
                        vehicle type always accepted: street, off-road, snow,
                        etc.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="3"
                      >
                        Fourth Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        4-Earn reward credits for your activity. Track your
                        activity and account in your dashboard
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="4"
                      >
                        Fifth Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        5-Earn reward credits for your activity. Track your
                        activity and account in your dashboard
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: " solid 1px white",
                      borderRadius: 0,
                    }}
                  >
                    <Card.Header>
                      <Accordion.Toggle
                        style={{ color: "white" }}
                        as={Button}
                        variant="link"
                        eventKey="5"
                      >
                        Sixth Step
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        6-Earn reward credits for your activity. Track your
                        activity and account in your dashboard
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>

              <Col sm>
                <Image src={Watch} fluid />
                <Button
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#af8d59",
                  }}
                  // variant="primary"
                  size="lg"
                  sm
                >
                  SIGN UP NOW
                </Button>
              </Col>
            </Row>
            <Row style={{ backgroundColor: "white", height: "20%" }}> </Row>
          </div> */}
            <div
              style={{
                backgroundImage: `url("${Gym}")`,
                // height: "50%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              <div
                style={{
                  height: "100%",
                  padding: "50px 0",
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  // textAlign: "center",
                }}
              >
                <Container>
                  <Row>
                    <Col>
                      <br />
                      <br />
                      <br />
                      <br />
                      <p style={{ color: "white" }}>
                        Select the profession of your own choice and then
                        connect with us. You will get a lot of benefits in
                        collaborating with us. Become a member now and
                        synchronize your data and earns points.
                      </p>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          borderColor: "#af8d59",
                        }}
                        variant="primary"
                        size="lg"
                      >
                        SIGN UP NOW
                      </Button>
                    </Col>
                    <Col
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image src={Cyclist} fluid />
                    </Col>
                    <Col style={{}} sm>
                      <Image src={Snow} fluid />
                    </Col>
                    <Col
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                      sm
                    >
                      <Image src={Dirtbike} fluid />
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url("${Boy}")`,
                // height: 1000,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  // textAlign: "center",
                }}
              >
                <Row
                  style={{
                    height: "35%",
                    // backgroundColor: "brown",
                  }}
                >
                  <Container>
                    <br />
                    <br />
                    <br />
                    <br />

                    <p
                      style={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      RIDE.REWARD.REPEAT
                    </p>
                    <p
                      style={{
                        fontSize: 70,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      CONTACT US
                    </p>
                  </Container>
                </Row>
                <Row style={{ height: "65%" }}>
                  <Col sm>
                    <br />
                    <br />
                    <br />

                    <Form>
                      <Form.Group controlId="formGroupEmail">
                        <Form.Control
                          style={{
                            backgroundColor: "transparent",
                            borderWidth: 0,
                            borderBottom: " solid 2px #af8d59",
                            paddingRight: 50,
                            marginBottom: 10,
                            paddingBottom: 20,
                          }}
                          type="email"
                          placeholder="Name"
                        />
                      </Form.Group>
                      <br />
                      <Form.Group controlId="formGroupPassword">
                        <Form.Control
                          style={{
                            backgroundColor: "transparent",
                            borderWidth: 0,
                            borderBottom: " solid 2px #af8d59",
                            paddingRight: 50,
                            marginBottom: 10,
                            paddingBottom: 20,
                          }}
                          type="password"
                          placeholder="Email Address"
                        />
                        <br />
                        <br />
                        <Form.Control
                          style={{
                            backgroundColor: "transparent",
                            borderWidth: 0,
                            borderBottom: " solid 2px #af8d59",
                            paddingRight: 50,
                            marginBottom: 10,
                            paddingBottom: 20,
                          }}
                          as="textarea"
                          rows={3}
                          placeholder="Message"
                        />
                      </Form.Group>
                    </Form>
                    <Button
                      style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        borderBottom: " solid 2px #af8d59",
                        paddingRight: 50,
                        marginBottom: 10,
                        paddingBottom: 20,
                      }}
                    >
                      Submit
                    </Button>
                  </Col>
                  <Col style={{ backgroundColor: "#af8d59", borderRadius: 30 }}>
                    <Container>
                      <Row
                        className="pt-5"
                        style={{
                          backgroundColor: "#rgb(175, 141, 89)",
                          height: 300,
                          // backgroundColor: "red",
                        }}
                      >
                        <p></p>
                        <p
                          style={{
                            fontSize: 25,
                            fontWeight: "bold",
                            justifyContent: "center",
                          }}
                        >
                          CONNECT WITH US
                        </p>
                        <p>
                          If you feel any kind of problem in your account , the
                          synchronization system and simply fill the contact
                          form our team will replay ASAP.
                        </p>
                      </Row>
                    </Container>
                    <br />
                    <Container>
                      <div
                        style={{
                          backgroundColor: "white",
                          height: 300,
                          borderRadius: 30,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p
                            style={{
                              fontSize: 30,
                              fontWeight: "bold",
                              padding: 40,
                            }}
                          >
                            SIGN UP & EARN POINTS
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            style={{
                              height: "20%",
                              width: "20%",
                              borderBlockEndColor: "black",
                              borderWidth: 3,
                              borderRadius: 20,
                            }}
                            variant="light"
                          >
                            GET STARTED
                          </Button>
                        </div>
                      </div>
                    </Container>
                  </Col>
                </Row>
                <Row
                  style={{
                    backgroundColor: "black",
                  }}
                >
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p style={{ color: "grey" }}>
                      Designed by{" "}
                      <span style={{ fontWeight: "bold" }}> ALPHAVERX</span>|
                      Copyright © 2020 Moto Plus Pro
                    </p>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaFacebookF
                      size="2em"
                      className="mr-3"
                      onClick={() => {
                        console.log("Lun mera");
                      }}
                    />
                    <FaTwitter
                      size="2em"
                      className="mr-3"
                      onClick={() => {
                        console.log("Lun mera");
                      }}
                    />
                    <FaInstagram
                      size="2em"
                      onClick={() => {
                        console.log("Lun mera");
                      }}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(landingScreen);
