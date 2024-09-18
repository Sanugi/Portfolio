import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ims from "../../Assets/Projects/ims.jpeg";
import LocalTrain from "../../Assets/Projects/LocalTrain.jpg"; 
import weatherreport from "../../Assets/Projects/weatherreport.png";
import portfolio from "../../Assets/Projects/portfolio.png"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ims}
              isBlog={false}
              title="Intern Management System"
              description="A comprehensive interns management system was built and
implemented using web application technologies. This
system efficiently oversees all aspects of the internship
program, facilitating communication, monitoring intern
durations, and streamlining administrative tasks. The solution
enhances organizational effectiveness and the intern
experience.
"
              ghLink="https://github.com/Tharusha-%20%202000/InternManagementSystemFrontend-using-MERN-stack"
             demoLink="http://imsfrontend.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LocalTrain}
              isBlog={false}
              title="Local Train Ticketing System"
              description="A comprehensive Local Train Ticketing system was built and implemented using mobile application technologies. This digital platform designed to streamline the process of purchasing and managing train tickets via smartphones.  The app aims to simplify the experience for commuters, providing a user-friendly interface for booking, canceling, and checking the status of train tickets"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="portfoilio"
              description="The personal portfolio was built and implemented using react js,
styled components to demonstrate my skills, projects and
education. The portfolio highlights the clean, responsive design,
enhance for performance and accessibility. The portfolio includes
sections for education, projects, experiences and resume, with
smooth navigation and user-friendly interface.
"
              ghLink="https://github.com/Sanugi/Portfolio"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherreport}
              isBlog={false}
              title="Portable  Weather Reporting System - Hardware project"
              description="The project was built upon the main cutting-edge technologies namely Ardunio UNO, IR Sensors, temperature Sensors, barometric pressure Sensors, humidity Sensors, wind speed Sensors, wind direction Sensors. The hardware setup is exactly crafted with components namely, LCD, Display, 12C Module, 12V Battery, buzzer and more. 

Technologies: C++ 
"
              ghLink="https://github.com/Sanugi/Portable-Weather-Station"
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
