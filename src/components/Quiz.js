import { useState, useContext } from "react";
import { QuizContext } from "../helpers/Context";

import Card from "../helpers/Card";
import { Questions } from "../helpers/QuestionBank";

const Quiz = () => {
  const [currentQues, setCurrentQues] = useState(0);
  const [chosenOption, setChosenOption] = useState("");

  const { score, setScore, setGameState } = useContext(QuizContext);

  const handleSelection = (selectedOption) => {
    setChosenOption(selectedOption);
  }

  const handleNextQuestion = () => {
    if (chosenOption === Questions[currentQues].answer) {
      setScore(score + 1);
    }
    setCurrentQues(currentQues + 1);
  };

  const handleFinishQuiz = () => {
    if (chosenOption === Questions[currentQues].answer) {
      setScore(score + 1);
    }

    setGameState("end")
  }

  return (
    <Card>
      <h1>Quiz</h1>
      <div className="quiz">
        <h3>{Questions[currentQues].prompt}</h3>
        <div className="options">
          <button id="optionA" onClick={() => handleSelection("optionA")}>
            {Questions[currentQues].optionA}
          </button>
          <button id="optionB" onClick={() => handleSelection("optionB")}>
            {Questions[currentQues].optionB}
          </button>
          <button id="optionC" onClick={() => handleSelection("optionC")}>
            {Questions[currentQues].optionC}
          </button>
          <button id="optionD" onClick={() => handleSelection("optionD")}>
            {Questions[currentQues].optionD}
          </button>
        </div>
      </div>
      {currentQues == (Questions.length - 1) ? (
        <button style={{width: "150px"}} onClick={handleFinishQuiz}>Finish</button>
      ) : (
        <button style={{width: "150px", justifyContent: "flex-end"}} onClick={handleNextQuestion}>Next</button>
      )}
    </Card>
  );
};

export default Quiz;
