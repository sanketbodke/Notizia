import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "../pages/home";
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
  // const [userInput, handleUserInput] = useState("");
  // const navigate = useNavigate();

  const handleInput = (event)=>{
    console.log(event.target.value)
  }

  return (
    <div>
        <Router>
          <div className="nav_container">
            <div className="logo">
              <h1>News Of India</h1>
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
            </div>
            <div className="search">
              <input type={"text"} placeholder={"type..."} onChange={handleInput}/>
              <button>Search</button>
            </div>
          </div>
          <Routes>
            <Route path="/" Component={home}></Route>
          </Routes>
        </Router>
    </div>
  );
};

const NewsComponent = () => {
  return <News category={'general'} />;
};

export default Navbar;
