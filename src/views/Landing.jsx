import React from "react";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { Introblog } from "../components/Introblog";
import { Bloglist } from "../components/Bloglist";
import { Footer } from "../components/Footer";
import "../assets/Styles/Landing.css"
export const Landing = () => {
  return (
    <div className="body">

      <Navbar />
      <hr />
      <Search />
        <Introblog />
        <Bloglist />
        <Footer />
    
    
    </div>
  );
};
