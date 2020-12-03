import React, { useState } from "react";

export default function Questions() {
  const questions = [
    {
      questionsText: "What is Personal Development?",
      answerOptions: [
        { answerText: "The process of improving oneself", isCorrect: false },
        { answerText: "A lifelong process", isCorrect: false },
        {
          answerText:
            "The puirsuit of personal growth by gaining knowledge and improving personal skills",
          isCorrect: false,
        },
        { answerText: "All of the above", isCorrect: true },
      ],
    },

    {
      questionsText: "What is failure?",
      answerOptions: [
        {
          answerText: "The omission of expected or required action",
          isCorrect: false,
        },
        { answerText: "Part of the journey to success", isCorrect: false },
        { answerText: "Pain", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },

    {
      questionsText: "What is confidence?",
      answerOptions: [
        { answerText: "Being cocky", isCorrect: false },
        { answerText: "Wanting things more than others", isCorrect: false },
        {
          answerText:
            "A feeling of self-assurance arising from one's appreciation of one's abilities or qualities",
          isCorrect: true,
        },
        { answerText: "None of the above", isCorrect: false },
      ],
    },

    {
      questionsText: "A Personal goal is?",
      answerOptions: [
        { answerText: "Purpose", isCorrect: false },
        { answerText: "Guidance", isCorrect: false },
        {
          answerText: "Scoring in soccer....Goooooooaaaalllll",
          isCorrect: false,
        },
        {
          answerText:
            "An idea of the future or desired outcome you envision, plan and commit to achieve",
          isCorrect: true,
        },
      ],
    },

    {
      questionsText: "Self-awareness is the knowledge of?",
      answerOptions: [
        { answerText: "Your thoughts", isCorrect: false },
        { answerText: "Your characteristics", isCorrect: false },
        { answerText: "Your feelings", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="question">
      {showScore ? (
        <div className="score_section">
          You have {score} point out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question_text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer_section">
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
