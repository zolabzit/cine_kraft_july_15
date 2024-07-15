import React from 'react';
import PropTypes from 'prop-types';

const DisplayQuiz = ({ question, questionNumber, onAnswerClick }) => {
  if (!question) return null; // Ensure question is defined

  return (
    <div className="quiz-section">
      <div className="question-section">
        <div className="question-text">
          Q{questionNumber + 1} : {question.question}
        </div>
      </div>
      <div className="answer-section">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

DisplayQuiz.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  questionNumber: PropTypes.number.isRequired,
  onAnswerClick: PropTypes.func.isRequired,
};

export default DisplayQuiz;
