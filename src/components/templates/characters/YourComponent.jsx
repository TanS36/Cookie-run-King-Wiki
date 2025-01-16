/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './YourComponent.module.sass';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase.js';

const YourComponent = ({ character, isFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${styles.image_container} ${isHovered ? styles.hovered : ''}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
      {user && !loading && (
        <div className={`${styles.star_icon} ${isFavorite ? styles.favorite : ''}`}></div>
      )}
      <Link to={`/characters/${character.name}`} className={styles.link_style}>
        <img src={character.img} alt={character.name} className={styles.character_image} />
        {character.candy && (
          <img src={character.candy_img_3} alt="Candy" className={styles.candy_image} />
        )}
        {isHovered && (
          <div className={styles.overlay}>
            <div className={styles.text}>{character.title}</div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default YourComponent;