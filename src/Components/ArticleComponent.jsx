import React, { Component } from "react";
import { Card, Image, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class ArticleComponent extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: "/articleView",
          selectedArticle: this.props.articles,
        }}
        style={{ textDecoration: "none" }}
      >
        <Card
          style={{
            width: "22rem",
            textAlign: "left",
            borderRadius: 10,
            marginTop: 20,
            cursor: "pointer",
          }}
          className="mx-3"
        >
          <Card.Img
            variant="top"
            src={this.props.articles.image}
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          />
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Title style={{ color: "black" }}>
                  {this.props.articles.name}
                </Card.Title>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  color: "grey",
                  fontSize: 12,
                }}
              >
                {this.props.articles.date}
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </Link>
    );
  }
}

export default withRouter(ArticleComponent);
