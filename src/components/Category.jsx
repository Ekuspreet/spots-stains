import React from "react";
import "../assets/Styles/categories.css";
export const Category = ({ name, bgcol, col, iconurl }) => {

    const style = {
        backgroundColor : bgcol,
        color : col

    }
  return (
    // <div>Category</div>
    <div className="category" style = {style}>
      <lord-icon
        src={"https://cdn.lordicon.com/"+iconurl+".json"}
        trigger="hover"
        colors={"primary:" + col }
        stroke = "bold"
      ></lord-icon>
      <div className="categoryname">
        {name}
      </div>

    </div>
  );
};
