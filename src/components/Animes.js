import "./Animes.css";

const Animes = (props) => {
  return (
    <div className="animes-container">
      <div className="column-1">
        <h1>{props.name}</h1>
      </div>
      <div className="column-2">
        <p>{props.score}</p>
      </div>
    </div>
  );
};

export default Animes;
