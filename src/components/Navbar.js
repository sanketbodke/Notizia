import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, createContext } from "react";
import News from "./News";
import LoadingAnimation from './LoadingAnimation'

export const AppContext = createContext();

const Navbar = () => {
  const [category, setCategory] = useState("general");

  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    console.log(category);
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <h1>News Of India</h1>
        </div>
        <div className="search">
          <input type="text" name="search" id="search" />
        </div>
        <div className="menu_items">
          <ul>
            <li onClick={() => handleCategory("general")}>General</li>
            <li onClick={() => handleCategory("sports")}>Sports</li>
            <li onClick={() => handleCategory("business")}>Business</li>
            <li onClick={() => handleCategory("entertainment")}>
              Entertainment
            </li>
          </ul>
        </div>
      </nav>
      <News category={category}/>
    </div>
  );
};

export default Navbar;
