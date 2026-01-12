import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DauBMemory from "../../Assets/Projects/DauBMemory.png";
import transMate from "../../Assets/Projects/transMate.png";
import wespeed from "../../Assets/Projects/wespeed.png";
import eden8080 from "../../Assets/Projects/Eden8080.png";
import awwws from "../../Assets/Projects/awwws.png"
import projects from "../../Assets/Projects/projects.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Showcase projects (not the all) <br></br>I am currently working on or have worked on in the past.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DauBMemory}
              isBlog={false}
              title="Dau B Memory - 兜B日記"
              description="This is a shared journal for two. Both partners can write, edit, and relive daily memories together. It helps you remember the little things, feel joy again, and stay connected—day by day."
              ghLink="https://github.com/maxdu96/MyProjects/blob/main/DauBMemory/DauBMemory_README.md"
              demoLink="https://apps.apple.com/hk/app/dau-b-memory/id6476182093"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transMate}
              isBlog={false}
              title="TransitMate 到咗未?"
              description="The primary function of this app is to allow users to open the app and instantly view their routes for going home or to work, eliminating the need for repeated and cumbersome searches. A one-time setup is all it takes."
              ghLink="https://github.com/maxdu96/MyProjects/blob/main/TransitMate/TransitMate_README.md"
              demoLink="https://apps.apple.com/hk/app/%E5%88%B0%E5%92%97%E6%9C%AA/id6749303291"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eden8080}
              isBlog={false}
              title="EDEN8080"
              description="Final Year Project <br/><br/> Dr Peter Chung Yin Lee Memorial Fund SIG Awards 2022/2023 - Best Innovative Work."
              //ghLink="https://www.playfulmedia.hk/2023/artworks-detail/game-eden8080.html"
              //demoLink="https://youtu.be/5Dsd2Sdq3mw"
              officialLink="https://www.playfulmedia.hk/2023/artworks-detail/game-eden8080.html"
              youtubeLink="https://youtu.be/5Dsd2Sdq3mw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={awwws}
              isBlog={false}
              title="Awwws"
              description="A flutter project in a company.<br/><br/> Converted the existing native app Awwws to Flutter, redesigning the user interface. Additionally, assisted in the development of the Awwws biz app."
              ghLink="https://github.com/maxdu96/MyProjects/blob/main/Awwws/Awwws_README.md"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wespeed}
              isBlog={false}
              title="WESPEED"
              description="A Objective-C and Swift iOS app that provides real-time traffic updates, route planning, and navigation assistance to help users reach their destinations quickly and safely."
              demoLink="https://apps.apple.com/hk/app/wespeed-%E9%A6%99%E6%B8%AF%E6%99%BA%E6%85%A7%E4%BA%A4%E9%80%9A%E5%87%BA%E8%A1%8C/id1151418159"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projects}
              isBlog={false}
              title="Others Projects"
              description="show others case studies and projects in my GitHub."
              ghLink="https://github.com/maxdu96/MyProjects"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
