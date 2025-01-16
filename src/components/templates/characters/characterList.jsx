/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
//CharacterList component
import React from 'react';
import YourComponent from './YourComponent.jsx'; // Make sure this is the correct path to your component
import styles from './YourComponent.module.sass';

const CharacterList = ({ characters, favorites }) => {
  return (
    <ul className={styles.characterList}>
      {characters.map((character) => (
        <li key={character.id} className={styles.characterCard}>
          <YourComponent
            character={character}
            isFavorite={favorites.includes(character.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
