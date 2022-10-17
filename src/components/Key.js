import React from "react";

const Key = ({ keyVal, bigKey, isDisabled }) => {
  return (
    <div className="Key" id={bigKey ? "Big" : isDisabled && "Disabled"}>
      {keyVal}
    </div>
  );
};

export default Key;
