import React from 'react'
import { cancelIcon, voiceSearchIcon, imageSearchIcon,searchIcon } from '../../../assets'

const SearchIcons = () => {
  return (
      <div className='search-icons-group'>
          <img src={cancelIcon} alt="Cancel Icon" />
          <span className='right-side-wall'></span>
          <img src={voiceSearchIcon} alt="Voice Search Icon" />
          <img src={imageSearchIcon} alt="Img Search Icon" />
          <img src={searchIcon} alt="Search Icon" />
    </div>
  )
}

export default SearchIcons