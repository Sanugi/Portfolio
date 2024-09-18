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
              title="University of Moratuwa (2022-2026)" 
              description="I am an undergraduate student at University of Moratuwa.Currently I am reading for the B.Sc(Hons) in information technology and management degree."
            />
          </Col>

          
          <Col md={4} className="experience-card">
  <EducationCard
    imgPath={vbv}
    isBlog={false}
    title="Viharamahadevi Balika Vidyalaya"
    description={
      <>
        I completed my class 12 high school education at Viharamahadevi Balika Vidyalaya Kiribathgoda, where I studied A/L in Arts stream.
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <strong>Result:</strong> 3A's
        </div>
      </>
    }
  />
</Col>



          
          <Col md={4} className="experience-card">
            <EducationCard
              imgPath={sab}
              isBlog={false}
              title="St.Anne's girl's School"
              description={
                <>
                  I completed my class 11 school education at St.Anne's Girls School wattala, where I studied O/L.
                  <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <strong>Result:</strong> 8A's B
                  </div>
                </>
              }
            />
          </Col>
         
          </Row>
      </Container>
    </Container>
  );
}

export default Education;
