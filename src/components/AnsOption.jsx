import React, { useState } from "react";

function AnsOption(question, answers, handleSelectedItem) {
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
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AnsOption
