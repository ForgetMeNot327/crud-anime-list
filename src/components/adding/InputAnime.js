import React, { useState } from "react";
import "./InputAnime.css";

const InputAnime = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredScore, setEnteredScore] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const scoreChangeHandler = (event) => {
    setEnteredScore(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const animeData = {
      name: enteredName,
      score: enteredScore,
    };

    props.onSaveAnimeData(animeData);
    setEnteredName("");
    setEnteredScore("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-container">
        <div className="input-group">
          <input
            type="text"
            id="name"
            className="input"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label className="input-label" htmlFor="name">
            Judul
          </label>
        </div>
        <div className="input-group">
          <input
            type="number"
            id="score"
            className="input"
            min="0"
            step="0.1"
            value={enteredScore}
            onChange={scoreChangeHandler}
          />
          <label className="input-label" htmlFor="score">
            Score
          </label>
        </div>
        <div>
          <button type="submit" className="input-button">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputAnime;
