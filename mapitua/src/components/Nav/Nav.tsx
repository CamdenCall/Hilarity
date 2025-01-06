"use client"
import React, { useState } from "react";
import "./Nav.scss";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigation">
      <img src="/images/logo.svg" alt="Logo" className="logo" />
      <div className="links desktop-links">
        <a href="/">Home</a>
        <a href="/careers">Careers</a>
        <a href="#contact">Contact</a>
      </div>
      <img
        src="/images/menu.svg"
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
      <div className={`dropdown ${menuOpen ? "open" : ""}`}>
        <div className="links">
          <a href="/">Home</a>
          <a href="/careers">Careers</a>
          <a href="#contact">Contact</a>
        </div>
        <img
          src="/images/close.svg"
          alt="Close"
          className="close-icon"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Navigation;
