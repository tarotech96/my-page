import React from "react";
import './Header.css'
import logo from "./../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="app__nav">
      <div className="app__nav-logo">
        <img src={logo} alt="logo" />
        <span>TaroInJapan</span>
      </div>
      <div className="app__nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
