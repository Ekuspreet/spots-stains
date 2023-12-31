import React from 'react';
import heroBg from '../assets/Media/herobg.jpg';
import "../assets/Styles/components.css";

export const Search = () => {
  return (
    <div className="searchmenu">
      <div className="heroimg">
        
      </div>
      <div className="searchbar">

        <input type="text" id = "query" name = "query" placeholder='Search for blogs here'/>
        <button><i class="fa-solid fa-magnifying-glass fa-xs"></i>  <text>Search</text></button>
      </div>
    </div>
  )
}
