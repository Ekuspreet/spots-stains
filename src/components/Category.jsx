import React from "react";
import "../assets/Styles/categories.css";
export const Category = ({ name, iconurl }) => {
const fs = require("fs");


const path = "../Categories/categories.md"
fs.readFile(path, 'utf-8', (err,data) => {
  if(err){
    console.error("Error reading the file", err) 
  }
  console.log(data);
})
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
