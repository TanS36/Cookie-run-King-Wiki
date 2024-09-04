import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.sass';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../../../firebase.js'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <li className={styles.Menu}><Link to="/">Story</Link></li>
        {!user ? (
        <li className={styles.Menu}><Link to="/login">Login</Link></li>  
        ) : (
        <li className={styles.Menu}><Link to="/profile">Profile</Link></li> 
        )}
        <img src="https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FLogo.webp?alt=media&token=732c8ebf-ef4c-4771-b418-269d63729e0e" alt="image 1"></img>
      </div>
    </header>
  );
};

export default Header;

