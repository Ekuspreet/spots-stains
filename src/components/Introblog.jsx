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
      heading = "Navigating the Maze: A Beginner's Guide to Mindful Living"
      imgurl = "https://picsum.photos/400/600.jpg"
      time = "5"
    />
    <BlogDisplay
      heading = "Tech Trends 2024: Unleashing the Future of Innovation"
      imgurl = "https://picsum.photos/800/400.jpg"
      time = "7"
    />
    <BlogDisplay
      heading = "Culinary Adventures: Exploring Global Flavors in Your Kitchen"
      imgurl = "https://picsum.photos/1200/900.jpg"
      time = "2"
    />
    <BlogDisplay
      heading = "Beyond the Pages: Book Club Chronicles and Literary Musings"
      imgurl = "https://picsum.photos/400.jpg"
      time = "12"
    />
    <BlogDisplay
      heading = "Beyond the Pages: Book Club Chronicles and Literary Musings"
      imgurl = "https://picsum.photos/400.jpg"
      time = "12"
    />
    <BlogDisplay
      heading = "Beyond the Pages: Book Club Chronicles and Literary Musings"
      imgurl = "https://picsum.photos/400.jpg"
      time = "12"
    />


</div>
  

    </div>

    </>



  )
}
