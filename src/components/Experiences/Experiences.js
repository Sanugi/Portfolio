import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./Cards";
import Particle from "../Particle";
import vitalhub from "../../Assets/Projects/vitalhub.png";
import company from "../../Assets/Projects/company.jpg";
import comBank from "../../Assets/Projects/comBank.jpg";


function Experiences() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Experiences </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few experiences.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={vitalhub}
              isBlog={false}
              description="I had the opportunity to gain substantial experience working with VitalHub Innovation Lab on the Industry Reconnaissance and Engagement module. Over the course of six months, I collaborated closely with a dynamic team, which allowed me to immerse myself in Agile methodology and its practical applications. Throughout the project, I honed my skills in software development, project management, and team collaboration. I also gained exposure to various tools and techniques used in the industry, which enhanced my technical and problem-solving abilities. This experience was instrumental in solidifying my understanding of industry best practices and preparing me for future challenges in the tech field."



            />
          </Col>

          
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={company}
              isBlog={false}
              description="I had the privilege of working with 99x company for one year on my software project. During this time, I collaborated with a talented and diverse team, which significantly enriched my experience. Working closely with team members from various disciplines, I learned the importance of effective communication, collaboration, and problem-solving in a team environment. We tackled complex challenges together, shared knowledge, and supported each other to achieve our project goals. This experience not only enhanced my technical skills but also strengthened my ability to work efficiently within a team, making me more adaptable and cooperative in dynamic work settings."
            />
          </Col>

          
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={comBank}
              isBlog={false}
              description="I completed a 6-month internship at a commercial bank, where I gained valuable experience in the financial sector. During my time there, I was exposed to various banking operations, learned about financial products, and developed a strong understanding of customer service and operational procedures. This hands-on experience provided me with practical insights into the industry and helped me build a solid foundation in banking and finance."
            />
          </Col>

         
          </Row>
      </Container>
    </Container>
  );
}

export default Experiences;
