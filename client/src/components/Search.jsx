import React, { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search for Event ..."
        defaultValue=""
        onChange={(event) => {
          setSearch(event);
        }}
      />
      <button
        className="btn btn-secondary searchButton"
        type="button"
        onClick={() => {
          // props.funFilter(search);
          // props.changeView("search");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
