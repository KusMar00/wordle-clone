import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";
import Key from "./Key";

const Keyboard = () => {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onDelete,
    onEnter,
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        row1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        row2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        row3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {row1.map((letter) => {
          return (
            <Key
              keyVal={letter}
              isDisabled={disabledLetters.includes(letter)}
            />
          );
        })}
      </div>
      <div className="line2">
        {row2.map((letter) => {
          return (
            <Key
              keyVal={letter}
              isDisabled={disabledLetters.includes(letter)}
            />
          );
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {row3.map((letter) => {
          return (
            <Key
              keyVal={letter}
              isDisabled={disabledLetters.includes(letter)}
            />
          );
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
