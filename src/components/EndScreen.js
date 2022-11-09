import { useContext } from "react";

import { QuizContext } from "../helpers/Context";
import "../App.css";
import Card from "../helpers/Card";
import { Questions } from "../helpers/QuestionBank";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const handleRestart = () => {
    setScore(0);
    setGameState("menu")
  }
  let heading = "";
  if(score === Questions.length){
    heading = "Awesome!"
  }else if(score < Questions.length && score > 1) {
    heading = "Nice try!"
  } else{
    heading = "OOPS!"
  }
  
  return ( 
    <Card>
      <div className="endScreen">
        <h2>{heading}</h2>
        <h4>{score} / {Questions.length}</h4>

        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    </Card> );
}
 
export default EndScreen;