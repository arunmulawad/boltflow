import React, { useState } from "react";

const Design = ({ data, colors }) => {
  const [background, setBackground] = useState(colors[0]);
  const [index, setIndex] = useState(0);

  const handleMinusClick = () => {
    if (index > 0) {
      const prevIndex = index - 1;
      setIndex(prevIndex);
      setBackground(colors[prevIndex]);
    }
  };

  // Handle add button click
  const handlePlusClick = () => {
    if (index < 3) {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setBackground(colors[nextIndex]);
    }
  };

  return (
    <div className="buttons">
      <span className="minus" onClick={handleMinusClick}>
        &minus;
      </span>
      <div style={{ backgroundColor: background }} className="input">
        {data[index]}
      </div>
      <span className="add" onClick={handlePlusClick}>
        +
      </span>
    </div>
  );
};

export default Design;
