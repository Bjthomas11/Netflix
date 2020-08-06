import React, { useState, useEffect } from "react";
import logo from "../../img/netflix-logo.png";
import avatar from "../../img/avatar.jpg";

import "./Navbar.scss";

const Navbar = () => {
  const [show, setHandleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav-container ${show && "nav-black"}`}>
      <img className="nav-logo" src={logo} alt="Netflix Logo" />
      <img src={avatar} alt="Netflix Avatar" className="nav-avatar" />
    </nav>
  );
};

export default Navbar;
