import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Game from "../components/Game";
import OverviewPanel from "./Overview";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId); 
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      navigate("/results");
    }
  }, [timeLeft]);

  useEffect(() => {
    loadQuestions();
  }, []);
const handleQuestionSelect = (index) => {
  setQuestions(
    questions.map((question, i) => {
      if (i === index) {
        console.log(question);
        return { ...question, visited: true }
      } else {
        return question;
      }
    })
  );
  console.log(questions);
  setCurrentIndex(index);
};


  const loadQuestions = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=15");
      const data = response.data;
  
     setQuestions(data.results);
     const questions = data.results.map((question) => ({
       ...question,
       answers: [question.correct_answer, ...question.incorrect_answers].sort(
         () => Math.random() - 0.5
       ),
       visited: false,
       attempted: false,
     }));
     setQuestions(questions);
     console.log(questions);
    } catch (error) {
      console.log("Error loading questions:", error);
    }
  };

const handleAnswer = (answer) => {
  // Get the correct answer from the current question
  const correct_answer = questions[currentIndex].correct_answer;

  // Check if the answer is correct and update the score if necessary
  if (answer === correct_answer) {
    setScore(score + 1);
  }

  // Set the attempted property of the current question to true
  setQuestions(
    questions.map((question, i) => {
      if (i === currentIndex) {
        return { ...question, attempted: true };
      } else {
        return question;
      }
    })
  );
};
  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
     setQuestions(
       questions.map((question, i) => {
         if (i === currentIndex) {
           console.log(question);
           return { ...question, visited: true };
         } else {
           return question;
         }
       })
     );
   
    
  };

  const handleReturnHome = () => {
    navigate("/");
  };

  return questions.length > 0 ? (
    <div className="h-screen bg-[#313131] w-full flex justify-center items-center">
      {currentIndex >= questions.length ? (
        <div className="text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Game Ends! 🎊
            <br /> Your score is: {score}/15!
          </h1>
          <button
            className="mt-4 px-4 py-2 bg-[#FCC822] text-white font-bold rounded-lg"
            onClick={handleReturnHome}
          >
            Return to Home
          </button>
        </div>
      ) : (
        <div className="flex justify-between w-full h-full relative">
          <div className="absolute flex justify-center bottom-0 right-0  ">
            <div className="text-white flex flex-col  font-bold text-2xl p-20">
              <div className="text-lg">Time left</div>
              <div className="text-5xl">
                {Math.floor(timeLeft / 60)}:
                {timeLeft % 60 < 10 ? "0" : ""}
                {timeLeft % 60}
              </div>
            </div>
          </div>

          <OverviewPanel
            questions={questions}
            currentIndex={currentIndex}
            onQuestionSelect={handleQuestionSelect}
            // onQuestionAttempt={handleQuestionAttempt}
          />
          <Game
            data={questions[currentIndex]}
            showAnswers={questions[currentIndex].attempted}
            handleNextQuestion={handleNextQuestion}
            handleAnswer={handleAnswer}
          />
        </div>
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Loading...</h2>
  );
}

export default Quiz;
