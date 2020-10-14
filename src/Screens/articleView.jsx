import React, { Component } from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import NavbarComponent from "../Components/NavbarComponent";
import { Row, Container, Image, Button, Modal } from "react-bootstrap";
import { FaMoneyBillAlt, FaChevronLeft, FaTimes } from "react-icons/fa";
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

class articleView extends Component {
  state = {
    show: false,
    selectedArticle: {
      id: "",
      name: "",
      date: "",
      image: "",
      video: "",
      description: "",
      background: "",
    },
  };

  componentDidMount() {
    this.setState({ selectedArticle: this.props.location.selectedArticle });
  }

  render() {
    return (
      <div>
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
            <h4>{this.state.selectedArticle.name}</h4>
            <p>Share the article on:</p>
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
        <div style={{ backgroundColor: "#F5F5F5" }}>
          <Container
            style={{
              cursor: "pointer",
            }}
            className="pt-3"
            onClick={() => {
              this.props.history.push("/articles");
            }}
          >
            <FaChevronLeft /> RETURN
          </Container>
          <div style={{ textAlign: "center" }} className="mt-5 px-5">
            <div>
              <h1 className="mx-5">{this.state.selectedArticle.name}</h1>
              <h6 className="mx-5">{this.state.selectedArticle.description}</h6>
              <p>22 July 2020</p>
              <Button
                style={{
                  borderRadius: 50,
                  backgroundColor: "#D7DEE1",
                  color: "#747F90",
                  borderWidth: 0,
                }}
                className="px-5 mb-5"
                onClick={() => {
                  this.setState({ show: true });
                }}
              >
                <h6>SHARE</h6>
              </Button>
            </div>
            <Image
              className="mb-3"
              src={this.state.selectedArticle.background}
            />
            {this.state.selectedArticle.video ? (
              <iframe
                width="780"
                height="469"
                src={this.state.selectedArticle.video}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            ) : null}

            <Container className="px-5 mt-5">
              <p className="px-5 mx-5" style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
                vel fringilla est ullamcorper eget nulla facilisi etiam.
                Vestibulum lorem sed risus ultricies tristique nulla aliquet
                enim tortor. Etiam tempor orci eu lobortis elementum nibh.
                Lobortis mattis aliquam faucibus purus. Tincidunt tortor aliquam
                nulla facilisi. Sit amet commodo nulla facilisi nullam vehicula
                ipsum. Ultrices sagittis orci a scelerisque purus semper eget
                duis at. Mauris pharetra et ultrices neque. Pharetra massa massa
                ultricies mi quis hendrerit dolor magna. Sed odio morbi quis
                commodo odio aenean sed. Tellus mauris a diam maecenas. Massa id
                neque aliquam vestibulum morbi blandit cursus risus at.
                Vestibulum sed arcu non odio euismod. Adipiscing commodo elit at
                imperdiet. Morbi tincidunt ornare massa eget. Enim blandit
                volutpat maecenas volutpat blandit aliquam etiam erat velit.
                Lectus arcu bibendum at varius. Integer enim neque volutpat ac
                tincidunt vitae. Nunc mi ipsum faucibus vitae aliquet nec. Augue
                mauris augue neque gravida. At lectus urna duis convallis
                convallis tellus. Pellentesque id nibh tortor id aliquet lectus
                proin nibh nisl. Suspendisse faucibus interdum posuere lorem.
                Justo laoreet sit amet cursus sit. Vitae nunc sed velit
                dignissim sodales ut eu. Eros in cursus turpis massa tincidunt.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
                vel fringilla est ullamcorper eget nulla facilisi etiam.
                Vestibulum lorem sed risus ultricies tristique nulla aliquet
                enim tortor. Etiam tempor orci eu lobortis elementum nibh.
                Lobortis mattis aliquam faucibus purus. Tincidunt tortor aliquam
                nulla facilisi. Sit amet commodo nulla facilisi nullam vehicula
                ipsum. Ultrices sagittis orci a scelerisque purus semper eget
                duis at. Mauris pharetra et ultrices neque. Pharetra massa massa
                ultricies mi quis hendrerit dolor magna. Sed odio morbi quis
                commodo odio aenean sed. Tellus mauris a diam maecenas. Massa id
                neque aliquam vestibulum morbi blandit cursus risus at.
                Vestibulum sed arcu non odio euismod. Adipiscing commodo elit at
                imperdiet. Morbi tincidunt ornare massa eget. Enim blandit
                volutpat maecenas volutpat blandit aliquam etiam erat velit.
                Lectus arcu bibendum at varius. Integer enim neque volutpat ac
                tincidunt vitae. Nunc mi ipsum faucibus vitae aliquet nec. Augue
                mauris augue neque gravida. At lectus urna duis convallis
                convallis tellus. Pellentesque id nibh tortor id aliquet lectus
                proin nibh nisl. Suspendisse faucibus interdum posuere lorem.
                Justo laoreet sit amet cursus sit. Vitae nunc sed velit
                dignissim sodales ut eu. Eros in cursus turpis massa tincidunt.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
                vel fringilla est ullamcorper eget nulla facilisi etiam.
                Vestibulum lorem sed risus ultricies tristique nulla aliquet
                enim tortor. Etiam tempor orci eu lobortis elementum nibh.
                Lobortis mattis aliquam faucibus purus. Tincidunt tortor aliquam
                nulla facilisi. Sit amet commodo nulla facilisi nullam vehicula
                ipsum. Ultrices sagittis orci a scelerisque purus semper eget
                duis at. Mauris pharetra et ultrices neque. Pharetra massa massa
                ultricies mi quis hendrerit dolor magna. Sed odio morbi quis
                commodo odio aenean sed. Tellus mauris a diam maecenas. Massa id
                neque aliquam vestibulum morbi blandit cursus risus at.
                Vestibulum sed arcu non odio euismod. Adipiscing commodo elit at
                imperdiet. Morbi tincidunt ornare massa eget. Enim blandit
                volutpat maecenas volutpat blandit aliquam etiam erat velit.
                Lectus arcu bibendum at varius. Integer enim neque volutpat ac
                tincidunt vitae. Nunc mi ipsum faucibus vitae aliquet nec. Augue
                mauris augue neque gravida. At lectus urna duis convallis
                convallis tellus. Pellentesque id nibh tortor id aliquet lectus
                proin nibh nisl. Suspendisse faucibus interdum posuere lorem.
                Justo laoreet sit amet cursus sit. Vitae nunc sed velit
                dignissim sodales ut eu. Eros in cursus turpis massa tincidunt.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
                vel fringilla est ullamcorper eget nulla facilisi etiam.
                Vestibulum lorem sed risus ultricies tristique nulla aliquet
                enim tortor. Etiam tempor orci eu lobortis elementum nibh.
                Lobortis mattis aliquam faucibus purus. Tincidunt tortor aliquam
                nulla facilisi. Sit amet commodo nulla facilisi nullam vehicula
                ipsum. Ultrices sagittis orci a scelerisque purus semper eget
                duis at. Mauris pharetra et ultrices neque. Pharetra massa massa
                ultricies mi quis hendrerit dolor magna. Sed odio morbi quis
                commodo odio aenean sed. Tellus mauris a diam maecenas. Massa id
                neque aliquam vestibulum morbi blandit cursus risus at.
                Vestibulum sed arcu non odio euismod. Adipiscing commodo elit at
                imperdiet. Morbi tincidunt ornare massa eget. Enim blandit
                volutpat maecenas volutpat blandit aliquam etiam erat velit.
                Lectus arcu bibendum at varius. Integer enim neque volutpat ac
                tincidunt vitae. Nunc mi ipsum faucibus vitae aliquet nec. Augue
                mauris augue neque gravida. At lectus urna duis convallis
                convallis tellus. Pellentesque id nibh tortor id aliquet lectus
                proin nibh nisl. Suspendisse faucibus interdum posuere lorem.
                Justo laoreet sit amet cursus sit. Vitae nunc sed velit
                dignissim sodales ut eu. Eros in cursus turpis massa tincidunt.
              </p>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(articleView);
