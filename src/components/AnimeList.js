import Animes from "./Animes";
import "./AnimeList.css";

const AnimeList = (props) => {
  let AnimeListComponent = props.animes.map((anime) => (
    <Animes name={anime.name} score={anime.score} />
  ));

  let i = 0,
    j = 0,
    temp = 0;
  let AnimeListComponentSorted = null;

  // SORTING BY SCORE
  const sortingScoreHandler = (arg) => {
    // bubble sort
    for (i; i < arg.length; i++) {
      for (j = i + 1; j < arg.length; j++) {
        if (arg[j].props.score < arg[i].props.score) {
          temp = arg[i];
          arg[i] = arg[j];
          arg[j] = temp;
        }
      }
      console.log(arg[i].props.score);
      AnimeListComponentSorted = arg.map((e) => (
        <Animes name={e.props.name} score={e.props.score} />
      ));
    }
  };

  if (props.valueFromSorting === "Score") {
    sortingScoreHandler(AnimeListComponent);
    AnimeListComponent = AnimeListComponentSorted;
  }

  // SORTING BY NAME
  const sortingNameHandler = (arg) => {
    arg.sort((a, b) => a.props.name.localeCompare(b.props.name));

    AnimeListComponentSorted = arg.map((e) => (
      <Animes name={e.props.name} score={e.props.score} />
    ));
  };

  if (props.valueFromSorting === "Name") {
    sortingNameHandler(AnimeListComponent);
    AnimeListComponent = AnimeListComponentSorted;
  }

  return (
    <div className="anime-list-container">
      {AnimeListComponent}
      {/* <button onClick={clickHandler}>Click Me</button> */}
    </div>
  );
};

export default AnimeList;
