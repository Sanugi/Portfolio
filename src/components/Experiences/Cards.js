import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";



function Cards(props) {
  return (
    <Card className="card-view"   style={{
        backgroundColor: "transparent",
        border: "1px #A020F0", // White outline for the card
        color: "white", // White text color
        boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)", // 3D shadow effect
        transform: "perspective(1000px) rotateX(2deg) rotateY(2deg)", // 3D rotation
        transition: "transform 0.3s", // Smooth transition
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateX(5deg) rotateY(5deg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateX(2deg) rotateY(2deg)";
      }}
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {"\n"}
        {"\n"}



        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Cards;
