import "./AnswerButton.css";

const AnswerButton = ({
    answer,
    index,
    selectedIndex,
    isCorrect,
    showCorrectAnswer,
    correctAnswer,
    onClick
  }) => (
    <div className="button-wrapper">
      <li
        className={`list-group-item ${
          selectedIndex === index
            ? isCorrect
              ? "correct-answer"
              : "incorrect-answer showCorrectAnswer"
            : ""
        } ${
          showCorrectAnswer && answer === correctAnswer
            ? "highlight-correct-answer"
            : ""
        }`}
        onClick={onClick}
      >
        {answer}
      </li>
    </div>
  );

  export default AnswerButton