import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaAppStore, FaYoutube } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "flex-start" }} dangerouslySetInnerHTML={{ __html: props.description }}>
        </Card.Text>
    <div className="d-flex flex-wrap gap-2 mt-2 justify-content-center">
            {props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}
            {/* Official Website Button */}
            {props.officialLink && (
              <Button
                variant="primary"
                href={props.officialLink}
                target="_blank"
              >
                <CgWebsite /> &nbsp;
                {"Official Website"}
              </Button>
            )}
            {/* App Store / Demo Link Button */}
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
              >
                <FaAppStore /> &nbsp;
                {"App Store"}
              </Button>
            )}
            {/* YouTube Trailer Button */}
            {props.youtubeLink && (
              <Button
                variant="primary"
                href={props.youtubeLink}
                target="_blank"
              >
                <FaYoutube /> &nbsp;
                {"Trailer"}
              </Button>
            )}
          </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
