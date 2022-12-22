import React from "react";
import {
  searchLensIcon,
  penIcon,
  tvIcon,
  callIcon,
} from "../../../assets";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
      <div className="menu-bar-group container-fluid">
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
    <div className="menu-bar-item">
      <NavLink to={hrfLink}>
        <img src={imgSrc} alt={title} />
        <span>{title}</span>
      </NavLink>
    </div>
  );
};
