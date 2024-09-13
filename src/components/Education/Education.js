import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./Ecard";
import Particle from "../Particle";
import uom from "../../Assets/Projects/uom.png";
import vbv from "../../Assets/Projects/vbv.jpeg";
import sab from "../../Assets/Projects/sab.jpg";


function Education() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Education </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my Education Qualifications.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <EducationCard
              imgPath={uom}
              isBlog={false}
              title="University of Moratuwa" 
              description="I am an undergraduate student at University of Moratuwa.Currently I am reading for the B.Sc(Hons) in information technology and management degree."
            />
          </Col>

          
          <Col md={4} className="experience-card">
            <EducationCard
              imgPath={vbv}
              isBlog={false}
              description="I had the privilege of working with 99x company for one year on my software project. During this time, I collaborated with a talented and diverse team, which significantly enriched my experience. Working closely with team members from various disciplines, I learned the importance of effective communication, collaboration, and problem-solving in a team environment. We tackled complex challenges together, shared knowledge, and supported each other to achieve our project goals. This experience not only enhanced my technical skills but also strengthened my ability to work efficiently within a team, making me more adaptable and cooperative in dynamic work settings."
            />
          </Col>

          
          <Col md={4} className="experience-card">
            <EducationCard
              imgPath={sab}
              isBlog={false}
              
              description="I completed a 6-month internship at a commercial bank, where I gained valuable experience in the financial sector. During my time there, I was exposed to various banking operations, learned about financial products, and developed a strong understanding of customer service and operational procedures. This hands-on experience provided me with practical insights into the industry and helped me build a solid foundation in banking and finance."
            />
          </Col>

         
          </Row>
      </Container>
    </Container>
  );
}

export default Education;
