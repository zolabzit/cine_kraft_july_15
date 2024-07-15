import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { PiFilmReelFill } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";
import { GiCaravan } from "react-icons/gi";
import "./Homepage.css";
import { MdArrowBackIos } from "react-icons/md";
import Header from "./Header";
import Footer from "./Footer";
import {motion} from "framer-motion"
function TicketBooking() {
  return (
    <div>
        <Header/>
        {/* initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} */}
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerHeight, transition: {duration: 0.1}}} >
    
      <div className="about">
        <Container>
          <h1 style={{ paddingTop: "8%" }}>Ticket Booking</h1>
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
        
          <Row>
            <Col md={5} style={{ paddingTop: "3%" }}>
              <h5>
                <b>Buy Your Pass</b>
              </h5>
              <h2 style={{ color: "#4e4e85" }}>
                <b>Get Better Experience </b>
              </h2>
              <p style={{ paddingTop: "3%" }}>
                <b>
                  Booking tickets in advance often comes with cost advantages.
                  Many providers offer early-bird discounts or special offers
                  for those who plan ahead. This not only helps travelers or
                  attendees save money but also allows them to allocate their
                  budgets more effectively.
                </b>
              </p>
              <p style={{ paddingTop: "3%", paddingBottom: "5%" }}>
                <b>
                  This includes accommodations, transportation, and creating
                  itineraries that maximize their time and enjoyment.
                </b>
              </p>
              <div className="button-container">
                <Button className="button" variant="dark" >
                  Learn More
                </Button>
              </div>
            </Col>
            <Col md={7}>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4} style={{ textAlign: "center" }}>
                  <FaBoxOpen size={30} />
                  <h5>
                    "Opening Doors to Dreams: Where Films Begin with Your
                    Booking."
                  </h5>
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/free-vector/buying-cinema-tickets-online-isometric-composition-with-holding-smartphone-hand-popcorn-movie-film-bobbins_1284-55352.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=ais"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <GiCaravan size={30} />
                  <h5>
                    "Elevate Your Movie Experience: Where Tickets Come to Life!"
                  </h5>
                </Col>
              </Row>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/premium-photo/concept-watching-movies-online-home-during-epidemic-surrounded-by-movie-equipment-movie-tickets-film-reels-movie-cameras-popcorn-drinks-with-red-leather-chairs-3d-rendering_156429-3743.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=ais"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <PiFilmReelFill size={30} />
                  <h5>"Empowering Choice, One Ticket at a Time."</h5>
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/free-photo/cinema-popcorn-box-with-soft-drink_23-2148115272.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=ais"
                    alt=""
                  />
                </Col>
              </Row>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4} style={{ textAlign: "center" }}>
                  <FaBoxOpen size={30} />
                  <h5>
                    "Seize the Aisle: Booking Memories, One Film at a Time."
                  </h5>
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/premium-psd/3d-render-cinema-ticket-popup-from-smartphone-with-booking-tickets-online_252008-535.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=ais"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <GiCaravan size={30} />
                  <h5>"Navigate Entertainment :Your Ticket, Your Tale."</h5>
                </Col>
              </Row>
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

export default TicketBooking;


