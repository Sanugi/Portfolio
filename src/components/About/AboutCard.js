import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanugi Divigalpitiya </span>
            from <span className="purple"> Sri Lanka</span>
            <br />
            I am currently an undergraduate student at University of Moratuwa.
            <br />
            I am reading for B.Sc.(Hons) Information Technology and Management Degree.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sanugi Divigalpitiya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
