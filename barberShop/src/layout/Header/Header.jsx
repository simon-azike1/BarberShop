import React, { useState } from "react";
import logo from '../../assets/Images/logo_2.jpg';
import "./header.css";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <p>Barber Shop</p>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <nav className={`slide-menu ${isOpen ? "nav-open" : ""}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Blog</a></li>
          <li className="book"><a href="#">Book Appointment</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
