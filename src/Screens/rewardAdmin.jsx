import React, { Component } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Mynavbar2 from "../Components/Mynavbar2";
import RewardsRow from "../Components/RewardsRow";
class rewardAdmin extends Component {
  handleSearch = (value) => {
    this.setState({ search: value });
  };

  state = {
    search: "",
    rewards: [
      {
        id: 1,
        store: "IRONMAN STORE",
        retailprice: "$24.95",
        points: 20,
        description: "$10 OFF IRONMAN CELEBRATION BUNDLE",
        benefits:
          "dadfsfaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        id: 2,
        store: "SANTINI",
        retailprice: "$124.95",
        points: 40,
        description: "$20 off SANTINI IRONMAN VR Cycle Jersey",
        benefits:
          "dadfsfaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        id: 3,
        store: "KASK",
        retailprice: "$329.95",
        points: 260,
        description: "$130 off KASK helmet",
        benefits:
          "dadfsfaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        id: 4,
        store: "IRONMAN STORE",
        retailprice: "$247.95",
        points: 20,
        description: "$10 OFF IRONMAN CELEBRATION BUNDLE",
        benefits:
          "dadfsfaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        id: 5,
        store: "SANTINI",
        retailprice: "$15.95",
        points: 40,
        description: "$20 off SANTINI IRONMAN VR Cycle Jersey",
        benefits:
          "dadfsfaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        id: 6,
        store: "KASK",
        retailprice: "$32.95",
        points: 260,
        description: "$130 off KASK helmet",
        benefits:
          "dadfsfaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        id: 7,
        store: "IRONMAN STORE",
        retailprice: "$24.95",
        points: 20,
        description: "$10 OFF IRONMAN CELEBRATION BUNDLE",
        benefits:
          "dadfsfaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        id: 8,
        store: "SANTINI",
        retailprice: "$24.95",
        points: 40,
        description: "$20 off SANTINI IRONMAN VR Cycle Jersey",
        benefits: "dadfsfaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        id: 9,
        store: "KASK",
        retailprice: "$39.95",
        points: 60,
        description: "$130 off KASK helmet",
        benefits:
          "dadfsfaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
    ],
  };
  render() {
    return (
      <>
        <div>
          <Mynavbar2 />
        </div>
        <div style={{ backgroundColor: "red  ", textAlign: "center" }}>
          <h1 className="py-5">REWARDS</h1>
          <Button>Add Rewards</Button>

          <div>
            <Form.Control
              style={{ color: "black" }}
              type="Search"
              placeholder="Search Name"
              onChange={(e) => this.handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Store</th>
                <th>Retail Price</th>
                <th>Points</th>
                <th>description</th>
                <th>Benefits</th>
              </tr>
            </thead>
            <tbody>
              {this.state.rewards.map((rewards) =>
                rewards.store
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase()) ? (
                  <tr key={rewards.id}>
                    <td>{rewards.id}</td>
                    <td>{rewards.store}</td>
                    <td>{rewards.retailprice}</td>
                    <td>{rewards.points}</td>
                    <td>{rewards.description}</td>
                    <td>{rewards.benefits}</td>
                  </tr>
                ) : null
              )}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
export default withRouter(rewardAdmin);
