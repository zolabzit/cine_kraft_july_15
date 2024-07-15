import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Header from "./Header";
import {
  MdWifiCalling3,
  MdLocationPin,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";


import Footer from "./Footer";

import { motion} from "framer-motion";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to a server
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div>
         {/* Header */}
         <Header/>

    {/* <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}> */}
      <motion.div initial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerHeight, transition: {duration: 0.1}}}>
   
      <div className="about">
        <Container>
          <h1 style={{ paddingTop: "10%" }}>Contact US</h1>
        
        </Container>
      </div>
      <div style={{ textAlign: "center", paddingTop: "10%" }}>
        <Row>
          <Col md={4}>
            <h1 style={{ color: "#4e4e85" }}>
              <MdWifiCalling3 size={50} />
            </h1>
            <h4>Call us</h4>
            <p>
              <b>
                144-123-1234
                <br />
                123-098-0009
                <br />
                9606518855
              </b>
            </p>
          </Col>

          <Col md={4} className="location-column">
            <h1 style={{ color: "#4e4e85" }}>
              <MdLocationPin size={50} />
            </h1>
            <h4>Location</h4>
            <p>
              <b>
                Bengaluru
                <br />
                Karanataka - 560 001
              </b>
            </p>
          </Col>

          <Col md={4} className="e-column">
            <h1 style={{ color: "#4e4e85" }}>
              <MdOutlineAccessTimeFilled size={50} />
            </h1>
            <h4>E-Address</h4>
            <p>
              <b>
                cinekarft@gmail.com
                <br />
                {/* trimatis@outlook.in */}
              </b>
            </p>
          </Col>
        </Row>
      </div>
      <div style={{ paddingTop: "8%" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h5 style={{ color: "#4e4e85" }}>For enquiry</h5>
            <h1>
              <b>Send us a message</b>
            </h1>
          </Col>
        </Row>
        <div className="enquiry-form-container">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <div className="form-field">
                  <input
                    className="wh_form"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="form-field">
                  <input
                    className="wh_form"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="form-field">
                  <input
                    className="wh_form"
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </Col>
            </Row>

            <div className="form-field">
              <textarea
                className="msg_wh"
                id="message"
                placeholder="Write your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <Button type="submit" className="submit-button">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
     
      
    </motion.div>
     {/* Footer */}
    <Footer/>
    </div>
  );
}

export default Contact;
