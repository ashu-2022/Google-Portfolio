import React from "react";
import SearchInput from "./SearchInput";
import { ashutosh, googleLogo, settingIcon, menuIcon } from "../../../assets";
const SearchBar = () => {
  return (
    <div className="flex flex-row flex-wrap gap-y-3 md:flex-nowrap items-center sm:gap-3  sm:space-x-4 lg:space-x-12 mt-5 w-full transform">
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noreferrer noopener"
        className="shrink-0"
      >
        <img
          className="w-[92px] object-cover"
          src={googleLogo}
          alt="Google Logo"
        />
      </a>
      <div className="order-last md:order-none xs:min-w-[500px] flex-grow md:shrink max-w-[720px]">
        <SearchInput />
      </div>
      <div className="flex items-center space-x-3 !ml-auto ">
        <img
          className="w-[24px] h-[24px] object-cover rounded-full cursor-pointer"
          src={settingIcon}
          alt="setting icon"
        />
        <img
          className="w-[24px] h-[24px] object-cover rounded-full cursor-pointer"
          src={menuIcon}
          alt="menu icon"
        />
        <img
          className="w-[36px] h-[36px] object-cover rounded-full cursor-pointer"
          id="profile"
          src={ashutosh}
          alt="profile pic"
        />
      </div>
    </div>
  );
};

export default SearchBar;
