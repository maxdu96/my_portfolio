import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi everyone! I’m <span className="purple">Max DU</span>{" "}
            from <span className="purple">Hong Kong</span>.
            <br />
            I’m currently working as a {""}
            <span className="purple">Technical Officer</span> at{" "}
            <span className="purple">HKT Services Limited</span>.
            <br />I hold a Bachelor of {" "}
            <span className="purple">Science</span>
            <br />in{" "}
            <span className="purple">Creative Media (BScCM)</span> from{" "}
            <span className="purple">City University of Hong Kong</span>.
            <br />
            <br />
            Outside of coding, I enjoy activities that fuel my creativity, spark inspiration, and support a healthy lifestyle: 
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Workout 🏋️🏊‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Foodie 🍣😋
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To become stronger, just keep moving forward."{" "}
          </p>
          <footer className="blockquote-footer">Max DU</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
