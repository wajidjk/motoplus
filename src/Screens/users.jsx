import React, { Component } from "react";
import { Container, Form, Table } from "react-bootstrap";
import Mynavbar2 from "../Components/Mynavbar2";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import UsersTable from "../Components/UsersTable";

class users extends Component {
  handleSearch = (value) => {
    this.setState({ search: value });
  };

  state = {
    search: "",
    userInfo: [
      {
        id: 1,
        firstName: "Wajid",
        lastName: "Javed",
        email: "wajidjaved7@gmail.com",
        dob: "17-6-1997",
        gender: "Male",
        country: "Pakistan",
      },
      {
        id: 2,
        firstName: "ALi",
        lastName: "Javed",
        email: "alijaved2@gmail.com",
        dob: "7-6-1997",
        gender: "Male",
        country: "America",
      },
      {
        id: 3,
        firstName: "Abdul",
        lastName: "Manan",
        email: "ab@gmail.com",
        dob: "7-6-1994",
        gender: "Male",
        country: "Sweden",
      },
      {
        id: 4,
        firstName: "Uzair",
        lastName: "Manan",
        email: "Uzair@gmail.com",
        dob: "7-6-1999",
        gender: "Male",
        country: "England",
      },
      {
        id: 5,
        firstName: "Gulraiz",
        lastName: "Ali",
        email: "gulraiz@gmail.com",
        dob: "7-6-1997",
        gender: "Male",
        country: "Africa",
      },
      {
        id: 6,
        firstName: "Abdul",
        lastName: "Manan",
        email: "ab@gmail.com",
        dob: "7-6-1994",
        gender: "Male",
        country: "Sweden",
      },
      {
        id: 7,
        firstName: "Hadi",
        lastName: "Wajid",
        email: "ab@gmail.com",
        dob: "7-6-1994",
        gender: "Male",
        country: "Sweden",
      },
      {
        id: 8,
        firstName: "Builder",
        lastName: "Manan",
        email: "ab@gmail.com",
        dob: "7-6-1994",
        gender: "Male",
        country: "Sweden",
      },
      {
        id: 9,
        firstName: "Haris",
        lastName: "Ali",
        email: "ab@gmail.com",
        dob: "7-6-1994",
        gender: "Male",
        country: "Sweden",
      },
      {
        id: 10,
        firstName: "Rana",
        lastName: "Mohsin",
        email: "ab@gmail.com",
        dob: "7-6-1994",
        gender: "Male",
        country: "Sweden",
      },
      {
        id: 11,
        firstName: "Rizwan",
        lastName: "Ahmad",
        email: "ab@gmail.com",
        dob: "7-6-1994",
        gender: "Male",
        country: "Sweden",
      },
    ],
  };
  render() {
    return (
      <>
        <div>
          <Mynavbar2 />
        </div>
        <Container style={{ backgroundColor: "red  ", textAlign: "center" }}>
          <h1 className="py-5">USERS</h1>

          <div>
            <Form.Control
              style={{ color: "black" }}
              type="Search"
              placeholder="Search Name"
              onChange={(e) => this.handleSearch(e.target.value)}
            />
          </div>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>D.O.B</th>
                <th>Gender</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userInfo.map((userInfo) =>
                userInfo.firstName
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase()) ? (
                  <tr key={userInfo.id}>
                    <td>{userInfo.id}</td>
                    <td>{userInfo.firstName}</td>
                    <td>{userInfo.lastName}</td>
                    <td>{userInfo.email}</td>
                    <td>{userInfo.dob}</td>
                    <td>{userInfo.gender}</td>
                    <td>{userInfo.country}</td>
                  </tr>
                ) : null
              )}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}
export default withRouter(users);
