import InputAnime from "./InputAnime";
import "./AddingAnime.css";

const AddingAnime = (props) => {
  const saveAnimeDataHandler = (enteredAnimeData) => {
    const animeData = {
      ...enteredAnimeData,
      id: Math.random().toString(),
    };
    props.onAddAnime(animeData);
  };

  return (
    <div className="container">
      <InputAnime onSaveAnimeData={saveAnimeDataHandler} />
    </div>
  );
};

export default AddingAnime;
