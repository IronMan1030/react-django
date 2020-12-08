import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Header() {
  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    // if (window.scrollY > 100) {
    //   console.log(document.querySelector("#header"));
    //   document.querySelector("#header").classList.add("header-scrolled");
    // } else {
    //   document.querySelector("#header").classList.remove("header-scrolled");
    // }
  };
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="logo float-left">
            <h1 className="text-light">
              <Link to="/">
                <img src="images/logo_dark.png" alt="" className="img-fluid" />
              </Link>
            </h1>
          </div>
          <nav className="nav-menu float-right d-none d-lg-block">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">How It Works</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li className="drop-down">
                <Link to="/">
                  FAQ <FontAwesomeIcon icon={faAngleDown} />
                </Link>
                <ul>
                  <li>
                    <Link to="/">Q & A</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
