import React from 'react'
import "../assets/Styles/introblog.css"
import img1 from "../assets/Media/green-light.jpg"
import { BlogDisplay } from './BlogDisplay'
export const Introblog = () => {
  return (
    <>

{/* script for random images */}


    <div className="container">
      <heading>Featured Blogs</heading>
    <div className="blogs">
    <BlogDisplay
      heading = "The Newest Blog"
      imgurl = "https://picsum.photos/400/600.jpg"
      time = "5"
    />
    <BlogDisplay
      heading = "The Newest Blog"
      imgurl = "https://picsum.photos/800/400.jpg"
      time = "7"
    />
    <BlogDisplay
      heading = "The Newest Blog"
      imgurl = "https://picsum.photos/1200/900.jpg"
      time = "5"
    />
    <BlogDisplay
      heading = "The Newest Blog"
      imgurl = "https://picsum.photos/400.jpg"
      time = "5"
    />


</div>
  

    </div>

    </>



  )
}
