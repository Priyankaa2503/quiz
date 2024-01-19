import React from "react";

function OverviewPanel({ questions, currentIndex, onQuestionSelect }) {
  return (
    <div className="flex flex-col justify-evenly items-center  p-4 ">
      {questions.map((question, index) => (
        <div
          key={index}
          onClick={() => onQuestionSelect(index)}
          className={`p-3 text-white cursor-pointer flex items-center justify-center h-10 w-10 rounded-full  border-[#FCC822] border ${
            !question.attempted && !question.visited && index === currentIndex ? "font-extrabold bg-white bg-opacity-20 " : ""
          } ${question.attempted ? "bg-green-400" : "bg-transparent"} ${ !question.attempted &&
            question.visited && "bg-yellow-400"
          }`}
        >
          <span>{index + 1}</span>
        </div>
      ))}
    </div>
  );
}

export default OverviewPanel;
