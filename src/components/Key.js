import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyVal, bigKey, isDisabled }) => {
  const { gameOver, onSelectLetter, onDelete, onEnter } = useContext(
    AppContext
  );

  const selectLetter = () => {
    if (gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      onClick={selectLetter}
      className="Key"
      id={bigKey ? "Big" : isDisabled && "Disabled"}
    >
      {keyVal}
    </div>
  );
};

export default Key;
