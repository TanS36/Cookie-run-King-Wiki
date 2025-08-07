import React from 'react';
import CharacterCard from './CharacterCard.jsx'; // путь должен быть правильный
import styles from './ui/CharacterCard.module.sass';

const CharacterList = ({ characters, favorites }) => {
  return (
    <ul className={styles.characterList}>
      {characters.map((character) => (
        <li key={character.id} className={styles.characterCard}>
          <CharacterCard
            character={character}
            isFavorite={favorites.includes(character.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
