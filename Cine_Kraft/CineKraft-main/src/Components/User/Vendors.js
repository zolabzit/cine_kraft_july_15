import React from "react";
import Header from "./Header";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Footer from "./Footer";
import { motion } from 'framer-motion';
import {
  FaFilm,
  FaCamera,
  FaVideo,
  FaTicketAlt,
  FaPlay,
  FaTheaterMasks,
  FaMicrophone,
  FaProjectDiagram,
  FaChalkboardTeacher,
  FaGlobe,
  FaPalette,
  FaStar,
  FaMusic,
  FaImages,
  FaRegFileVideo,
  FaRegKeyboard,
  FaRegLightbulb,
  FaRegNewspaper,
  FaRegPaperPlane,
  FaRegMoneyBillAlt,
  FaRegSmile,
  FaBookOpen,
  FaMagic,
  FaMicrophoneAlt,
  FaTree,
  FaVolumeUp,
  FaUserTie,
  FaUsers,
  FaLanguage,
  FaCertificate,
  FaBroadcastTower,
  FaRegCalendarAlt 
} from 'react-icons/fa';

import "./Vendor.css";

function Vendors() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  function getRandomColor() {
    const colors = [
      // "#FF5733", // Orange
      // // "#3F88C5", // Blue
      // // "#F7B32B", // Yellow
      // "#C4C4C4", // Silver
      // "#2ECC71" // Emerald
      "#131E3A"
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const cardIcons = [
    FaFilm,
    FaCamera,
    FaVideo,
    FaTicketAlt,
    FaPlay,
    FaTheaterMasks,
    FaMicrophone,
    FaProjectDiagram,
    FaChalkboardTeacher,
    FaGlobe,
    FaPalette,
    FaStar,
    FaMusic,
    FaImages,
    FaRegFileVideo,
    FaRegKeyboard,
    FaRegLightbulb,
    FaRegNewspaper,
    FaRegPaperPlane,
    FaRegMoneyBillAlt,
    FaRegSmile,
    FaBookOpen,
    FaMagic,
    FaMicrophoneAlt,
    FaTree,
    FaVolumeUp,
    FaUserTie,
    FaUsers,
    FaLanguage,
    FaCertificate,
    FaBroadcastTower,
    FaRegCalendarAlt 
    // Add more icons as needed
  ];

  // Function to get a random icon
  function getRandomIcon(usedIcons) {
    const availableIcons = cardIcons.filter(icon => !usedIcons.includes(icon));
    const randomIndex = Math.floor(Math.random() * availableIcons.length);
    return availableIcons[randomIndex];
  }

  return (
    <div>
      {/* Header */}
      <Header />
      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
        <div className="about">
          <Container>
            <h1 style={{ paddingTop: "10%" }}><center>VENDORS</center></h1>
            {/* Navigation Bar */}
            <div className="navigation">
              <ul>
                <li
                  onClick={() => scrollToSection("movie-support")}
                  style={{ backgroundColor: getRandomColor() }} // Apply background color here
                >
                   Marketing / Introduction
                </li>
                <li
                  onClick={() => scrollToSection("movie-promotion")}
                  style={{ backgroundColor: getRandomColor() }} // Apply background color here
                >
                   Production
                </li>
                <li
                  onClick={() => scrollToSection("movie-distribution")}
                  style={{ backgroundColor: getRandomColor() }} // Apply background color here
                >
                  Post production
                </li>
              </ul>
            </div>
            <div id="movie-support">
              <h2 className="movie-support-heading"><center>Marketing / Introduction</center></h2>
              <Row className="justify-content-center mt-5">
                {/* Movie Promotion Card */}
                <Col md={4}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
                      <Card.Body>
                        <div className="icon-container">
                          <div className="icon"><FaFilm /></div>
                        </div>
                        <Card.Title><center>Digital Marketing</center></Card.Title>
                        <Card.Text>
                        Effective digital marketing strategies to promote your movie online.
                        </Card.Text>
                        <div className="text-center">
                          <Button variant="primary">View</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
                {/* Caravan Booking Card */}
                <Col md={4}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
                      <Card.Body>
                        <div className="icon-container">
                          <div className="icon"><FaCamera /></div>
                        </div>
                        <Card.Title><center>360 Degree Coverage</center></Card.Title>
                        <Card.Text>
                        Comprehensive 360 degree coverage for all your movie 
                        events.
                        </Card.Text>
                        <div className="text-center">
                          <Button variant="primary">View</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
                {/* Editing & Dubbing Card */}
                <Col md={4}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
                      <Card.Body>
                        <div className="icon-container">
                          <div className="icon"><FaRegFileVideo /></div>
                        </div>
                        <Card.Title><center>Movie Promotion (general)</center>
                        </Card.Title>
                        <Card.Text>
                        Promoting a movie effectively requires a multifaceted 
                        approach. 
                        </Card.Text>
                        <div className="text-center">
                          <Button variant="primary">View</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
                {/* Censor Certificate Support Card */}
                <Col md={4}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
                      <Card.Body>
                        <div className="icon-container">
                          <div className="icon"><FaTheaterMasks /></div>
                        </div>
                        <Card.Title><center>Photo shoot</center></Card.Title>
                        <Card.Text>
                        Professional photoshoot services for your cast and
                        crew.
                        </Card.Text>
                        <div className="text-center">
                          <Button variant="primary">View</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
                {/* Executive Producer Card */}
                <Col md={4}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
                      <Card.Body>
                        <div className="icon-container">
                          <div className="icon"><FaPlay /></div>
                        </div>
                        <Card.Title><center>Motion Poster Creation</center></Card.Title>
                        <Card.Text>
                        Create engaging motion posters to captivate your audience.
                        </Card.Text>
                        <div className="text-center">
                          <Button variant="primary">View</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
                {/* Environment Setup Card */}
                <Col md={4}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
                      <Card.Body>
                        <div className="icon-container">
                          <div className="icon"><FaMicrophone /></div>
                        </div>
                        <Card.Title><center>RJ/VJ Support</center></Card.Title>
                        <Card.Text>
                        Leverage RJ and VJ for promotional support to cover audience.
                        </Card.Text>
                        <div className="text-center">
                          <Button variant="primary">View</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
                {/* Pitch Deck/Story Board Card */}
                <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaRegCalendarAlt /></div> {/* Icon for Event / Launch */}
            </div>
            <Card.Title><center>Event / Launch</center></Card.Title>
            <Card.Text>
              Planning and management services for film events and launches.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
                {/* Production House Information Card */}
                <Col md={4}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
                      <Card.Body>
                        <div className="icon-container">
                          <div className="icon"><FaGlobe /></div>
                        </div>
                        <Card.Title> <center>Social media handling</center></Card.Title>
                        <Card.Text>
                        Expert social media management to boost your movie's online presence.
                        </Card.Text>
                        <div className="text-center">
                          <Button variant="primary">View</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
                {/* Production Management Card */}
                <Col md={4}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
                      <Card.Body>
                        <div className="icon-container">
                          <div className="icon"><FaPalette /></div>
                        </div>
                        <Card.Title> <center>Theme based promotion</center></Card.Title>
                        <Card.Text>
                        Engage audiences with promotions centered around the movie's theme.
                        </Card.Text>
                        <div className="text-center">
                          <Button variant="primary">View</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
                <Col md={4}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaStar /></div> {/* Using the FaFilm icon */}
            </div>
            <Card.Title className="text-center">In-Film Sponsorship</Card.Title>
            <Card.Text>
              Opportunities for brands to sponsor and be featured in your film.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
    <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaBookOpen /></div> {/* Using the FaBookOpen icon */}
            </div>
            <Card.Title><center>3D Brochure</center></Card.Title>
            <Card.Text>
              Innovative 3D brochures to captivate your audience and to attract them.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
              </Row>
            </div>
            <div id="movie-promotion">
              <h2 className="movie-promotion-heading"><center>Production</center></h2>
              <Row className="justify-content-center mt-5">
              <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaMagic /></div> {/* Using the FaMagic icon */}
            </div>
            <Card.Title><center>VFX Graphic Design</center></Card.Title>
            <Card.Text>
              Stunning VFX and graphic design solutions to enhance your film.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
    <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaMicrophoneAlt /></div> {/* Using the FaMicrophoneAlt icon */}
            </div>
            <Card.Title><center>Editing & Voice Over</center></Card.Title>
            <Card.Text>
              Professional editing services and voice-over services for your film.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
                {/* Social Media Campaigns Card */}
                <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaTree /></div> {/* Using the FaTree icon */}
            </div>
            <Card.Title><center>Environment Set Up</center></Card.Title>
            <Card.Text>
              Create immersive environments for your movie shoot and  promotions.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
    <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaVolumeUp /></div> {/* Icon for volume */}
            </div>
            <Card.Title><center>Other Language Dubbing</center></Card.Title>
            <Card.Text>
              Professional dubbing services in multiple languages for your film.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
              <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaUserTie /></div> {/* Icon for Executive Producer */}
            </div>
            <Card.Title><center>Executive Producer</center></Card.Title>
            <Card.Text>
              Experienced executive producers for overseeing film production.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
    <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaUsers /></div> {/* Icon for Movie Casting Support */}
            </div>
            <Card.Title><center>Movie Casting Support</center></Card.Title>
            <Card.Text>
              Professional assistance for casting actors and extras for your film.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
    <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaLanguage /></div> {/* Icon for Unheard Language Movie Support */}
            </div>
            <Card.Title><center>Unheard Language Movie Design and Support</center></Card.Title>
            <Card.Text>
              Specialized design and support services for movies in unheard languages.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
              </Row>
            </div>
            <div id="movie-distribution">
              <h2 className="movie-distribution-heading"><center>Post Production</center></h2>
              <Row className="justify-content-center mt-5">
              <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaCertificate /></div> {/* Icon for Censor Certificate Support */}
            </div>
            <Card.Title><center>Censor Certificate Support</center></Card.Title>
            <Card.Text>
              Assistance in obtaining necessary censor certificates for your film.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
    <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaTicketAlt /></div> {/* Icon for Bookmyshow Link */}
            </div>
            <Card.Title>Bookmyshow Link</Card.Title>
            <Card.Text>
              Direct link to Bookmyshow for ticket booking of your interested film.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
    <Col md={4}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="mb-4 h-100" style={{ backgroundColor: getRandomColor() }}>
          <Card.Body>
            <div className="icon-container">
              <div className="icon"><FaBroadcastTower /></div> {/* Icon for OTT / Satellite Support */}
            </div>
            <Card.Title>OTT / Satellite Support</Card.Title>
            <Card.Text>
              Guidance and support for distributing your film on OTT platforms or satellite channels.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">View</Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
              </Row>
            </div>
          </Container>
        </div>
      </motion.div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Vendors;
