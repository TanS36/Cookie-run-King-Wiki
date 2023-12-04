import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.module.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      {isNavOpen && (
        <div className="overlay">
          <a href="#!" className="closebtn" onClick={closeNav}>&times;</a>
          <div className="overlay-content">
            <a href="Menu.html"><img className="MainMenu" src="../src/assets/MainLogo.png" alt="image 1" /></a>
            <Link to="Menu.html" onClick={closeNav}>Menu</Link>
            <Link to="main.html" onClick={closeNav}>Characters</Link>
            <Link to="Map.html" onClick={closeNav}>Map</Link>
            <Link to="Profile.html" onClick={closeNav}>Profile</Link>
          </div>
        </div>
      )}

      <span className="Menu" style={{ fontSize: "45px", cursor: "pointer", color: "white"}} onClick={openNav}>☰</span>
      <Link to="Menu.html"><img src="../src/assets/Logo.png" alt="image 1" /></Link>
    </header>
  );
}

export default Header;
