import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong> 
        <label style={{ fontSize: "16px", marginLeft: "8px" }}>(in my spare time)</label>
      </h1>
      <GitHubCalendar
        username="maxdu96"
        blockSize={20}
        blockMargin={5}
        color="#ffd700"
        fontSize={15}
      />
    </Row>
  );
}

export default Github;
