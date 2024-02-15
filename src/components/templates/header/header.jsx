import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.sass';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(styles)

  return (
    <header className={`${styles.header} ${isOpen ? styles.open : ''}`}>
      <div className={styles.headerContainer} >
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <li className={styles.Menu}><Link to="/">Main</Link></li>
        <li className={styles.Menu}><Link to="/">Characters</Link></li>
        <li className={styles.Menu}><Link to="/story">Story</Link></li>
        <li className={styles.Menu}><Link to="/profile">Profile</Link></li> 
        <img src="https://i.postimg.cc/85VcgYwN/Logo.png" alt="image 1"></img>
      </div>
    </header>
  );
};

export default Header;

