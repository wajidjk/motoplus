import React, { Component } from "react";
import Navbar from "../Components/NavbarComponent";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import EventComponent from "../Components/EventComponent";
import "../App.css";

class events extends Component {
  state = {
    events: [
      {
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
      {
        id: 2,
        name: "7-Day IRONMAN VR27 Kona Classic Division",
        goal:
          "Swim/Run 3.86 km (2.4 mi), Ride 180.25 km (112 mi), Run 42.2 km (26.2 mi) 1 Session | Ride 30 km (Group ride on ROUVY recommended)",
        participants: "4649",
        finishers: "170",
        remaining: "",
        startDate: "10 October",
        endDate: "12 October",
        image:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/RoadtoHawi_2360x10001601536150927.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f8030c37608a70006dcaa97/IMVR_28_Badge300x3001602236935550.png",
        description:
          "140.6 miles. 7 days. It’s time to go the full distance in Kona from wherever you are. Swim OR run 3.86 km (2.4 mi), ride 180.25 km (112 mi), and run 42.2 km (26.2 mi) in an unlimited number of sessions between Monday, October 5 at 12:00 am GMT and Sunday, October 11 at 11:59 pm GMT to earn your digital badge and credits towards rewards. You’re invited! Get your club together or grab a friend and log onto ROUVY for a group shakeout ride during the IRONMAN VR World Championship Celebration. Ride the first 30 km of the IRONMAN World Championship Ventum Bike Course on ROUVY with your fellow athletes live on Facebook on Friday, October 9 beginning at 1:20 pm ET/6:20 pm GMT.",
        prizeImage:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f5b70f9304d9d0007c07602/Webp.netcompressimage611601644864659.jpg",
        prize:
          "NOW Available on the IRONMAN Store: The Official IRONMAN VR World Championship Celebration Finisher Bundle. Reward yourself for the ultimate 140.6 mile accomplishment.",
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
      {
        id: 3,
        name: "3-Day IRONMAN VR27 Kona Classic Division",
        goal:
          "Swim/Run 3.86 km (2.4 mi), Ride 180.25 km (112 mi), Run 42.2 km (26.2 mi)",
        participants: "1602",
        finishers: "0",
        remaining: "",
        startDate: "9 October",
        endDate: "12 October",
        image:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f6a1b6e8aade00007c988ad/VR26_2360x10001600789693109.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f807acee118720006376193/ROKA_Reverse_Badge11602255679509.png",
        description:
          "140.6 miles. 3 days. It’s time to go the full distance in Kona from wherever you are. Swim OR run 3.86 km (2.4 mi), ride 180.25 km (112 mi), and run 42.2 km (26.2 mi) in an unlimited number of sessions between Friday, October 9 at 12:00 am GMT and Sunday, October 11 at 11:59 pm GMT to earn your digital badge and credits towards rewards.",
        prizeImage:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f5b6c546db807000bb4c710/Webp.netcompressimage611601644778844.jpg",
        prize:
          "NOW Available on the IRONMAN Store: The Official IRONMAN VR World Championship Celebration Finisher Bundle. Reward yourself for the ultimate 140.6 mile accomplishment.",
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
      {
        id: 4,
        name: "17-Hour IRONMAN VR27 Kona Challenger Division (Swim-Bike-Run)",
        goal: "Swim (2.4 mi), Ride 180.25 km (112 mi), Run 42.2 km (26.2 mi)",
        participants: "835",
        finishers: "0",
        remaining: "",
        startDate: "9 October",
        endDate: "12 October",
        image:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f5b0916d05b4300062e2bc3/VR27_3Day_2360x10001599804539683.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f8030c37608a70006dcaa97/IMVR_28_Badge300x3001602236935550.png",
        description:
          "140.6 miles. 17 hours. Get ready to go the full distance in Kona from wherever you are. Swim 3.86 km (2.4 mi), ride 180.25 km (112 mi) outdoors or on the IRONMAN World Championship course on ROUVY, and run 42.2 km (26.2 mi) outdoors in three sessions between Friday, October 9 at 12:00 am GMT and Sunday, October 11 at 11:59 pm GMT to earn your digital badge and credits towards rewards.",
        prizeImage:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f5b6c546db807000bb4c710/Webp.netcompressimage611601644778844.jpg",
        prize:
          "NOW Available on the IRONMAN Store: The Official IRONMAN VR World Championship Celebration Finisher Bundle. Reward yourself for the ultimate 140.6 mile accomplishment.",
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
      {
        id: 5,
        name: "17-Hour IRONMAN VR27 Kona Challenger Division (Run-Bike-Run)",
        goal: "Swim (2.4 mi), Ride 180.25 km (112 mi), Run 42.2 km (26.2 mi)",
        participants: "800",
        finishers: "1",
        remaining: "",
        startDate: "9 October",
        endDate: "12 October",
        image:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f5ba29d14fee90006ea4b6d/VR27_17Hour_RBR_2360x10001599841747476.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f807acee118720006376193/ROKA_Reverse_Badge11602255679509.png",
        description:
          "140.6 miles. 17 hours. Get ready to go the full distance in Kona from wherever you are. Run 3.86 km (2.4 mi), ride 180.25 km (112 mi) outdoors or on the IRONMAN World Championship course on ROUVY, and run 42.2 km (26.2 mi) outdoors in three sessions between Friday, October 9 at 12:00 am GMT and Sunday, October 11 at 11:59 pm GMT to earn your digital badge and credits towards rewards.",
        prizeImage:
          "https://s3-eu-west-1.amazonaws.com/oly-assets/challenges/5f5b6c546db807000bb4c710/Webp.netcompressimage611601644778844.jpg",
        prize:
          "NOW Available on the IRONMAN Store: The Official IRONMAN VR World Championship Celebration Finisher Bundle. Reward yourself for the ultimate 140.6 mile accomplishment.",
        status: "finished",
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
    ],
  };
  render() {
    return (
      <div>
        <Navbar />

        <Carousel>
          {this.state.events.map((events) => (
            <Carousel.Item interval={1000} key={events.id} events={events}>
              <Link
                to={{
                  pathname: "/eventView",
                  selectedEvent: events,
                }}
                style={{ textDecoration: "none" }}
              >
                <Image
                  className="d-block w-100"
                  src={events.image}
                  alt="Event Image"
                  style={{ filter: "brightness(50%)" }}
                />
              </Link>

              <Carousel.Caption style={{ textAlign: "left", maxWidth: 600 }}>
                <Image
                  src={events.logo}
                  style={{ width: 100 }}
                  className="mb-3"
                />
                <p>
                  {events.description.length > 200
                    ? events.description.substring(0, 200 - 3) +
                      "... Sign up now >>>"
                    : events.description}
                </p>
                <h6>
                  Event Date: {events.startDate} - {events.endDate}
                </h6>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div>
          <Row>
            <Col>
              <div className="ml-5">
                <h1 className="p-5">Events</h1>
                <h6 className="pl-5">Events on Now</h6>
                <div>
                  <Row
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {this.state.events.map((event) => (
                      <EventComponent key={event.id} events={event} />
                    ))}
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div style={{ maxWidth: 400 }}>
                <h6 className="pt-5 pb-2">Registered</h6>
                <div
                  style={{
                    backgroundColor: "#F3F5F6",
                    borderRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#677286",
                  }}
                  className="p-5"
                >
                  <h6 className="my-5">
                    You are not registered to any challenge
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(events);
