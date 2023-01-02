import React, { useState } from "react";
import AnimeList from "./components/AnimeList";
import Header from "./components/Header";
import AddingAnime from "./components/adding/AddingAnime";
import AnimeListData from "./components/AnimeListData";
import Sorting from "./components/sorting/Sorting";
import "./App.css";

function App() {
  const [animes, setAnimes] = useState(AnimeListData);
  const [value, setValue] = useState("");

  const addAnimeHandler = (anime) => {
    setAnimes((prevAnimes) => {
      return [anime, ...prevAnimes];
    });
  };

  const getValueFromChild = (acceptValue) => {
    setValue(acceptValue);
  };

  return (
    <div className="App">
      <Header className="header" />
      <AddingAnime onAddAnime={addAnimeHandler} />
      <Sorting animes={animes} onGetValue={getValueFromChild} />
      <AnimeList animes={animes} valueFromSorting={value} />
    </div>
  );
}

export default App;
