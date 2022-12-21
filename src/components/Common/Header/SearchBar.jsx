import React from 'react'
import SearchInput from "./SearchInput";
import { ashutosh, googleLogo, settingIcon, menuIcon } from "../../../assets";
const SearchBar = () => {
  return (

    <div className="header-container">
    <div className="google-logo">
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className="googleLogo" src={googleLogo} alt="Google Logo" />
        </a>
        <SearchInput />
    </div>
    {/* <div className="searchBars">
  
    </div> */}
    <div className="account-setting">
      <div className="menu-item">
        <img src={settingIcon} alt="setting icon" />
      </div>
      <div className="menu-item">
        <img src={menuIcon} alt="setting icon" />
      </div>
      <div className="menu-item">
        <img id="profile" src={ashutosh} alt="setting icon" />
      </div>
    </div>
  </div>
  )
}

export default SearchBar