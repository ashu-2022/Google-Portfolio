import React, { useState } from "react";
import SearchIcons from "./SearchIcons";

const SearchInput = () => {
  const [search, setSearch] = useState("Ashutosh Pandit");
  const searchChangeHandler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="searchInput-container">
      <div className="form-group searchInput flex justify-between items-center">
        <input
          type="text"
          value={search}
          name="seach"
          className="form-control flex-1"
          onChange={searchChangeHandler}
        />
        <SearchIcons />
      </div>
    </div>
  );
};

export default SearchInput;
