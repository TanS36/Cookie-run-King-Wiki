import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../templates/header/header.jsx';
import Footer from '../templates/footer/footer.jsx';
import CharacterDetails from '../atoms/CharacterPageAtoms/CharacterClassDetails.jsx';
import '../organisms/CharacterPage.sass';
import { firestore } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const CharacterPage = ({ user }) => { // Передаем объект пользователя в качестве пропа
  const { characterName } = useParams();
  const [character, setCharacter] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const charactersRef = collection(firestore, "Characters");
        const querySnapshot = await getDocs(charactersRef);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.name === characterName) {
            setCharacter(data);
          }
        });
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [characterName]);

  useEffect(() => {
    // Проверяем, является ли персонаж избранным при загрузке страницы
    const checkIsFavorite = async () => {
      if (!user) return;
      const favoriteDocRef = doc(firestore, "Favorites", user.uid);

      try {
        const docSnapshot = await getDocs(favoriteDocRef);
        if (docSnapshot.exists()) {
          // Если документ существует, получаем его данные
          const favoritesData = docSnapshot.data();
          // Проверяем, есть ли текущий персонаж в избранных
          const isCharacterFavorite = favoritesData.characters.includes(character.id);
          setIsFavorite(isCharacterFavorite);
        }
      } catch (error) {
        console.error("Error checking favorite:", error);
      }
    };

    checkIsFavorite();
  }, [character, user]);

  const toggleFavorite = async () => {
    if (!user) return;
    const favoriteDocRef = doc(firestore, "Favorites", user.uid);

    try {
      const docSnapshot = await getDocs(favoriteDocRef);
      if (docSnapshot.exists()) {
        // Если документ существует, получаем его данные
        const favoritesData = docSnapshot.data();
        // Проверяем, есть ли текущий персонаж в избранных
        const isCharacterFavorite = favoritesData.characters.includes(character.id);

        // Обновляем массив избранных персонажей
        if (isCharacterFavorite) {
          // Если персонаж уже избранный, удаляем его из массива
          const updatedFavorites = favoritesData.characters.filter(id => id !== character.id);
          await setDoc(favoriteDocRef, { characters: updatedFavorites });
          setIsFavorite(false);
        } else {
          // Если персонаж не избранный, добавляем его в массив
          const updatedFavorites = [...favoritesData.characters, character.id];
          await setDoc(favoriteDocRef, { characters: updatedFavorites });
          setIsFavorite(true);
        }
      } else {
        // Если документ не существует, создаем новый документ с массивом избранных персонажей
        await setDoc(favoriteDocRef, { characters: [character.id] });
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="character-page" style={{ backgroundImage: `url(${character.bg})` }}>
        <h1>{character.title}</h1>
        <img className="character-art" src={character.ga} alt={character.name} />
      </div>
      <div className="content">
        <CharacterDetails character={character} />
        <button className="favorite_button" onClick={toggleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CharacterPage;
