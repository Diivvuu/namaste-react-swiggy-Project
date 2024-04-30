import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [LoginButton, setLoginButton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="App logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li><Link to = "/cart">Cart</Link></li>
          <button
            onClick={() => {
              if (LoginButton === "Login") {
                setLoginButton("Logout");
              } else {
                setLoginButton("Login");
              }
            }}
          >
            {LoginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
