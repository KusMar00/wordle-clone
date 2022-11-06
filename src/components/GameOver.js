import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { currAttempt, gameOver, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.win
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Wordle"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.win && <h3>You guessed in {currAttempt.attempt} attempts</h3>}
    </div>
  );
};

export default GameOver;
