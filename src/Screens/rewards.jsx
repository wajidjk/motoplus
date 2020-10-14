import React, { Component } from "react";
import Navbar from "../Components/NavbarComponent";
import {
  Container,
  Breadcrumb,
  Tabs,
  Tab,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import RewardComponent from "../Components/RewardComponent";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class rewards extends Component {
  state = {
    rewards: [
      {
        id: 1,
        name: "IRONMAN STORE",
        price: "50",
        description: "$10 OFF IRONMAN CELEBRATION BUNDLE",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5f50c1644da9a694cbe312e1/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5ebacace4da9a694cb73cebd/imgLogo.png",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 2,
        name: "SANTINI",
        price: "40",
        description: "$20 off SANTINI IRONMAN VR Cycle Jersey",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5e7fb9234da9a694cb98a79a/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5e7fb9234da9a694cb98a79a/imgLogo.png",
        benefits:
          "Save $10 with coupon code after you redeem 20 credits ($69.90 - $10 = $59.90 athlete price). This coupon may be used for either the Men’s Celebration Bundle or the Women’s Celebration Bundle. The Celebration Bundle includes a Training Tee, Kona World Championship Medal and Kona World Championship Trucker.This coupon is not valid for the Premium Celebration Bundle ($200 MSRP).",
        retail: "$69.90",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 3,
        name: "IRONMAN STORE",
        price: "20",
        description: "50% off VR tech tees",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff60124da9a694cb2d77f6/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5ebacace4da9a694cb73cebd/imgLogo.png",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 4,
        name: "IRONMAN STORE",
        price: "120",
        description: "$10 off VR Headwear (MSRP $29.95)",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5ebac7714da9a694cb5b61e1/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5ebacace4da9a694cb73cebd/imgLogo.png",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 5,
        name: "VENTUM",
        price: "4000",
        description: "$2000 OFF VENTUM ONE IRONMAN KONA VR EDITION",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5f50c2e04da9a694cbefd53f/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5e9c57a14da9a694cb284edc/imgLogo.png",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 6,
        name: "COMPRESSPORT",
        price: "4000",
        description: "30% off VR KONA Series Tee - Preparation",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5f28431c4da9a694cb600e75/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5e7fb6594da9a694cb902b73/imgLogo.png",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 7,
        name: "IRONMAN STORE",
        price: "50",
        description: "$10 OFF IRONMAN CELEBRATION BUNDLE",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5f50c1644da9a694cbe312e1/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5ebacace4da9a694cb73cebd/imgLogo.png",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 8,
        name: "SANTINI",
        price: "40",
        description: "$20 off SANTINI IRONMAN VR Cycle Jersey",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5e7fb9234da9a694cb98a79a/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5e7fb9234da9a694cb98a79a/imgLogo.png",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 9,
        name: "IRONMAN STORE",
        price: "20",
        description: "50% off VR tech tees",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff60124da9a694cb2d77f6/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5ebacace4da9a694cb73cebd/imgLogo.png",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 10,
        name: "IRONMAN STORE",
        price: "120",
        description: "$10 off VR Headwear (MSRP $29.95)",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5ebac7714da9a694cb5b61e1/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5ebacace4da9a694cb73cebd/imgLogo.png",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 11,
        name: "VENTUM",
        price: "4000",
        description: "$2000 OFF VENTUM ONE IRONMAN KONA VR EDITION",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5f50c2e04da9a694cbefd53f/img_single.jpg",
        logo:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5e9c57a14da9a694cb284edc/imgLogo.png",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
      {
        id: 12,
        name: "COMPRESSPORT",
        price: "4000",
        description: "30% off VR KONA Series Tee - Preparation",
        image:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5f28431c4da9a694cb600e75/img_single.jpg",
        benefits:
          "Stay cool and comfortable with the Men’s Dri-Tech Polo made with moisture- wicking technology. This reward can only be redeemed on ironmanstore.com",
        retail: "$54.95",
        background:
          "https://s3-eu-west-1.amazonaws.com/running-heroes/img/rewards/5eff6ebc4da9a694cba41186/img_single.jpg",
      },
    ],
  };
  render() {
    return (
      <>
        <Navbar />
        <div style={{ backgroundColor: "#f5f5f5", padding: 30 }}>
          <Container>
            <div className="mt-2 d-flex">
              <div>
                <h1>Rewards</h1>
              </div>
              <div
                class="ml-auto d-flex"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                TOTAL
                <div
                  style={{
                    backgroundColor: "#ffc72f",
                    height: 40,
                    width: 50,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="ml-2"
                >
                  0 <FaMoneyBillAlt className="ml-1" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
                <Tab eventKey="1" title="ALL OFFERS" style={{ padding: 20 }}>
                  <Row
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    {this.state.rewards.map((reward) => (
                      <RewardComponent key={reward.id} rewards={reward} />
                    ))}
                  </Row>
                </Tab>
                <Tab eventKey="2" title="MY CODES" style={{ padding: 20 }}>
                  <div
                    style={{
                      height: 500,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src="https://s3-eu-west-1.amazonaws.com/oly-one-product/oly/static/img/reward/empty.svg" />
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontWeight: "bold" }}>No rewards yet.</p>
                      <p> Take your first reward now.</p>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default withRouter(rewards);
