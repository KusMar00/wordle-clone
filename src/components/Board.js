import React from "react";
import Letter from "./Letter";

const Board = () => {
  return (
    <div className="Board">
      <div className="Board-row">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="Board-row">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="Board-row">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="Board-row">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="Board-row">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="Board-row">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
    </div>
  );
};

export default Board;
