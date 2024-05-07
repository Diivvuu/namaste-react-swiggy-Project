import React, { useContext, useState } from "react";
import "../input.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [LoginButton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header-container sticky top-0 z-50 bg-slate-200">
      <div className="flex justify-center items-center">
        <div className="logo-container">
          <img src={logo} alt="App logo" className="w-32 mt-3 ml-3 " />
        </div>
        <ul className="flex justify-center items-center gap-5 bg-slate-700 rounded">
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
            <Link to="/cart">
              Cart (
              {cartItems.length === 1
                ? `${cartItems.length} item`
                : `${cartItems.length} items`}
              )
            </Link>
          </li>
          <div className="flex-col justify-center items-center p-8">
            <button
              className="font-custom text-white hover:scale-150 transition-all "
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
        </ul>
      </div>
      <div className="flex justify-between gap-8 items-center p-4 font-custom text-slate-500 text-sm bg">
        <div>OnlineStatus : {onlineStatus ? "✅" : "🚫"}</div>
      </div>
      <div className="absolute right-5">
        <Link>Ordering for : {loggedInUser}</Link>
      </div>
    </div>
  );
};

export default Header;
