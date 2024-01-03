import React from 'react'
import "../assets/Styles/introblog.css"
import img1 from "../assets/Media/green-light.jpg"
import { BlogDisplay } from './BlogDisplay'
export const Introblog = () => {
  return (
    <>

    <div className="container">
      <heading>Featured Blogs</heading>
    <div className="blogs">
    <BlogDisplay
      heading = "The Newest Blog"
      imgurl = {img1}
      time = "5"
    />
    <BlogDisplay
      heading = "The Newest Blog"
      imgurl = {img1}
      time = "7"
    />
    <BlogDisplay
      heading = "The Newest Blog"
      imgurl = {img1}
      time = "5"
    />
    <BlogDisplay
      heading = "The Newest Blog"
      imgurl = {img1}
      time = "5"
    />


</div>
  

    </div>

    </>



  )
}
