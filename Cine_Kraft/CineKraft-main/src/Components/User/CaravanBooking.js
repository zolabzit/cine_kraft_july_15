import React from "react";
import { Row, Col, Container, Button} from "react-bootstrap";
import { GiFilmProjector, GiCaravan } from "react-icons/gi";
import { PiFilmReelFill, PiFilmSlateFill } from "react-icons/pi";
import {MdArrowBackIos} from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import "./Homepage.css";
import {motion} from "framer-motion"

function CaravanBooking() {
  return (
    <div>
      <Header/>

    {/* initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} */}
    <motion.div  initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerHeight, transition: {duration: 0.1}}}>
      
      <div className="about">
        <Container>
          <h1 style={{ paddingTop: "8%" }}>Caravan Booking</h1>
          <div>
            <Row>
              <Col>
                <a
                  href="/services"
                  style={{
                    color: "#4e4e85",
                    display: "flex",
                    justifyContent: "end",
                    paddingBottom: "3%",
                    textDecoration:"none"
                  }}
                >
                 <Button variant="none" className="btn_clr_box"><MdArrowBackIos/>Back</Button>
                </a>
              </Col>
            </Row>
          </div>
       
          <div
        className="ourservices"
        style={{ paddingTop: "3%", paddingBottom: "5%" }}
      >
        <Container>
          <Row style={{ paddingBottom: "5%" }}>
            
            <Col md={7}>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/free-photo/white-bus-with-word-coach-side_1340-32421.jpg"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <PiFilmReelFill size={30} />
                  <h5>
                    "Rolling Dreams, Unveiling Adventures: Caravan Cinema!"
                  </h5>
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/premium-photo/broadcasting-van-with-dramatic-stormy-sky-background_124507-123360.jpg"
                    alt=""
                  />
                </Col>
              </Row>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4} style={{ textAlign: "center" }}>
                  <FaBoxOpen size={30} />
                  <h5>"Bringing Blockbusters to Your Doorstep!"</h5>
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/free-photo/antique-camera-lens-wooden-table-indoors-generated-by-ai_188544-32919.jpg"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <GiCaravan size={30} />
                  <h5>"Wheels of Entertainment: Camera, Adventure!"</h5>
                </Col>
              </Row>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/premium-photo/camper-van-parked-picturesque-beach-with-stunning-view-sea-ai-generated_899027-8758.jpg"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <PiFilmSlateFill size={30} />

                  <h5>"Where Every Frame Comes to Life!"</h5>
                  <GiFilmProjector size={30} />
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/free-photo/city-trucks-rush-by-delivering-urgent-cargo-generated-by-ai_188544-29950.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
            <Col md={5} style={{ paddingTop: "2%" }}>
              <h5>
                <b>A Destination</b>
              </h5>
              <h2 style={{ color: "#4e4e85" }}>
                <b>The Ultimate Movie Environment</b>
              </h2>
              <p style={{ paddingTop: "3%" }}>
                <b>
                  It is a long established fact that a reader will distracted by
                  the readable content of a page hen looking at its layout. The
                  point of using our website zinefusion is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using.
                </b>
              </p>
              <p style={{ paddingTop: "3%" }}>
                <b>
                  It is a long established fact that a reader will distracted by
                  the readable content of a page hen looking at its layout. The
                  point of usin zinefusion{" "}
                </b>
              </p>
              <div className="button-container">
                <Button className="button" variant="dark">
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
     
        </Container>
      </div>
        </Container>
      </div>
    
    </motion.div>
    <Footer/>
    </div>
  );
}

export default CaravanBooking;
