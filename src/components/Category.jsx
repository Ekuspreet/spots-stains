import React from "react";
import "../assets/Styles/categories.css";
export const Category = ({ name, iconurl }) => {

  return (
    // <div>Category</div>
    <div className="category">
      <lord-icon
        src={"https://cdn.lordicon.com/"+iconurl+".json"}
        trigger="hover"
        // colors={"primary:" + col }
        stroke = "bold"
      ></lord-icon>
      <div className="categoryname">
        {name}
      </div>

    </div>
  );
};
