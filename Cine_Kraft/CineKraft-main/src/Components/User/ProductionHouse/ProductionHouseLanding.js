import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header';
import Footer from "../Footer";
// import "../styles/LandingPage.css";

const ProductionHouseLandingPage = () => {
  return (
    <div>
      <Header/>
      <div className="hero-section">
        <Container>
          <Row>
            <Col md={6}>
              <h1>Welcome to Our Production House</h1>
              <p>Discover amazing movies and TV shows created by talented filmmakers.</p>
              <Button variant="primary" size="lg">Explore Now</Button>
            </Col>
            <Col md={6} className="d-none d-md-block">
              {/* You can add an image or video here for visual appeal */}
            </Col>
          </Row>
        </Container>
      </div>

      <div className="about-section">
        <Container>
          <Row>
            <Col>
              <h2>About Us</h2>
              <p>Write a brief introduction about your production house here.</p>
              <Button variant="outline-dark">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="featured-section">
        <Container>
          <Row>
            <Col>
              <h2>Featured Productions</h2>
              {/* Display featured productions here */}
            </Col>
          </Row>
        </Container>
      </div>

      <div className="contact-section">
        <Container>
          <Row>
            <Col>
              <h2>Contact Us</h2>
              <p>Get in touch with us for inquiries, collaborations, or any other questions.</p>
              <Button variant="primary">Contact Us</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer/>
    </div>
  );
}

export default ProductionHouseLandingPage;
