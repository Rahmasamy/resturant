import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const[toggle,setToggleMenu]=useState(false)
  return (
  <nav className="app__navbar">
    <div className="navbar__logo">
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home"> Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about"> About</a>
      </li>
      <li className="p__opensans">
        <a href="#menue"> Menue</a>
      </li>
      <li className="p__opensans">
        <a href="#awards"> Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact"> Contact</a>
      </li>
    </ul>
    <div className="navbar__navbar-login">
      <a href="#login" className="p__opensans">
        {" "}
        Login In/Register
      </a>
      <span className="span-ele"> |</span>
      <a href="#signin" className="p__opensans">
        {" "}
        Book Table
      </a>
    </div>
    <div className="navbar__smallscreen-smalldevice">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {setToggleMenu(true)}} />
      {toggle && (
    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
    <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
    <ul className="app__navbar-links-smallscreen">
        <li className="p__opensans">
          <a href="#home"> Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about"> About</a>
        </li>
        <li className="p__opensans">
          <a href="#menue"> Menue</a>
        </li>
        <li className="p__opensans">
          <a href="#awards"> Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact"> Contact</a>
        </li>
      </ul>
    </div>
    )}
    
    </div>
  </nav>
  )
};

export default Navbar;
