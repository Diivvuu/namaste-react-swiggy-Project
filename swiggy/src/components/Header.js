import React, { useState } from "react";
import "../input.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [LoginButton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-center bg-slate-200 relative">
      <div className="logo-container">
        <img src={logo} alt="App logo" className="w-32 mt-3 ml-3 " />
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex gap-5 bg-slate-700 rounded">
          <li className="font-custom hover:scale-150 transition-all p-2 mx-5 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="font-custom hover:scale-150 transition-all p-2 mx-5 text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="font-custom hover:scale-150 transition-all p-2 mx-5 text-white">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-custom hover:scale-150 transition-all p-2 mx-5 text-white">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <div className="flex-col justify-center items-center p-8">
          <button
            className="font-custom hover:scale-150 transition-all "
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
        </div>
      </div>
      <div className="flex justify-between  items-center p-4 font-custom  text-slate-500 text-sm bg">
        OnlineStatus : {onlineStatus ? "✅" : "🚫"}
      </div>
    </div>
  );
};

export default Header;
