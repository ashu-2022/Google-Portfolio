import React from "react";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="w-[95%] mx-auto border-b-[0.5px] border-b-gray-200">
      <SearchBar />
      <MenuBar />
    </div>
  );
};

export default Header;
