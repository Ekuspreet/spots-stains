import React from 'react'
import "../assets/Styles/introblog.css"
export const BlogDisplay = ({ heading , imgurl, time }) => {
  return (
    <>

    <div className="blogdisplay">
        
        <img src={imgurl} alt="" />
        {heading}
        
    <div className="time">
        TimeToRead : {time}
    </div>
    </div>

    </>




  )
}
