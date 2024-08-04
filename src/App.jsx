import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Who is the CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
    answer: "Elon Musk",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Which element has the chemical symbol O?",
    options: ["Osmium", "Oxygen", "Oganesson", "Oxine"],
    answer: "Oxygen",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: "Diamond",
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: [
      "William Wordsworth",
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "O2", "H2SO4"],
    answer: "H2O",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent Van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
  },
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    const isCorrect = answer === questions[currentQuestionIndex].answer;
    setUserAnswers([
      ...userAnswers,
      {
        answer,
        isCorrect,
        correctAnswer: questions[currentQuestionIndex].answer,
      },
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {showScore ? (
        <Score
          score={score}
          total={questions.length}
          userAnswers={userAnswers}
          onPlayAgain={handlePlayAgain}
        />
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};

export default App;
