import React from "react";
import { threeDots, searchIcon } from "../../assets";
import { NavLink } from "react-router-dom";

const searchList = [
  {
    id: 1,
    image: searchIcon,
    text_1: "Ashutosh's",
    text_2: "Skills",
    linkHrf: "/skills",
  },
  {
    id: 2,
    image: searchIcon,
    text_1: "Ashutosh's",
    text_2: "Projects",
    linkHrf: "/projects",
  },
  {
    id: 3,
    image: searchIcon,
    text_1: "Ashutosh's",
    text_2: "Contact",
    linkHrf: "/contact",
  },
  {
    id: 4,
    image: searchIcon,
    text_1: "Ashutosh's",
    text_2: "Education",
    linkHrf: "/skills",
  },
];

const RelatedSearch = () => {
  return (
    <div className="mt-8">
      <h4 className="text-xl sm:text-2xl font-semibold">
        Related Searches{" "}
        <img src={threeDots} alt="Triple Dots" className="inline w-6" />
      </h4>
      <hr className="my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {searchList.map((search) => {
          return (
            <SearchItem
              image={search.image}
              text_1={search.text_1}
              text_2={search.text_2}
              linkHrf={search.linkHrf}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedSearch;

export const SearchItem = ({ image, text_1, text_2, linkHrf }) => {
  return (
    <NavLink to={linkHrf}>
      <div className="py-1 text-gray-600 bg-gray-200 rounded-full no-underline hover:bg-[#D8D7DC] hover:text-[#0a58ca] pl-8 xs:w-[70%] sm:w-[90%]">
        <img className="w-6 inline mr-2" src={image} alt="search term" />
        <p className="inline">
          {text_1} <strong>{text_2}</strong>
        </p>
      </div>
    </NavLink>
  );
};
