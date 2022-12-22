import React from "react";
import { threeDots, searchIcon } from "../../assets";
import { NavLink } from "react-router-dom";

const searchList = [
    {
        id:1,
        image:searchIcon,
        text_1:"Ashutosh's",
        text_2:"Skills",
        linkHrf:"/skills",
    },
    {
        id:2,
        image:searchIcon,
        text_1:"Ashutosh's",
        text_2:"Projects",
        linkHrf:"/projects",
    },
    {
        id:3,
        image:searchIcon,
        text_1:"Ashutosh's",
        text_2:"Contact",
        linkHrf:"/contact",
    },
    {
        id:4,
        image:searchIcon,
        text_1:"Ashutosh's",
        text_2:"Education",
        linkHrf:"/skills",
    },
]

const RelatedSearch = () => {
  return (
    <div className="projectList mt-5">
      <h4>
        Related Searches <img src={threeDots} alt="Triple Dots" height="20px" />
      </h4>
      <div className="horizontal mb-3"></div>

          <div className="searchItemGroup">
              {
                  searchList.map((search) => {
                      return (
                        <SearchItem
                        image={search.image}
                        text_1={search.text_1}
                        text_2={search.text_2}
                        linkHrf={search.linkHrf}
                    />
                      )
                  })
              }

        </div>
    </div>
  );
};

export default RelatedSearch;

export const SearchItem = ({image, text_1, text_2, linkHrf}) => {
    return (
        <NavLink to={linkHrf}>
                    <div className="customBtn searchItem">
            <img className="searchImg" src={image} alt="search term" width="24px"/>
                <p>{text_1} <strong>{text_2}</strong></p>
        </div>
        </NavLink>

    )
}
