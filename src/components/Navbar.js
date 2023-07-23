import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import News from "./News";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav_container">
        <div className="logo">
          <h1>News Of India</h1>
        </div>
        <Router>
          <div className="menu_items">
            <Link to="/category/general">
              <li>General</li>
            </Link>
            <Link to="/category/sports">
              <li>Sports</li>
            </Link>
            <Link to="/category/business">
              <li>Business</li>
            </Link>
            <Link to="/category/technology">
              <li>Technology</li>
            </Link>
            <Link to="/category/entertainment">
              <li>Entertainment</li>
            </Link>
            <Link to="/category/health">
              <li>Health</li>
            </Link>
          </div>
          <Routes>
            <Route path="/category/:category" element={<NewsComponent />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

const NewsComponent = () => {
  const { category } = useParams();

  // Set default category to "general" if no category parameter is provided
  const selectedCategory = category || "general";

  // Fetch data or perform any other actions when the category changes
  useEffect(() => {
    // Your code to fetch news data based on the selected category
    // For example, you can make an API call here to get news data based on the selected category
    // Update the news data in the component's state and display it in the News component
  }, [selectedCategory]);

  return <News category={selectedCategory} />;
};

export default Navbar;
