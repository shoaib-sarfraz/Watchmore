import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./assets/WM.png";
import avatar from "./assets/avatar.png";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <h2 className="log_text"> Watch More</h2>
      <img src={logo} alt="navbar_logo" className="navbar_logo" />

      <img src={avatar} alt="avatar" className="navbar_avatar" />
    </div>
  );
}

export default Navbar;
