import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my_icon.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Mobile App Developer passionate about turning ideas into sleek, 
              user-friendly iOS applications. Over time, I’ve launched several apps 
              on the App Store and honed my skills in crafting high-performance mobile 
              experiences that delight users and scale seamlessly.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Swift, Objective-C, Andoird Java, Flutter Dart, Node.js, Python, PHP and VB programming{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  iOS applications, or other applications.{" "}
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I try to building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
