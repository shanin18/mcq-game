import React from "react";

const Score = ({ score, total, userAnswers, onPlayAgain }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center overflow-y-scroll">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Score</h2>
    <p className="text-lg mb-6">
      You scored {score} out of {total}
    </p>
    <div className="text-left">
      {userAnswers.map((answer, index) => (
        <div key={index} className="mb-4">
          <p className="font-semibold text-gray-800">Question {index + 1}:</p>
          <p
            className={`ml-2 ${
              answer.isCorrect ? "text-green-600" : "text-red-600"
            }`}
          >
            Your answer: {answer.answer}
          </p>
          {!answer.isCorrect && (
            <p className="ml-2 text-blue-600">
              Correct answer: {answer.correctAnswer}
            </p>
          )}
        </div>
      ))}
    </div>
    <button
      className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 mt-6"
      onClick={onPlayAgain}
    >
      Play Again
    </button>
  </div>
);

export default Score;
