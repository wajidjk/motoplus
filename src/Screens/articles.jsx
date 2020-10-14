import React, { Component } from "react";
import NavbarComponent from "../Components/NavbarComponent";
import { Container, Form, Row } from "react-bootstrap";
import ArticleComponent from "../Components/ArticleComponent";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class articles extends Component {
  state = {
    articles: [
      {
        id: 1,
        name: "Video: What’s New for Endurance Week!?",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/Video-What’s-New-for-Endurance-Week-400x250.png",
        date: "20/09/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "IRONMAN U Master Coach Lance Watson introduces athletes to Endurance Week as week four of the IRONMAN VR Kona Series. Learn about this week’s new endurance challenges, IRONMAN VR25 Kona Endurance Block and training tips to help get you through this week!",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/Video-What’s-New-for-Endurance-Week.png",
      },
      {
        id: 2,
        name: "Collected Wisdom for IRONMAN Racing",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/Collected-wisdom-for-IRONMAN-racing-400x250.png",
        date: "19/09/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "Advice from some of the best age-groupers in the sport to take to your first virtual 140.6-mile race.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/Collected-wisdom-for-IRONMAN-racing.png",
      },
      {
        id: 3,
        name: "Video: IRONMAN VR24 Master Coach Challenge",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/Video-IRONMAN-VR24-Master-Coach-Challenge-Preview-400x250.png",
        date: "18/09/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "While our age-groupers are racing this weekend, The IRONMAN VR Master Coach Challenge will also take place on Saturday, September 19.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/Video-IRONMAN-VR24-Master-Coach-Challenge-Preview.png",
      },
      {
        id: 4,
        name: "Find Your Perfect IRONMAN Heart Rate",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/Find-Your-Perfect-IRONMAN-Heart-Rate-400x250.png",
        date: "14/09/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "With pace, power, and perfectionism, sometimes the heart knows best.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/Find-Your-Perfect-IRONMAN-Heart-Rate.png",
      },
      {
        id: 5,
        name: "Introducing the IRONMAN VR24 Kona Knowledge Block",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/KnowledgeArticleHeader-400x250.jpg",
        date: "13/09/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "Knowledge is power this week as we time-trial our way to better pacing and performance.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/KnowledgeArticleHeader.jpg",
      },
      {
        id: 6,
        name: "Introducing the IRONMAN VR23 Kona Strength Block",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/StrengthArticleHeader-400x250.jpg",
        date: "10/09/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "The name of the game is strength this week as we put the power into our performance.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/09/StrengthArticleHeader.jpg",
      },
      {
        id: 7,
        name: "How to Keep a Bulletproof Mindset",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/08/How-to-Keep-a-Bulletproof-Mindset-400x250.png",
        date: "16/08/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "During one of the most challenging years in sport yet, a coach takes lessons from one of her most resilient athletes.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/08/How-to-Keep-a-Bulletproof-Mindset.png",
      },
      {
        id: 8,
        name: "A Day in the Life of an IRONMAN in Training: Day 1",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/08/IRONMAN-Training-Companion-400x250.png",
        date: "07/08/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "Enjoy a sample training day from the IRONMAN Training Companion exclusive to IRONMAN Virtual Club members.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/08/IRONMAN-Training-Companion.png",
      },
      {
        id: 9,
        name:
          "Video: Lance Watson on Key Workouts in an IRONMAN Bike Progression",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/08/Video-Lance-Watson-on-Key-Workouts-in-an-IRONMAN-Bike-Progression-400x250.png",
        date: "03/08/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "IRONMAN U Master Coach Lance Watson talks about building your bike training plan and what you must do to reach success.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/08/Video-Lance-Watson-on-Key-Workouts-in-an-IRONMAN-Bike-Progression.png",
      },
      {
        id: 10,
        name: "Video: Mark Allen’s First Swim Advice",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/07/Video-Mark-Allen’s-First-Swim-Advice-400x250.png",
        date: "29/07/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "IRONMAN U Master Coach Mark Allen discusses what you need to know before your first swim leg.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/07/Video-Mark-Allen’s-First-Swim-Advice.png",
      },
      {
        id: 11,
        name: "Training Video: Matt Dixon Run Low Stress Form",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/07/Training-Video-Matt-Dixon-Run-Low-Stress-Form-400x250.png",
        date: "27/07/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "IRONMAN U Master Coach Matt Dixon talks through the importance of adding recovery runs to your training and what your next one should look like.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/07/Training-Video-Matt-Dixon-Run-Low-Stress-Form.png",
      },
      {
        id: 12,
        name: "Training Video: Matt Dixon’s Swim Builder",
        image:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/07/Video-Matt-Dixon-Swim-Builder-400x250.png",
        date: "22/07/2020",
        video: "https://www.youtube.com/embed/yFQppU8_nqs",
        description:
          "IRONMAN U Master Coach Matt Dixon provides training tips for self-coaching yourself through a swim workout as we return to the pool.",
        background:
          "https://content.runningheroes.com/blog/wp-content/uploads/2020/07/Video-Matt-Dixon-Swim-Builder.png",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <Container
          fluid
          style={{
            backgroundColor: "#C1C6C8",
            height: 200,
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <h1>Coaching</h1>
          <h6>12 articles</h6>
        </Container>
        <div style={{ backgroundColor: "#F5F5F5" }}>
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            {this.state.articles.map((article) => (
              <ArticleComponent key={article.id} articles={article} />
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(articles);
