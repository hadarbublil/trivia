import question_mark from '../images/question_mark.jpg'
import "./WelcomeScreen.css";
const WelcomeScreen = ({ onStart}) => {
    
    return ( 
    <div>
      <h1 id="headline">Welcome to MyTrivia</h1>
      <img className="question-mark" src={question_mark} alt="Question Mark" />
      <h3 className = "start"> Are you ready to start?</h3>
      <button className="btn" id="yes" onClick={onStart}>
        Yes
      </button>
      
    </div>
    )
 };

  export default WelcomeScreen