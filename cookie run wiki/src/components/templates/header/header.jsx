import React from 'react';
import { Link } from 'react-router-dom';
import './header.module.css';

function Header() {
    return (
        <header>
        <div id="myNav" className="overlay">
            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
            <div className="overlay-content">
                <a href="Menu.html"><img className="MainMenu" src="/Assets/MainLogo.png" alt="image 1"></img></a>
                <a href="Menu.html">Menu</a>
                <a href="main.html">Characters</a>
                <a href="Map.html">Map</a>
                <a href="Profile.html">Profile</a>
            </div>
        </div>
        <span className="Menu" onclick="openNav()">&#9776;</span>
        <a href="Menu.html"><img src="/Assets/Logo.png" alt="image 1"></img></a>
        </header>
    );
}

export default Header;