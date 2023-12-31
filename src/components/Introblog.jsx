import React from 'react'
import "../assets/Styles/introblog.css"
import img1 from "../assets/Media/background.jpg"
import { BlogDisplay } from './BlogDisplay'
export const Introblog = () => {
  return (
    <>
    
    <div className="container">
      
    
    <BlogDisplay
      heading = "The Newest Blog"
      imgurl = {img1}
      time = "5"
    />

    </div>

    </>



  )
}
