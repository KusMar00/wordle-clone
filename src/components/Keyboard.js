import React from "react";
import Key from "./Key";

const Keyboard = () => {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="Keyboard">
      <div className="Row1">
        {row1.map((letter) => {
          return <Key keyVal={letter} />;
        })}
      </div>
      <div className="Row2">
        {row2.map((letter) => {
          return <Key keyVal={letter} />;
        })}
      </div>
      <div className="Row3">
        <Key keyVal={"ENTER"} bigKey />
        {row3.map((letter) => {
          return <Key keyVal={letter} />;
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
