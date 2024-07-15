import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Quiz.css";
import DisplayQuiz from "./DisplayQuiz";
import { MdOutlineStarBorder } from "react-icons/md";

const questions = [
  {
    question: "Which movie won the Oscar for Best Picture in 2020?",
    options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
    answer: "Parasite",
  },
  {
    question: "Who directed the movie 'Inception'?",
    options: [
      "Christopher Nolan",
      "Steven Spielberg",
      "James Cameron",
      "Quentin Tarantino",
    ],
    answer: "Christopher Nolan",
  },
  {
    question: "Which actor played the character of Jack in 'Titanic'?",
    options: ["Brad Pitt", "Leonardo DiCaprio", "Johnny Depp", "Matt Damon"],
    answer: "Leonardo DiCaprio",
  },
  {
    question: "Which film features the character 'Forrest Gump'?",
    options: ["The Green Mile", "Forrest Gump", "Cast Away", "Big"],
    answer: "Forrest Gump",
  },
  {
    question: "Who played the role of Harry Potter in the movie series?",
    options: [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Elijah Wood",
      "Tobey Maguire",
    ],
    answer: "Daniel Radcliffe",
  },
  {
    question: "Which movie features the quote 'I'll be back'?",
    options: ["Terminator", "Predator", "Commando", "Total Recall"],
    answer: "Terminator",
  },
  {
    question:
      "Which director is known for the movies 'Pulp Fiction' and 'Kill Bill'?",
    options: [
      "Steven Spielberg",
      "Martin Scorsese",
      "Quentin Tarantino",
      "James Cameron",
    ],
    answer: "Quentin Tarantino",
  },
  {
    question: "Which movie is about the dreams within dreams?",
    options: ["Interstellar", "The Matrix", "Inception", "Shutter Island"],
    answer: "Inception",
  },
  {
    question: "In which year was the original 'Jurassic Park' released?",
    options: ["1990", "1993", "1995", "1997"],
    answer: "1993",
  },
  {
    question:
      "Which actor portrayed the character of 'Tony Stark' in the Marvel movies?",
    options: [
      "Chris Hemsworth",
      "Chris Evans",
      "Robert Downey Jr.",
      "Mark Ruffalo",
    ],
    answer: "Robert Downey Jr.",
  },
  // {
  //   question: "Which movie features the character 'Jack Sparrow'?",
  //   options: [
  //     "Pirates of the Caribbean",
  //     "Peter Pan",
  //     "The Jungle Book",
  //     "Treasure Island",
  //   ],
  //   answer: "Pirates of the Caribbean",
  // },
  // {
  //   question: "Who directed 'The Godfather'?",
  //   options: [
  //     "Martin Scorsese",
  //     "Steven Spielberg",
  //     "Francis Ford Coppola",
  //     "Stanley Kubrick",
  //   ],
  //   answer: "Francis Ford Coppola",
  // },
  // {
  //   question: "Which movie is known for the line 'Here's looking at you, kid'?",
  //   options: [
  //     "Gone with the Wind",
  //     "Casablanca",
  //     "Citizen Kane",
  //     "The Maltese Falcon",
  //   ],
  //   answer: "Casablanca",
  // },
  // {
  //   question:
  //     "Which movie won the first Academy Award for Best Animated Feature?",
  //   options: ["Shrek", "Finding Nemo", "The Incredibles", "Toy Story"],
  //   answer: "Shrek",
  // },
  // {
  //   question: "Who played the character of 'The Joker' in 'The Dark Knight'?",
  //   options: [
  //     "Jared Leto",
  //     "Jack Nicholson",
  //     "Heath Ledger",
  //     "Joaquin Phoenix",
  //   ],
  //   answer: "Heath Ledger",
  // },
];

function QuizQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerOptionClick = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: questions[currentQuestion].question,
        selectedOption,
        correctOption: questions[currentQuestion].answer,
      },
    ]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="QuizQuestions">
      {showScore ? (
        <div className="score-section">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card className="score_cls">
              <Row className="justify-content-center align-items-center">
                <Col xs="auto">
                  <MdOutlineStarBorder />
                </Col>
                <Col xs="auto">
                  <MdOutlineStarBorder />
                </Col>
                <Col xs="auto">
                  <MdOutlineStarBorder />
                </Col>
              </Row>
              You scored {score} out of {questions.length}
            </Card>
          </div>
          <div className="answers-review" style={{ paddingTop: "2%" }}>
            <Row>
              {userAnswers.map((answer, index) => (
                <Col key={index} sm={6} style={{ paddingTop: "1%" }}>
                  <Card
                    className={`answer-review-item ${
                      answer.selectedOption === answer.correctOption
                        ? "correct"
                        : "incorrect"
                    }`}
                  >
                    <div>
                      <h5>
                        <b>
                          Q{index + 1}: {answer.question}
                        </b>
                      </h5>
                      <h5>Your answer: {answer.selectedOption}</h5>
                      <h5>Correct answer: {answer.correctOption}</h5>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      ) : (
        <DisplayQuiz
          question={questions[currentQuestion]}
          questionNumber={currentQuestion}
          onAnswerClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}

export default QuizQuestions;
