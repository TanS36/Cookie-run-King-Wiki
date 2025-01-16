//characters.jsx
import React, { useState, useEffect } from "react";
import styles from './character.module.sass';
import CharacterList from "./characterList";
import PaginationButtons from "./PaginationButtons";
import { filterAndSortCharacters, rarityOrder, seasons } from "../../atoms/characterUtils.js";
import characterFilterAndSort from "../../atoms/characterFilterAndSort.js";
import { RingLoader } from "react-spinners";
import { firestore } from "../../../../firebase";
import { doc, collection, getDocs, getDoc} from "firebase/firestore"; 
import { useAuthState } from 'react-firebase-hooks/auth'; 
import {auth} from '../../../../firebase.js'

const Character = () => {
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
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
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(18);
  const [showAllCharacters, setShowAllCharacters] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [user, loading2, error] = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
  
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
        selectedSeason,
      };
      const sortedChars = filterAndSortCharacters(charactersData, options);
      
      setCharacters(sortedChars);
      setTotalCharacters(sortedChars.length);
      
      if (showAllCharacters) {
        setFilteredCharacters(sortedChars);
        setCharactersPerPage(sortedChars.length);
      } else {
        setFilteredCharacters(sortedChars.slice((pageNumber - 1) * charactersPerPage, pageNumber * charactersPerPage));
      }

      setLoading(false);
    };
  
    const fetchFavorites = async () => {
      if (user) {
        const favoritesRef = doc(firestore, 'users', user.uid);
        const favoritesSnap = await getDoc(favoritesRef);
        if (favoritesSnap.exists()) {
          const favoritesData = favoritesSnap.data();
          setFavorites(favoritesData.favorites || []);
        }
      }
    };
  
    fetchData();
    fetchFavorites();
  }, [sortField, sortOrder, searchTerm, selectedElement, selectedClass, selectedPosition, selectedRarity, selectedGame,
    selectedSeason, showCharactersWithCandy, charactersPerPage, showAllCharacters, user,  pageNumber]);

  const showAllCharactersHandler = () => {
    if (showAllCharacters) {
      setCharactersPerPage(18);
      setShowAllCharacters(false);
      setPageNumber(1); 
      setFilteredCharacters(characters.slice(0, charactersPerPage));
    } else {
      setCharactersPerPage(characters.length);
      setShowAllCharacters(true);
      setPageNumber(1); 
      setFilteredCharacters(characters); 
    }
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
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
        <img className={styles.Sort_Icon} src="https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FSort-Icon.webp?alt=media&token=97187f82-b5ed-4206-a39c-233943b4f4ac" alt="Filter" />
      </div>

      {showFilters && (
        <div className={styles.sort} id="myDIV">
          <div className={styles.BlockS}>
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
                <option value="electricity">Electricity</option>
                <option value="darkness">Darkness</option>
                <option value="wind">Wind</option>
                <option value="nature">Nature</option>
                <option value="element11">11</option>
                <option value="element12">12</option>
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
                <option value="Beast">Beast</option>
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
                <option value="Global">Global</option>
                <option value="China">China</option>
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
                <option value="random">Random</option>
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
            {showAllCharacters ? (
              <button onClick={showAllCharactersHandler}>Show Pages</button>
            ) : (
              <button onClick={showAllCharactersHandler}>Show All</button>
            )}
          </div>
        </div>
      )}

      <PaginationButtons pageNumber={pageNumber} setPageNumber={setPageNumber} charactersPerPage={charactersPerPage} totalCharacters={totalCharacters} filteredCharacters={filteredCharacters}/>
      {loading ? (
        <div className={styles.loader_container}>
          <RingLoader color={"#36D7B7"} loading={loading} size={350} />
        </div>
      ) : (
        <div className={styles.characters}>
          {filteredCharacters.length > 0 ? (
            <CharacterList 
              characters={filteredCharacters} 
              favorites={favorites}
            />
          ) : (
            <div className={styles.no_results_container}>
              <p>Результат не найден</p>
              <img src="https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FNo-page-image.webp?alt=media&token=0330973d-5cf5-467d-a5ed-3b2733ec766f" alt="Exhausted"/>
            </div>
          )}
        </div>
      )}
      <PaginationButtons pageNumber={pageNumber} setPageNumber={setPageNumber} charactersPerPage={charactersPerPage} totalCharacters={totalCharacters} filteredCharacters={filteredCharacters}/>
    </div>
  );
};

export default Character;