import React from "react";
import "../assets/Styles/introblog.css";
export const BlogDisplay = ({ heading, imgurl, time }) => {
  return (
    <div className="Card">
      
      <div className="information">
        <div className="heading">{heading}</div>

        <div className="time"> <lord-icon
    src="https://cdn.lordicon.com/kgdqzapd.json"
    trigger="hover"
    colors="primary:#527354"
    stroke = "bold">
</lord-icon> <div className="timeinfo">{time} Minute Read.</div></div>
      </div>

      <img src={imgurl} alt="" />
       
      
    </div>
  );
};
