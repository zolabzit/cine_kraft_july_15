import React from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import { motion } from "framer-motion";
import "../Homepage.css";
import QuizQuestions from "./QuizQuestions";

function Quiz() {
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
        <div className="about" style={{paddingBottom:"5%"}}>
          <Container>
            <h2 style={{ paddingTop: "10%"}}>Quiz - Game of puzzles</h2>
            <QuizQuestions />
          </Container>
        </div>
      </motion.div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Quiz;
