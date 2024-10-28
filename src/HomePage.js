import React, { useState } from "react";
import "./HomePage.css";
import Question from "./components/Question";
import question_mark from './images/question_mark.jpg';



const HomePage = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const handleSelectedItem = (item) => console.log(item);
  const handleYesClick = () => {
    setShowQuestion(true);
  };
  const answers = ["1", "2", "3", "4"];
  return (
    <div className="container">
      {!showQuestion ? (
        <>
          <h1 id="headline"> MyTrivia</h1>
          <img
            className="question-mark"
            src={question_mark}>
          </img>
          <h3>Are you ready to start? </h3>
          <button className="btn" id="yes" onClick={handleYesClick}>
            Yes
          </button>
        </>
      ) : (
        <Question
          question="first question"
          answers={answers}
          handleSelectedItem={handleSelectedItem}
        ></Question>
      )}
    </div>
  );
};

export default HomePage;
