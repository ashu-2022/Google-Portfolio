import React from "react";
import { searchLensIcon, penIcon, tvIcon, callIcon } from "../../../assets";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="flex mt-3 max-w-5xl ml-5 md:ml-[140px] lg:ml-[180px] space-x-3  xs:space-x-5">
      <MenuBarItem title="About" imgSrc={searchLensIcon} hrfLink="/" />
      <MenuBarItem title="Skills" imgSrc={penIcon} hrfLink="/skills" />
      <MenuBarItem title="Projects" imgSrc={tvIcon} hrfLink="/projects" />
      <MenuBarItem title="Contact" imgSrc={callIcon} hrfLink="/contact" />
    </div>
  );
};

export default MenuBar;

export const MenuBarItem = ({ imgSrc, title, hrfLink }) => {
  return (
    <NavLink
      to={hrfLink}
      className={({ isActive }) =>
        `flex justify-center space-x-1 cursor-pointer no-underline hover:no-underline hover:text-heading-blue pb-3 ${
          isActive ? " border-b-2 border-b-indigo-500" : ""
        }`
      }
    >
      <img className="hidden xs:inline-block" src={imgSrc} alt={title} />
      <span>{title}</span>
    </NavLink>
  );
};
