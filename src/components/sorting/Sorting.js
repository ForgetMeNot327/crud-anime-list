import React, { useState } from "react";
import SortingItems from "./SortingItems";

const Sorting = (props) => {
  const [sortingAnimes, setSortingAnimes] = useState("time");

  const sortingAnimesHandler = (selectedSortItems) => {
    setSortingAnimes(selectedSortItems);
  };

  props.onGetValue(sortingAnimes);

  return (
    <div>
      <SortingItems
        animes={props.animes}
        selected={sortingAnimes}
        onChangeSorting={sortingAnimesHandler}
      />
    </div>
  );
};

export default Sorting;
