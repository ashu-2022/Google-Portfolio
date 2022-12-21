import React from "react";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="header-wrapper">
      <SearchBar />
      <MenuBar />
    </div>
  );
};

export default Header;
