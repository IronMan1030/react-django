import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { HOMEPAGE, MAIN_PAGE, VENDOR_LOGIN, VENDOR_REGISTER } from "../../../../settings/constants";
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
              <li>
                <NavLink to={MAIN_PAGE} activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <a href="https://premafirm.netlify.app/" target="_blank" rel="noreferrer">
                  Become a Seller
                </a>
              </li>
              {/* 
              <li className="drop-down">
                <NavLink to="/" activeStyle={{ color: "red" }}>
                  FAQ <FontAwesomeIcon icon={faAngleDown} />
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/">Q & A</NavLink>
                  </li>
                </ul>
              </li>
               */}
              <li>
                <NavLink to={VENDOR_LOGIN} activeClassName="active">
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink to={VENDOR_REGISTER} activeClassName="active">
                  JOIN
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
