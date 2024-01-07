import React from 'react'
import "../assets/Styles/categories.css"
import { Category } from './Category'
export const Categories = () => {
  return (
    <div className="container">
      <heading>
        Categories
      </heading>
      <div className="categories">


        <Category 
        name = "All Blogs"
        bgcol = "#F4FDFF"
        col = "040403"
        iconurl = "yqiuuheo"/>
     
     

        <Category 
        name = "Travel"
        bgcol = "#efc9af"
        col = "#104c91"
        iconurl = "zzjjvkam"/>
     
     

        <Category 
        name = "Horror"
        bgcol = "#0c0f0a"
        col = "#E80002"
        iconurl = "ribxmuoc"/>
     
     

        <Category 
        name = "Horror"
        bgcol = "black"
        col = "white"
        iconurl = ""/>
     
     

        <Category 
        name = "Horror"
        bgcol = "black"
        col = "white"
        iconurl = ""/>
     
     
      </div>
    
    
    </div>
  )
}
