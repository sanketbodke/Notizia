import React, { useEffect, useState } from "react";
import home from "../pages/home";
import News from "./News";
import Weather from "../pages/weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "../styles/Navbar.css";


const Navbar = () => {
  const [userInput, handleUserInput] = useState("");
  const [hamburger, setHamburger] = useState(false)

  const handleInput = (event)=>{
    handleUserInput(event.target.value);
  }

  const searchNews = ()=>{
    return <News category={userInput}/>
  }

  useEffect(() => {
    
  }, []);
  
  

  return (
    <div>
        <Router>
          <div className="nav_container">
            <div className="logo">
              <h1>Notizia</h1>
            </div>
            <div className="menu_items">
              <Link to="/general">
                <li>General</li>
              </Link>
              <Link to="/sports">
                <li>Sports</li>
              </Link>
              <Link to="/business">
                <li>Business</li>
              </Link>
              <Link to="/technology">
                <li>Technology</li>
              </Link>
              <Link to="/entertainment">
                <li>Entertainment</li>
              </Link>
              <Link to="/health">
                <li>Health</li>
              </Link>
              <Link to="/Weather">
                <li>Weather</li>
              </Link>
            </div>
            <div className="responsive_menu_items">
              <Link to="/general">
                <li>General</li>
              </Link>
              <Link to="/sports">
                <li>Sports</li>
              </Link>
              <Link to="/business">
                <li>Business</li>
              </Link>
              <Link to="/technology">
                <li>Technology</li>
              </Link>
              <Link to="/entertainment">
                <li>Entertainment</li>
              </Link>
              <Link to="/health">
                <li>Health</li>
              </Link>
              <Link to="/Weather">
                <li>Weather</li>
              </Link>
            </div>
            <div className="search">
              <input type={"text"} placeholder={"type..."} onChange={handleInput}/>
              <button onClick={searchNews}>Search</button>
            </div>
            <div className="hamburger">
            <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          <Routes>
            <Route path="/" Component={home}></Route>
            <Route path="/general" element={<News category="general" />} />
            <Route path="/sports" element={<News category="sports" />} />
            <Route path="/business" element={<News category="business" />} />
            <Route path="/technology" element={<News category="technology" />} />
            <Route path="/entertainment" element={<News category="entertainment" />} />
            <Route path="/health" element={<News category="health" />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Router>
    </div>
  );
};

export default Navbar;
