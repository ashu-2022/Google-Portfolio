import React, { useState } from "react";
import SearchIcons from "./SearchIcons";

const SearchInput = () => {
  const [search, setSearch] = useState("Ashutosh Pandit");
  const searchChangeHandler = (e) => {
    let newSearchTxt = e.target.value;
    setSearch(newSearchTxt);
  };

  const searchHandler = () => {
    if (search.trim() !== "Ashutosh Pandit") console.log("Invalid Search");
  };

  const keyUpHandler = (e) => {
    if (e.key === "Enter") searchHandler();
  };

  return (
    <div className="border-2 border-slate-50 max-w-[720px] flex-1 h-12 rounded-3xl px-3 shadow-md ring-1 ring-transparent">
      <div className="flex-1 max-w-[720px] flex justify-between items-center h-full">
        <input
          type="text"
          value={search}
          name="seach"
          className="form-input flex-1 outline-none ms-2 md:ms-4"
          onChange={(e) => searchChangeHandler(e)}
          onKeyUp={(e) => keyUpHandler(e)}
        />
        <SearchIcons setSearch={setSearch} searchHandler={searchHandler} />
      </div>
    </div>
  );
};

export default SearchInput;
