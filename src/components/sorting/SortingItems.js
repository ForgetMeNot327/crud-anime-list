import React from "react";
import "./SortingItems.css";

const SortingItems = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log(event);
    props.onChangeSorting(event.target.innerHTML);
  };

  const getParentNode = () => {
    const connector = document.querySelector(".connector");
    const dropdown = document.getElementById("dropdown");
    // const dropdownItems = document.querySelector(".dropdown__items");
    if (dropdown.checked) {
      connector.style.transform = "scaleY(1)";
      // dropdownItems.style.zIndex = "10";
    } else if (!dropdown.checked) {
      connector.style.transform = "scaleY(0)";
      // dropdownItems.style.zIndex = "-1";
    }
  };

  return (
    <div className="dropdown__container">
      <div className="dropdown" onClick={getParentNode}>
        <div className="connector"></div>

        <input type="checkbox" id="dropdown" />

        <label className="dropdown__face" htmlFor="dropdown">
          <div className="dropdown__text">Sort By</div>

          <div className="dropdown__arrow"></div>
        </label>

        <div className="dropdown__items" value={props.selected}>
          <div className="dropdown__item" onClick={dropdownChangeHandler}>
            Name
          </div>
          <div className="dropdown__item" onClick={dropdownChangeHandler}>
            Score
          </div>
          <div className="dropdown__item" onClick={dropdownChangeHandler}>
            Time
          </div>
        </div>
      </div>

      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </div>
  );
};

export default SortingItems;

// <select value={props.selected} onChange={dropdownChangeHandler}>
//         <option value="time">time</option>
//         <option value="name">name</option>
//         <option value="score">score</option>
//       </select>
