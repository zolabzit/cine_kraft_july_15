import React from "react";
import Header from "./Header";
import { Row, Col, Card,Tabs } from "antd";
import {Container} from "react-bootstrap";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "./Homepage.css";

const { TabPane } = Tabs;

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "April 15, 2024",
      location: "Virtual",
      description:
        "Join us for the largest tech conference of the year where industry leaders discuss the latest innovations and trends in technology.",
      image:
        "https://img.freepik.com/free-vector/realistic-cinematography-bright-with-film-reels-camera-filmstrip-cinema-awards-illustration_1284-51085.jpg?w=1060&t=st=1711007247~exp=1711007847~hmac=14fefbc7fbba5bd0e09e402dd248552af521ba6075a99cc45779a82455c9bc1c",
    },
    {
      id: 2,
      title: "Startup Expo",
      date: "May 20, 2024",
      location: "City Convention Center",
      description:
        "Discover the latest startups and innovations at our Startup Expo. Network with entrepreneurs and investors from around the world.",
      image:
        "https://img.freepik.com/free-photo/movie-theatre-during-quarantine_155003-16284.jpg?w=996&t=st=1711012472~exp=1711013072~hmac=8e5933479441e1695c22e5fe959af1218e7211972f573ab208b302ea5a706a94",
    },
    {
      id: 3,
      title: "AI Summit",
      date: "June 30, 2024",
      location: "Virtual",
      description:
        "Explore the latest advancements in artificial intelligence and machine learning at our AI Summit. Learn from leading experts and researchers in the field.",
      image:
        "https://img.freepik.com/free-photo/artificial-intelligence-ai-machine-learning-technology-digital-computer-with-robot-concept_1150-14258.jpg?size=626&ext=jpg",
    },
    {
      id: 4,
      title: "Blockchain Conference",
      date: "August 10, 2024",
      location: "Tech Hub",
      description:
        "Join us at the Blockchain Conference to learn about the transformative potential of blockchain technology across various industries. Network with blockchain enthusiasts and experts.",
      image:
        "https://img.freepik.com/free-vector/blockchain-technology-concept_52683-38196.jpg?size=626&ext=jpg",
    },
  ];

  const completedEvents = [
    {
      id: 1,
      title: "Hackathon 2023",
      date: "November 10-12, 2023",
      location: "Tech Hub",
      description:
        "The ultimate coding challenge! Hackathon 2023 brings together developers, designers, and innovators to build groundbreaking solutions in just 48 hours.",
      image:
        "https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?w=1380&t=st=1711012496~exp=1711013096~hmac=c94abfd847870781ac9f6d4cbe19304c1d8f480f3d6997ad9a855f70c3535ff1",
    },
    {
      id: 2,
      title: "Industry Summit",
      date: "February 5-7, 2024",
      location: "Grand Hotel",
      description:
        "Connect with industry leaders and experts at the Industry Summit. Explore emerging trends and strategies shaping the future of business.",
      image:
        "https://img.freepik.com/free-vector/party-crowd-silhouettes-dancing-nightclub_1048-11557.jpg?t=st=1711012563~exp=1711016163~hmac=7333931be2e11b1e019666d52bdbcd02f7c71f495e1d8290e54c1d6b1d1a3c25&w=1380",
    },
    {
      id: 3,
      title: "AI Expo",
      date: "March 15-17, 2024",
      location: "Virtual",
      description:
        "Experience the latest in artificial intelligence at our AI Expo. See live demos, attend workshops, and connect with leading AI companies.",
      image:
        "https://img.freepik.com/free-vector/artificial-intelligence-horizontal-banner-template_23-2148955626.jpg?t=st=1711014674~exp=1711018274~hmac=b9d8b9a60e0e7754645ad55192e439354d5740708a9eac9049c308d03ea44e9d&w=996",
    },
    {
      id: 4,
      title: "Big Data Summit",
      date: "June 5-7, 2024",
      location: "Convention Center",
      description:
        "Unlock the potential of big data at our Big Data Summit. Learn how data analytics and AI are revolutionizing businesses across industries.",
      image:
        "https://img.freepik.com/free-vector/big-data-concept-with-database-icons_23-2147981871.jpg?size=626&ext=jpg",
    },
  ];


  return (
    <div>
      {/* Header */}
      <Header />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="about">
          <Container>
            <h1 style={{ paddingTop: "10%" }}>Events</h1>
          </Container>
        </div>

        <div style={{paddingBottom:"5%"}}>
          <Container>
            <Row>
              <Col md={24}>
                <Tabs defaultActiveKey="1" className="event_tab_font">
                  <TabPane tab={<span className="event_tab_font">Upcoming</span>} key="1" className="event_tab_font" >
                  <Row gutter={[16, 16]}>
  {upcomingEvents.map((event) => (
    <Col key={event.id} xs={24} sm={12} lg={12} xl={12}>
      <Card className="event_cards" style={{height: "38vh",}}>
        <Row>
          <Col xs={24} sm={10} lg={10} xl={10}>
            {/* Image */}
            <img
              style={{
                borderRadius: "5px",
                width: "100%",
                height: "30vh",
              }}
              src={event.image}
              alt="none"
            />
          </Col>
          <Col xs={24} sm={14} lg={14} xl={14} style={{padding:"2%"}}>
            {/* Text */}
            <Card.Meta className="event_tab_font"
              title={event.title}
              description={`Date: ${event.date}`}
            />
            <p className="event_tab_font">Location: {event.location}</p>
            <p className="event_tab_font">{event.description}</p>
          </Col>
        </Row>
      </Card>
    </Col>
  ))}
</Row>

                  </TabPane>
                  <TabPane tab={<span className="event_tab_font">Completed</span>} key="2" >
                    <Row gutter={[16, 16]}>
                      {completedEvents.map((event) => (
                         <Col key={event.id} xs={24} sm={12} lg={12} xl={12}>
                         <Card className="event_cards" style={{height: "38vh",}}>
                           <Row>
                             <Col xs={24} sm={10} lg={10} xl={10}>
                               {/* Image */}
                               <img
                                 style={{
                                   borderRadius: "5px",
                                   width: "100%",
                                   height: "30vh",
                                 }}
                                 src={event.image}
                                 alt="none"
                               />
                             </Col>
                             <Col xs={24} sm={14} lg={14} xl={14} style={{padding:"2%"}}>
                               {/* Text */}
                               <Card.Meta className="event_tab_font"
                                 title={event.title}
                                 description={`Date: ${event.date}`}
                               />
                               <p className="event_tab_font">Location: {event.location}</p>
                               <p className="event_tab_font">{event.description}</p>
                             </Col>
                           </Row>
                         </Card>
                       </Col>
                      ))}
                    </Row>
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Events;
