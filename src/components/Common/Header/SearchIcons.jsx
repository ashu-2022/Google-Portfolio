import React from "react";
import {
  cancelIcon,
  voiceSearchIcon,
  imageSearchIcon,
  searchIcon,
} from "../../../assets";

const SearchIcons = ({ setSearch, searchHandler }) => {
  return (
    <div className="flex space-x-3 h-7">
      <img
        className="cursor-pointer"
        src={cancelIcon}
        alt="Cancel Icon"
        onClick={() => setSearch("")}
      />
      <span className="border-r-2 h-[80%] my-auto"></span>
      <img
        className="cursor-pointer hidden xs:block"
        src={voiceSearchIcon}
        alt="Voice Search Icon"
      />
      <img
        className="cursor-pointer hidden xs:block"
        src={imageSearchIcon}
        alt="Img Search Icon"
      />
      <img
        className="cursor-pointer"
        src={searchIcon}
        alt="Search Icon"
        onClick={searchHandler}
      />
    </div>
  );
};

export default SearchIcons;
