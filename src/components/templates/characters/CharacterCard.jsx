// CharacterCard.jsx
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ui/CharacterCard.module.sass';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase.js';

const CharacterCard = ({ character, isFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [user, loading] = useAuthState(auth);

  return (
    <div
      className={`${styles.image_container} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {user && !loading && (
        <div className={`${styles.star_icon} ${isFavorite ? styles.favorite : ''}`} />
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

export default CharacterCard;
