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
                iconurl = "yqiuuheo"/>
     
     

        <Category 
        name = "Travel"
        
        iconurl = "zzjjvkam"/>
     
     

        <Category 
        name = "Horror"
        
        iconurl = "dhxiouol"/>
     
     

        <Category 
        name = "Science"
        
        iconurl = "suuelqth"/>
     
     
     

        <Category 
        name = "Life"
        
        iconurl = "suuelqth"/>
     
     
     

        <Category 
        name = "Melancholy"
        
        iconurl = "suuelqth"/>
     
     
     

        <Category 
        name = "Emotions"
        
        iconurl = "suuelqth"/>
     
     
     

     

      
      </div>
    
    
    </div>
  )
}
