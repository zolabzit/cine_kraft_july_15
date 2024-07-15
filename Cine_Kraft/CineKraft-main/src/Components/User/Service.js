import React from "react";
import Header from "./Header";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';  
import Footer from "./Footer";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faUser, faBullhorn, faCamera, faTheaterMasks, faMapMarkedAlt, faMobileAlt, faTicketAlt, faPaintBrush, faCut, faCalendarAlt, faUserPlus, faGlobe, faRocket, faMicrophone, faSitemap, faUserSecret, faIndustry, faCertificate, faShareAlt, faLanguage, faBook, faChalkboardTeacher, faPuzzlePiece, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const cardabout = [

  { subtitle: 'Movie Promotion', link: '/services/moviepromotion', icon: faBullhorn },
  { subtitle: '360 Degree Coverage', link: '/services/360coverage', icon: faCamera },
  { subtitle: 'Photoshoot', link: '/services/photoshoot', icon: faCamera },
  { subtitle: 'In-Film Sponsorship', link: '/services/infilmsponsorship', icon: faTheaterMasks },
  { subtitle: 'Movie Theme Based Promotion', link: '/services/themebasedpromotion', icon: faMapMarkedAlt },
  
  { subtitle: 'Caravan Booking', link: '/services/caravanBooking', icon: faMobileAlt },
  { subtitle: 'Digital Marketing', link: '/services/digitalmarketing', icon: faShareAlt },
  { subtitle: 'Ticket Booking', link: '/services/tickeBooking', icon: faTicketAlt },
  { subtitle: 'Motion Poster Creation', link: '/services/motionpostercreation', icon: faPaintBrush },
  { subtitle: 'VFX & Graphic Design', link: '/services/vfxgraphicdesign', icon: faPaintBrush },
  { subtitle: 'Editing & Voice Over', link: '/services/editingvoiceover', icon: faCut },
  { subtitle: 'Event - Audio/Teaser/Trailer Launch', link: '/services/eventlaunch', icon: faCalendarAlt },
  { subtitle: 'BookMyShow/TicketNew Profile Creation', link: '/services/profilecreation', icon: faUserPlus },
  { subtitle: 'OTT/Satellite/Audio Support', link: '/services/ottsupport', icon: faGlobe },
  { subtitle: 'RJ/VJ Support', link: '/services/rjvjsupport', icon: faMicrophone },
  { subtitle: 'Pitch Deck/Story Board', link: '/services/pitchdeckstoryboard', icon: faSitemap },
  { subtitle: 'Movie Casting Support', link: '/services/moviecastingsupport', icon: faUserSecret },
  { subtitle: 'Environment Setup', link: '/services/environmentsetup', icon: faIndustry },
  { subtitle: 'Censor Certificate Support', link: '/services/censorcertsupport', icon: faCertificate },
  { subtitle: 'Social Media Handling', link: '/services/socialmediahandling', icon: faShareAlt },
  { subtitle: 'Other Language Dubbing Rights Support', link: '/services/dubbingrights', icon: faLanguage },
  { subtitle: '3D Brochure', link: '/services/3dbrochure', icon: faBook },
  { subtitle: 'Executive Producer', link: '/services/executiveproducer', icon: faChalkboardTeacher },
  { subtitle: 'Unheard Language Movie Design and Support', link: '/services/unheardlanguage', icon: faPuzzlePiece },
];

function Service() {
  return (
    <div>
      {/* Header */}
      <Header />
      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
        <div className="about">
          <Container>
            <h1 style={{ paddingTop: "10%", textAlign: "center" }}>Our Services</h1>
          </Container>
        </div>
        <div style={{ paddingTop: "2%", paddingBottom: "5%", display: "flex", justifyContent: "center" }}>
          <Container>
            <Row className="justify-content-center" style={{ paddingTop: "2%" }}>
              {cardabout.map((card, index) => (
                <Col 
                  md={3}
                  key={index}
                  className="d-flex align-items-stretch"
                  style={{ padding: "1%" }}
                >
                  <Card 
                    style={{
                      width: "100%",
                      height: "14rem", // Fixed height for all cards
                      backgroundColor: "#28283b",
                      color: "white",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "2%"
                    }}
                  >
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <FontAwesomeIcon icon={card.icon} size="3x" style={{ marginBottom: '10px' }} />
                        <Card.Subtitle
                          className="mb-2"
                          style={{ fontSize: "x-large" }}
                        >
                          {card.subtitle}
                        </Card.Subtitle>
                      </div>
                      <Link to={card.link}>
                        <Button variant="secondary" className="mt-auto">Read more</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </motion.div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Service;
