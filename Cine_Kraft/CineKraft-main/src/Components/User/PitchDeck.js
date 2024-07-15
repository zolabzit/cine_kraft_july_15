import React from "react";
import Header from "./Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "./Homepage.css";
import introduction from"../../assets/pitchdeck/introduction.jpeg";
import logline from"../../assets/pitchdeck/logline.jpeg";
import synopsis from"../../assets/pitchdeck/synopsis.jpeg";
import character from"../../assets/pitchdeck/character.jpeg";
import visualReference from"../..//assets/pitchdeck/Visual Reference.png";
import plot from"../../assets/pitchdeck/plot.jpeg";
import message from"../../assets//pitchdeck/message.jpg";
import marketing from"../../assets/pitchdeck/Marketing.jpg";  
import production from"../../assets/pitchdeck/flimproduction.jpg";
import conclusion from"../../assets/pitchdeck/conclusion.jpg";
import directorDebut from"../../assets/pitchdeck/directorDebut.png";



function PitchDeck() {

    const sections = [
        {
          title: "1. Introduction",
          description:
            "Welcome to our movie pitch deck presentation! We are excited to share our story and vision with you.",
            image: introduction,
        },
        {
          title: "2. Logline",
          description:
            '"Insert captivating logline here that encapsulates the essence of the movie in one or two sentences."',
            image: logline,
        },
        {
          title: "3. Synopsis",
          description:
            "Provide a brief synopsis of the movie's plot, focusing on the main story arc and key plot points. Keep it concise yet engaging.",
            image: synopsis,
        },
        {
          title: "4. Character Profiles",
          description:
            "Introduce the main characters, including their names, backgrounds, motivations, and arcs. Use visuals to help bring them to life.",
            image: character,
        },
        {
          title: "5. Visual References",
          description:
            "Include concept art, mood boards, or visual references that capture the look, feel, and atmosphere of the movie.",
            image: visualReference,
        },
        {
          title: "6. Key Scenes",
          description:
            "Highlight a few key scenes that showcase memorable moments, dramatic turning points, or visual spectacle.",
            image: plot,
        },
        {
          title: "7. Themes and Messages",
          description:
            "Discuss the underlying themes, messages, and social relevance of the movie.",
            image: message,
        },
        {
          title: "8. Marketability",
          description:
            "Demonstrate the commercial appeal and marketability of the movie, including its target audience and potential for success.",
            image:marketing,
        },
        {
          title: "9. Production Plan",
          description:
            "Provide an overview of the production plan, including the budget, shooting schedule, and key milestones.",
            image: production,
        },
        {
          title: "10. Conclusion",
          description:
            "End the pitch deck with a strong closing that reinforces the movie's key points and leaves a lasting impression.",
            image: conclusion,
        },
      ];
  return (
    <div>
      {/* Header */}
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about">
          <Container>
            <h2 style={{ paddingTop: "10%" }}>PitchDeck / Story Board</h2>
          </Container>
        </div>

        <div style={{ paddingTop: "3%", paddingBottom: "5%" }}>
          <Container>
            <div>
             <Card className="pitchDeck_cards" style={{padding:"2%"}}>
             <h2>What is a pitch deck for a movie story?</h2>
              <h5>
                What should a film pitch deck include? In short, a pitch
                document should include everything you need to visualize a sense
                of the atmosphere of your story world, tone, style, project
                scope, and character arcs in the reader's mind while providing
                solid information to support your idea and its potential
                financial success.
              </h5>
             </Card>
            </div>
            <div className="directorDebut" style={{paddingTop:"3%"}}>
                <img style={{width:"100%", height:"100%"}}  src={directorDebut} alt="directorDebut"/>
                <Button variant="white"><h5>Terms & Conditions</h5></Button>
            </div>
            
              <Row >
              {sections.map((section, index) => (
                <Col key={index} md={4} lg={3} style={{paddingTop:"2%"}}>
                  <Card className="pitchDeck_cards" style={{ padding: "2%", height:"55vh"}}>
                  <Card.Img className="pitchdeck-card-img" variant="top"  style={{height:"30vh"}} src={section.image} alt="none"/>
                    <h4 style={{fontWeight:"bold"}}>{section.title}</h4>
                    <h5>{section.description}</h5>
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

export default PitchDeck;
