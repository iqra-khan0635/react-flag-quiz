import React, { useState } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import QuestionOption from "./components/QuestionOption";
import QuizResult from "./components/QuizResult";
import QuestionFeedback from "./components/QuestionFeeback";
import questionList from "./data/data";

function App() {
  const totalQuestion = questionList.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [questionResult, setQuestionResult] = useState(false);
  const [questionAttempted, setQuestionAttempted] = useState(false);
  const [quizResult, setQuizResult] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const checkAnswer = (selectedOption, currentAnswers) => {
    let qestionResult = false;
    setQuestionAttempted(true);
    if (currentAnswers === selectedOption) {
      quizResult.correctAnswers++;
      qestionResult = true;
    } else quizResult.wrongAnswers++;

    setTimeout(() => {
      setQuestionAttempted(false);

      if (currentQuestion === totalQuestion - 1) {
        setQuizEnd(true);
      }
      setCurrentQuestion(currentQuestion + 1);
    }, 1500);
    setQuizResult(quizResult);
    setQuestionResult(qestionResult);
  };

  const tryAgain = () => {
    setQuizEnd(false);
    setCurrentQuestion(0);
    setQuizResult({
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };
  return (
    <>
      <div className="d-flex flex-column min-vh-100 min-vw-100">
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          <div className="shadow-sm p-3 mb-5 bg-light rounded w-50 text-light">
            {quizEnd ? (
              <QuizResult
                totalQuestion={totalQuestion}
                correctAnswers={quizResult.correctAnswers}
                wrongAnswers={quizResult.wrongAnswers}
                onClick={tryAgain}
              />
            ) : (
              <>
                <Header
                  title="Flag Quiz"
                  currentQuestion={currentQuestion + 1}
                  totalQuestion={totalQuestion}
                />
                <Question
                  questionNumber={currentQuestion + 1}
                  questionDescription={questionList[currentQuestion].question}
                  questionImage={questionList[currentQuestion].image}
                  questionOptions={questionList[currentQuestion].options}
                />
                <QuestionOption
                  options={questionList[currentQuestion].options}
                  currentAnswers={questionList[currentQuestion].correctAnswer}
                  questionAttempted={questionAttempted}
                  onClick={checkAnswer}
                />
                {questionAttempted ? (
                  <QuestionFeedback result={questionResult} />
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
