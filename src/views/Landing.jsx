import React from "react";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { Introblog } from "../components/Introblog";
import { Footer } from "../components/Footer";
import "../assets/Styles/Landing.css"
import { Categories } from "../components/Categories";
export const Landing = () => {
  return (
    <div className="body">

      <Navbar />
      <hr />
      <Search />
        <Introblog />
        <Categories />
        <Footer />
    
    
    </div>
  );
};
