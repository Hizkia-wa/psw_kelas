import React, { useState } from "react";
import "../css/QuestionPage.css";

const KuisPastPerfect = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "She ___ finished her homework before dinner.",
      options: ["A. had", "B. has", "C. have", "D. having"],
      correctOption: "A. had",
      explanation: "The correct answer is 'A. had' because it describes an action completed before another action in the past.",
    },
    {
      question: "We ___ eaten lunch before the meeting started.",
      options: ["A. had", "B. has", "C. have", "D. having"],
      correctOption: "A. had",
      explanation: "The correct answer is 'A. had' because it describes a past perfect action.",
    },
    {
      question: "He ___ left the house before it started raining.",
      options: ["A. had", "B. has", "C. have", "D. having"],
      correctOption: "A. had",
      explanation: "The correct answer is 'A. had' because it indicates an action completed before another past event.",
    },
    {
      question: "They ___ finished their project before the deadline.",
      options: ["A. had", "B. has", "C. have", "D. having"],
      correctOption: "A. had",
      explanation: "The correct answer is 'A. had' because it describes a completed past action before another action.",
    },
    {
      question: "The train ___ already left when we arrived at the station.",
      options: ["A. had", "B. has", "C. have", "D. having"],
      correctOption: "A. had",
      explanation: "The correct answer is 'A. had' because it describes an action that happened before another past action.",
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="question-page">
      <div className="question-container">
        <button
          className="oval-button previous-button"
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 1}
        >
          &larr; Previous Question
        </button>
        <div className="question-box">
          <h2>Question {currentQuestion}</h2>
          <p>{questions[currentQuestion - 1].question}</p>
        </div>
        <button
          className="oval-button next-button"
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length}
        >
          Next Question &rarr;
        </button>
      </div>

      <div className="options-container">
        {questions[currentQuestion - 1].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedOption === option
                ? option === questions[currentQuestion - 1].correctOption
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedOption && (
        <div className="explanation-container">
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default KuisPastPerfect;
