import React from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { FaInstagram,FaYoutube,FaLinkedin} from "react-icons/fa";
import "./Homepage.css";
import serratta from "../../assets/Serrattaa.png";

function Footer() {
  return (
    <div>
       <div>
     <div className="Fin">
        <Row>
          <Col className="Foot1" md={4}>
            <h1 className="Foot2">
              <b>Company</b>
            </h1>
            <h2 className="Foot3">About Us &nbsp;</h2>
            <h2 className="Foot3">Careers &nbsp;</h2>
            <h2 className="Foot3">Awards &nbsp;</h2>
            <h2 className="Foot3">Investor Relations &nbsp;</h2>
          </Col>

          <Col className="Foot1" md={4}>
            <h1 className="Foot2">
              <b>Terms</b>
            </h1>
            <h2 className="Foot3">Terms of Service</h2>
            <h2 className="Foot3">Security Policy</h2>
            <h2 className="Foot3">Privacy Policy</h2>
            <h2 className="Foot3">Customize Cookies</h2>
          </Col>
          <Col className="Foot1" md={4}>
            <h1 className="Foot2">
              <b>Contact Us</b>
            </h1>
            <h2 className="Foot3">cinekarft@gmail.com &nbsp;</h2>
            <h2 className="Foot3">9606518855 &nbsp;</h2>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search for products"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                className="search_foot_clr"
                variant="outline-secondary"
                id="button-addon2"
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <Row gutter={16} style={{ display: "flex", justifyContent: "center" }}>
          <Col className="icon mt-3">
            <Row>
              <h6>Follow us on Social Media</h6>
              <Col>
                <a href="https://www.facebook.com/profile.php?id=61553361969333" className="fb_icon" target="_blank" rel="noopener noreferrer">
                  <FiFacebook size={30} />
                </a>

                <a
                  href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcRwRdsCcmrgjQHtqHmFrttrjpfJGsBzrzrrNhFNZWhHsftWBxKlrTJSpfsfdrlTsGFdRNhQW"
                  className="mail_icon" target="_blank" rel="noopener noreferrer"
                >
                  <GrMail size={30} />
                </a>
                <a
                  href="http://www.youtube.com/@cinekraftmedia"
                  className="mail_icon" target="_blank" rel="noopener noreferrer"
                >
                  <FaYoutube size={30} />
                </a>
                <a href="https://www.instagram.com/cine_kraft/" className="insta_icon" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/feed/"
                  className="fb_icon" target="_blank" rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div style={{ textAlign: "center" }}> 
        
        <footer className="footer">
          <p>
            <b>&copy; 2024 CineKraft. Powered by <img src={serratta} style={{width:"10%"}} alt='none'/></b>
          </p>
        </footer>
      </div>
     </div>
    </div>
  )
}

export default Footer
