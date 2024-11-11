import React from "react";

import "./Categories.css";

const Categories = ({handleChosenCategory}) => {
    const categoryMapping = {
        "General Knowledge": 9,
        "Science": 18,
        "Geography": 22,
        "Entertainment: Film": 11,
        "Entertainment: Music": 12,
        "Entertainment: Books": 10,
        "Entertainment: Theatre": 13,
        "Science: Computers": 18,
        "Science: Gadgets": 30,
        "Science: Nature": 17,
        "Science: Astronomy": 19,
        "History": 23,
        "Art": 25,
        "Animals": 27,
        "Vehicles": 28,
        "Celebrities": 26,
        "Mythology": 20,
        "Sports: General": 21,
        "Sports: Cricket": 29,
      };

      const categoryNames = Object.keys(categoryMapping);

  return (
    <div className="categories-container">
      <h2>Please choose questions category</h2>
      <ul className="categories-button-wrapper">
      {categoryNames.map((category, index) => (
        
        <li className="categories-list-item" key={index}>
            <button className="categories-buttons" onClick={() => handleChosenCategory(categoryMapping[category])}>
                {category}
            </button>
            
        </li>   
      ))
        }
     </ul>
    </div>
  );
};

export default Categories;
