import React from 'react';
import { Link } from 'react-router-dom';
import '.header.module.css';

function Header() {
    return (
        <header>
            <img className="Logo_image" src="../images/logo.png" alt="Изображение 1" />
            <h1 className="title_text">Characters</h1>
            <nav id="navigation">
                <ul>
                  <li><Link to="main.jsx">Главная</Link></li>
                  <li><Link to="Cookies.jsx">Персонажи</Link></li>
                  <li><Link to="History.jsx">История</Link></li>
                  <li><Link to="Gameplay.jsx">Геймплей</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;