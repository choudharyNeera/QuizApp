import { useContext } from "react";
import { QuizContext } from "../helpers/Context";
import "../App.css";
import Card from "../helpers/Card";

const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);

  return (
    <Card>
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </Card>
  );
};

export default MainMenu;
