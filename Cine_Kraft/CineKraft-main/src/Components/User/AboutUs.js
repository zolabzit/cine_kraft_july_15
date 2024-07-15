import React from "react";
import "./Homepage.css";
import Header from "./Header";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { BsDatabaseFillGear } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import Footer from "./Footer";
import "./../../index.css";

import { motion} from "framer-motion";


const images = [
  "https://img.freepik.com/premium-photo/cinema-advertising-poster-film-production-banner-movie-premiere-show-announcement-design_460848-16920.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph",
  "https://img.freepik.com/premium-vector/cinema-festival-poster-movie-time-vector-illustration_149152-667.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph",
  "https://img.freepik.com/free-photo/concept-cinema-with-film-elements_23-2150063157.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph",
  "https://img.freepik.com/free-vector/cinema-room-background_1017-8728.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph",
  "https://img.freepik.com/premium-photo/broadcasting-van-with-dramatic-stormy-sky-background_124507-123360.jpg",
  "https://img.freepik.com/free-photo/antique-camera-lens-wooden-table-indoors-generated-by-ai_188544-32919.jpg",
  "https://img.freepik.com/free-vector/home-movie-background-with-popcorn_1419-1852.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph",
  "https://img.freepik.com/free-vector/cinema-elements-set_74855-15362.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph",
  "https://img.freepik.com/premium-psd/top-view-retro-cinema-doodles-old-camera_23-2148470097.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph",
];

const aboutcard = [
  {
    title: <BsDatabaseFillGear size={60} />,
    subtitle: "5L+",
    content: "Data Entries",
  },
  {
    title: <IoIosContacts size={60} />,
    subtitle: "3M+",
    content: "Profile Creation ",
  },
  {
    title: <MdRateReview size={60} />,
    subtitle: "10K+",
    content: "Client Reviews",
  },
  {
    title: <TbBrandBooking size={60} />,
    subtitle: "1M+",
    content: "Booking",
  },
];

function AboutUs() {
  return (

    <div>
       {/* Header */}
       <Header/>
  
{/*  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} */}
{/* <motion.div 
animate={{ x: [0, 100, 0], y: [0, 100, 0], rotate: [0, 30, 0] }} 
transition={{ duration: 2, loop: Infinity, ease: "linear" }}
> */}

<motion.div
  animate={{ scale: [0, 1, 0.5, 1] }}
  transition={{ times: [0, 0.1, 0.9, 1] }}
>
      <div className="about">
        <Container>
        <h1 style={{ paddingTop: "10%" }}>About US</h1>
    
        </Container>
      </div>
      <div style={{ paddingTop: "3%", paddingBottom:"5%" }}>
        <Container>
          <Row>
            <Col md={6}>
              <div className="gallery">
                {images.map((image, index) => (
                  <div className="gallery-item" key={index}>
                    <img src={image} alt={`img ${index + 1}`} />
                  </div>
                ))}
              </div>
            </Col>
            <Col md={6} style={{ paddingTop: "10%" }}>
              <h5>
                <b>A TALE OF</b>
              </h5>
              <h2 style={{ color: "#4e4e85" }}>
                <b>The Ultimate Movie Destination</b>
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
              <p style={{ paddingTop: "3%", paddingBottom: "5%" }}>
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
          <Row style={{ paddingTop: "5%" }}>
            <Col md={6} style={{ paddingTop: "3%" }}>
              <b>
                <p style={{ paddingBottom: "5%" }}>
                  It is a long established fact that a reader will distracted by
                  the readable content of a page hen looking at its layout.The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                </p>
                <li> More Than Just a Movie</li>
                <li>Lights Out, Movie On</li>
                <li style={{ paddingBottom: "5%" }}>
                  {" "}
                  Enter a World of Imagination
                </li>
                <p>
                  It is a long established fact that a reader will distracted by
                  the readable content of a page hen looking at its layout.
                </p>
              </b>
            </Col>
            <Col md={6}>
              <div className="single-image">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://img.freepik.com/premium-vector/camera-background-with-composition-realistic-dark-sky-professional-camera-with-light-text_1284-60593.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph"
                  alt="img"
                />
              </div>
            </Col>
          </Row>
          <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
            <Container>
              <Row>
                {aboutcard.map((card, index) => (
                  <Col md={3} key={index}>
                    <Card
                      style={{
                        width: "15rem",
                        backgroundColor: "#28283b",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <Card.Body>
                        <Card.Title style={{ paddingBottom: "5%" }}>
                          {card.title}
                        </Card.Title>
                        <Card.Subtitle
                          className="mb-2"
                          style={{ fontSize: "xx-large" }}
                        >
                          {card.subtitle}
                        </Card.Subtitle>
                        <Card.Text>{card.content}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      {/* Footer */}
      <Footer/>
         </motion.div>
         </div>
  );
}

export default AboutUs;