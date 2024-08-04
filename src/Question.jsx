import React from "react";

const Question = ({ question, onAnswerOptionClick }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">
      {question.question}
    </h2>
    <div className="flex flex-col space-y-4">
      {question.options.map((option, index) => (
        <button
          key={index}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => onAnswerOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default Question;
