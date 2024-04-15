//characters.jsx
import React, { useState, useEffect } from "react";
import styles from './character.module.sass';
import CharacterList from "./characterList";
import { filterAndSortCharacters, rarityOrder } from "../../atoms/characterUtils";
import { RingLoader } from "react-spinners";
import { firestore } from "../../../../firebase";
import { collection, getDocs} from "firebase/firestore"; 
import { useAuthState } from 'react-firebase-hooks/auth'; 
import {auth} from '../../../../firebase.js'

const Character = () => {
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedRarity, setSelectedRarity] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [sortField, setSortField] = useState("rarity");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCharactersWithCandy, setShowCharactersWithCandy] = useState(null);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(24);
  const [showAllCharacters, setShowAllCharacters] = useState(false);
  const [showAllButtonVisible, setShowAllButtonVisible] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [user, loading2, error] = useAuthState(auth);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const charactersRef = await getDocs(collection(firestore, "Characters"));
    
      const charactersData = charactersRef.docs.map(doc => {
        const data = doc.data();
        const releaseDate = data.releaseDate ? data.releaseDate.toDate() : null; 
        return {
          id: doc.id,
          ...data,
          releaseDate: releaseDate
        };
      });
    
      const options = {
        searchTerm,
        selectedElement,
        selectedClass,
        selectedPosition,
        selectedRarity,
        showCharactersWithCandy,
        sortField,
        sortOrder,
        selectedGame,
        selectedSeason
      };
      console.log("User:", user); 

      const sortedChars = filterAndSortCharacters(charactersData, options);
      
      setCharacters(sortedChars); 
      
      if (showAllCharacters) {
        setFilteredCharacters(sortedChars);
        setCharactersPerPage(sortedChars.length);
      } else {
        setFilteredCharacters(sortedChars.slice((pageNumber - 1) * charactersPerPage, pageNumber * charactersPerPage));
      }
      
      setLoading(false);
    };

    fetchData();
  }, [sortField, sortOrder, searchTerm, selectedElement, selectedClass, selectedPosition, selectedRarity, selectedGame,
    selectedSeason, showCharactersWithCandy, pageNumber, charactersPerPage, showAllCharacters]);
  
  const loadNextPage = () => {
    if (!showAllCharacters) {
      setPageNumber(pageNumber + 1);
    }
  };
    
  const loadPreviousPage = () => {
    if (!showAllCharacters && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const charactersOnCurrentPage = filteredCharacters.length;

  const showAllCharactersHandler = () => {
    if (showAllCharacters) {
      setCharactersPerPage(36);
      setShowAllCharacters(false);
      setShowAllButtonVisible(true);
      setPageNumber(1); 
      setFilteredCharacters(characters.slice(0, charactersPerPage));
    } else {
      setCharactersPerPage(characters.length);
      setShowAllCharacters(true);
      setShowAllButtonVisible(false);
      setPageNumber(1); 
      setFilteredCharacters(characters); 
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Добавляем функцию для обновления статуса избранности персонажа
  const toggleFavorite = async (characterId) => {
    // Получаем документ из коллекции Favorites пользователя
    const favoriteDocRef = doc(firestore, "Favorites", user.uid);

    try {
      const docSnapshot = await getDocs(favoriteDocRef);
      if (docSnapshot.exists()) {
        // Если документ существует, получаем его данные
        const favoritesData = docSnapshot.data();
        // Проверяем, есть ли текущий персонаж в избранных
        const isCharacterFavorite = favoritesData.characters.includes(characterId);

        // Обновляем массив избранных персонажей
        if (isCharacterFavorite) {
          // Если персонаж уже избранный, удаляем его из массива
          const updatedFavorites = favoritesData.characters.filter(id => id !== characterId);
          await setDoc(favoriteDocRef, { characters: updatedFavorites });
        } else {
          // Если персонаж не избранный, добавляем его в массив
          const updatedFavorites = [...favoritesData.characters, characterId];
          await setDoc(favoriteDocRef, { characters: updatedFavorites });
        }
      } else {
        // Если документ не существует, создаем новый документ с массивом избранных персонажей
        await setDoc(favoriteDocRef, { characters: [characterId] });
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  // Функция для проверки, является ли персонаж избранным
  const isCharacterFavorite = (characterId) => {
    if (user) {
      // Если пользователь авторизован, проверяем наличие персонажа в его избранных
      const favoriteCharacters = firestore.collection("Favorites").doc(user.uid).get();
      return favoriteCharacters.then(doc => {
        if (doc.exists) {
          return doc.data().characters.includes(characterId);
        } else {
          return false;
        }
      }).catch(error => {
        console.error("Error getting favorite characters:", error);
        return false;
      });
    } else {
      // Если пользователь не авторизован, всегда возвращаем false
      return false;
    }
  };

  const handleElementChange = (element) => {
    setSelectedElement(element);
    setPageNumber(1); 
  };

  const handleClassChange = (characterClass) => {
    setSelectedClass(characterClass);
    setPageNumber(1); 
  };

  const handlePositionChange = (position) => {
    setSelectedPosition(position);
    setPageNumber(1); 
  };

  const handleRarityChange = (rarity) => {
    setSelectedRarity(rarity);
    setPageNumber(1); 
  };

  const handleGameChange = (game) => {
    setSelectedGame(game);
    setPageNumber(1);
  };
  
  const handleSeasonChange = (season) => {
    setSelectedSeason(seasons[season]);
    setPageNumber(1);
  };
  
  
  const seasons = {
    "Gingerbrave": { start: new Date("2021-01-21"), end: new Date("2021-04-07") },
    "Pure Vanilla": { start: new Date("2021-04-08"), end: new Date("2021-06-20") },
    "Sea Fairy": { start: new Date("2021-06-21"), end: new Date("2021-09-01") },
    "Hollyberry": { start: new Date("2021-09-02"), end: new Date("2021-11-17") },
    "Frost Queen": { start: new Date("2021-11-18"), end: new Date("2022-02-23") },
    "Dark Cacao": { start: new Date("2022-02-24"), end: new Date("2022-05-02") },
    "Clotted Cream": { start: new Date("2022-05-03"), end: new Date("2022-09-05") },
    "Black Pearl": { start: new Date("2022-09-06"), end: new Date("2022-11-29") },
    "Sherbet": { start: new Date("2022-11-18"), end: new Date("2023-01-18") },
    "Moonlight": { start: new Date("2023-01-19"), end: new Date("2023-05-17") },
    "Pitaya Dragon": { start: new Date("2023-05-18"), end: new Date("2023-08-08") },
    "Mermaid's Tale": { start: new Date("2023-08-09"), end: new Date("2023-09-25") },
    "Golden Cheese": { start: new Date("2023-09-26"), end: new Date("2024-01-18") },
    "White Lily": { start: new Date("2024-01-19"), end: new Date("2024-03-26") },
    "Cuckoo Town Square": { start: new Date("2024-03-27"), end: new Date("2024-07-18") },
  };
  
  const handleSortOrderChange = (field, sortOrder) => {
    setSortOrder(sortOrder);
    setSortField(field);
    setPageNumber(1); 
  };

  const handleCandyFilterChange = (value) => {
    setShowCharactersWithCandy(value);
    setPageNumber(1); 
  };
  

  const resetFilters = () => {
    setSelectedElement(null);
    setSelectedClass(null);
    setSelectedPosition(null);
    setSelectedRarity(null);
    setSelectedGame(null); 
    setSelectedSeason(null);
    setSortField("rarity");
    setSortOrder("asc");
    setSearchTerm("");
    setShowCharactersWithCandy(null);
    setPageNumber(1); 
  };

  const handleSearchTermChange = (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    setSearchTerm(searchTerm);
    const searchRegex = new RegExp(searchTerm.split(" ").map(word => `(?=.*${word})`).join(""), "i");
    const filteredChars = characters.filter(character =>
      searchRegex.test(character.name.toLowerCase())
    );
    setFilteredCharacters(filteredChars); 
    setPageNumber(1);
  };
  
  return (
    <div className={styles.content}>
      <div className={styles.Sort_head} onClick={toggleFilters}>
        <img className={styles.Sort_Icon} src="https://i.postimg.cc/nhCC4BCb/Sort-Icon.png" alt="Filter" />
      </div>

      {showFilters && (
        <div className={styles.sort} id="myDIV">
          <div className={styles.BlockS + styles.Search}>

            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchTermChange}
              placeholder="Search by name"
            />
          </div>
          <div className={styles.BlockS}>
            <div className={styles.Sort_Block}>
              <label>Element</label>
              <select value={selectedElement || ""} onChange={(e) => handleElementChange(e.target.value || null)}>
                <option value="">All</option>
                <option value="None">None</option>
                <option value="fire">Fire</option>
                <option value="poison">Poison</option>
                <option value="light">Light</option>
                <option value="water">Water</option>
                <option value="earth">Earth</option>
                <option value="ice">Ice</option>
              </select>
            </div>
            <div className={styles.Sort_Block}>
              <label>Class</label>
              <select value={selectedClass || ""} onChange={(e) => handleClassChange(e.target.value || null)}>
                <option value="">All</option>
                <option value="Ambush">Ambush</option>
                <option value="Bomber">Bomber</option>
                <option value="BTS">BTS</option>
                <option value="Charge">Charge</option>
                <option value="Defense">Defense</option>
                <option value="Healing">Healing</option>
                <option value="Magic">Magic</option>
                <option value="Ranged">Ranged</option>
                <option value="Support">Support</option>
              </select>
            </div>
            <div className={styles.Sort_Block}>
              <label>Position</label>
              <select value={selectedPosition || ""} onChange={(e) => handlePositionChange(e.target.value || null)}>
                <option value="">All</option>
                <option value="Front">Front</option>
                <option value="Middle">Middle</option>
                <option value="Rear">Rear</option>
              </select>
            </div>
            <div className={styles.Sort_Block}>
              <label>Rarity</label>
              <select value={selectedRarity || ""} onChange={(e) => handleRarityChange(e.target.value || null)}>
                <option value="">All</option>
                <option value="Common">Common</option>
                <option value="Rare">Rare</option>
                <option value="Epic">Epic</option>
                <option value="Super epic">Super epic</option>
                <option value="Legendary">Legendary</option>
                <option value="Dragon">Dragon</option>
                <option value="Ancient">Ancient</option>
                <option value="Special">Special</option>
                <option value="Guest">Guest</option>
              </select>
            </div>
            <div className={styles.Sort_Block}>
              <label>Game</label>
              <select value={selectedGame || ""} onChange={(e) => handleGameChange(e.target.value || null)}>
                <option value="">All</option>
                <option value="Ovenbreak">Ovenbreak</option>
                <option value="Kingdom">Kingdom</option>
                <option value="Collab">Collab</option>
              </select>
            </div>
            <div className={styles.Sort_Block}>
              <label>Season</label>
              <select value={selectedSeason ? Object.keys(seasons).find(key => seasons[key] === selectedSeason) : ""} onChange={(e) => handleSeasonChange(e.target.value)}>
                <option value="">All</option>
                {Object.keys(seasons).map(season => (
                  <option key={season} value={season}>{season}</option>
                ))}
              </select>
            </div>
            <div className={styles.Sort_Block}>
              <label>Sorting</label>
              <select value={`${sortField}-${sortOrder}`} onChange={(e) => {const [field, order] = e.target.value.split("-"); handleSortOrderChange(field, order); }}>
                <option value="rarity-asc" defaultValue>By default</option>
                <option value="name-asc">A-Z</option>
                <option value="name-desc">Z-A</option>
                <option value="id-asc">Release asc</option>
                <option value="id-desc">Release desc</option>
              </select>
            </div>
            <div className={styles.Sort_Block}>
              <label>Magic candy</label>
              <select
                value={
                  showCharactersWithCandy
                    ? "with-candy"
                    : showCharactersWithCandy === false
                    ? "without-candy"
                    : "all"
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "with-candy") {
                    handleCandyFilterChange(true);
                  } else if (value === "without-candy") {
                    handleCandyFilterChange(false);
                  } else {
                    if (value === "all") {
                      handleCandyFilterChange(null);
                    }
                  }
                }}
              >
                <option value="all" defaultValue>All</option>
                <option value="with-candy">With Candy</option>
                <option value="without-candy">Without Candy</option>
              </select>
            </div>
          </div>
          <div className={styles.BlockS}>
            <button onClick={resetFilters}>Reset</button>
            {showAllButtonVisible ? (
              <button onClick={showAllCharactersHandler}>Show All</button>
            ) : (
              <button onClick={showAllCharactersHandler}>Show Pages</button>
            )}
          </div>
        </div>
      )}

      <div className={styles.Searchbuttons}>
      {!showAllCharacters && pageNumber > 1 && !loading && <button onClick={loadPreviousPage}>Prev Page</button>}
      {charactersOnCurrentPage === charactersPerPage && !showAllCharacters && !loading && (<button onClick={loadNextPage}>Next Page</button>)}
      </div>
      {loading ? (
        <div className="loader-container">
          <RingLoader color={"#36D7B7"} loading={loading} size={300} />
        </div>
      ) : (
        <div className={styles.characters}>
          {filteredCharacters.length > 0 ? (
            <CharacterList 
              characters={filteredCharacters} 
              toggleFavorite={toggleFavorite} 
              isFavorite={isCharacterFavorite} 
            />
          ) : (
            <div className={styles.no_results_container}>
              <p>Результат не найден</p>
              <img src="https://cdn.comic.studio/images/cookierun/characters/b933f9e7b3af34fcd881b9191612886b/exhausted.png" alt="Exhausted"/>
            </div>
          )}
        </div>
      )}
      <div className={styles.Searchbuttons}>
      {!showAllCharacters && pageNumber > 1 && !loading && <button onClick={loadPreviousPage}>Prev Page</button>}
      {charactersOnCurrentPage === charactersPerPage && !showAllCharacters &&!loading && (<button onClick={loadNextPage}>Next Page</button>)}
      </div>
    </div>
  );
};

export default Character;