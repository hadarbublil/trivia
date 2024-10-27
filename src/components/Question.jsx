import React, { useState } from "react";
import './Question.css';

function Question({question, answers, handleSelectedItem}) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h2>{question}</h2>
      {answers.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {answers.map((ans, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              handleSelectedItem(ans);
            }}
          >
            {ans}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Question
