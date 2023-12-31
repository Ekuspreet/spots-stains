import React from "react";
import "../assets/Styles/components.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/">Blogs</a>
        <a href="/">Projects</a>
        <a href="/">About</a>
      </div>

      <div className="blogo">
        <div className="S">S</div>
        <div className="bname">
          <div className="pots">pots</div>
          <div className="and">&</div>
          <div className="tains">tains</div>
        </div>
      </div>

      <div className="links-picks">
        <a href="/">Music</a>
        <a href="/">Games</a>
        <a href="/">Books</a>
      </div>


      <div className="links-mob">
        <a href="/" id = "first" className="selected">Blogs</a>
        <a href="/">Projects</a>
        <a href="/">About</a>
        
        <a href="/">Music</a>
        <a href="/">Games</a>
        <a href="/">Books</a>
      </div>


    </div>
  );
};
