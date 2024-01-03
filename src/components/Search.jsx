import React from 'react';
import "../assets/Styles/searchbar.css";

export const Search = () => {
  return (
    <div className="searchmenu">
      <div className="heroimg">
        
      </div>
      <div className="searchbar">

        <input type="text" id = "query" name = "query" placeholder='Search for blogs here'/>
        <button>
          <lord-icon
    src="https://cdn.lordicon.com/unukghxb.json"
    trigger="click"
    stroke = "bold"
    colors="primary:#527354,secondary:#527354">
</lord-icon> <text>Search</text></button>
      </div>
    </div>
  )
}
