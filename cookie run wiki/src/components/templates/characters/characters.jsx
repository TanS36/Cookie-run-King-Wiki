import React, { useState, useEffect } from "react";
import "./character.sass"; 
import characters from "./Data_ch";
import CharacterList from "./characterList.jsx";

const Character = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedRarity, setSelectedRarity] = useState(null);
  const [sortField, setSortField] = useState("rarity");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const rarityOrder = [
      "Common",
      "Rare",
      "Special",
      "Epic",
      "Super_epic",
      "Legendary",
      "Dragon",
      "Ancient",
      "Guest",
    ];
  
    const filteredChars = characters
      .filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((character) =>
        selectedElement ? character.element === selectedElement : true
      )
      .filter((character) =>
        selectedClass ? character.class === selectedClass : true
      )
      .filter((character) =>
        selectedPosition ? character.position === selectedPosition : true
      )
      .filter((character) =>
        selectedRarity ? character.rarity === selectedRarity : true
      )
      .sort((a, b) => {
        if (sortField === "rarity") {
          return (
            rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
          ) * (sortOrder === "asc" ? 1 : -1);
        } else if (sortField === "name") {
          return (sortOrder === "asc" ? 1 : -1) * a.name.localeCompare(b.name);
        } else if (sortField === "id") {
          return (sortOrder === "asc" ? 1 : -1) * (a.id - b.id);
        }
        return 0;
      });
  
    setFilteredCharacters(filteredChars);
  }, [sortField, sortOrder, searchTerm, selectedElement, selectedClass, selectedPosition, selectedRarity]);
  

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleElementChange = (element) => {
    setSelectedElement(element);
  };

  const handleClassChange = (characterClass) => {
    setSelectedClass(characterClass);
  };

  const handlePositionChange = (position) => {
    setSelectedPosition(position);
  };

  const handleRarityChange = (rarity) => {
    setSelectedRarity(rarity);
  };

  const handleSortOrderChange = (field) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    setSortField(field);
  };

  const resetFilters = () => {
    setSelectedElement(null);
    setSelectedClass(null);
    setSelectedPosition(null);
    setSelectedRarity(null);
    setSortField("rarity");
    setSortOrder("asc");
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="content">
      <div className="Sort_head" onClick={toggleFilters}>
        <img className="Sort_Icon" src="https://i.postimg.cc/nhCC4BCb/Sort-Icon.png" alt="Filter" />
      </div>

      {showFilters && (
        <div className="sort" id="myDIV">
          <div className="BlockS Search">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchTermChange}
              placeholder="Поиск по имени"
            />
          </div>
          <div className="BlockS">
            <div>
              <label>Элемент:</label>
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
            <div>
              <label>Класс:</label>
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
            <div>
              <label>Позиция:</label>
              <select value={selectedPosition || ""} onChange={(e) => handlePositionChange(e.target.value || null)}>
                <option value="">All</option>
                <option value="Front">Front</option>
                <option value="Middle">Middle</option>
                <option value="Rear">Rear</option>
              </select>
            </div>
            <div>
              <label>Редкость:</label>
              <select value={selectedRarity || ""} onChange={(e) => handleRarityChange(e.target.value || null)}>
                <option value="">All</option>
                <option value="Common">Common</option>
                <option value="Rare">Rare</option>
                <option value="Special">Special</option>
                <option value="Epic">Epic</option>
                <option value="Super_epic">Super epic</option>
                <option value="Legendary">Legendary</option>
                <option value="Dragon">Dragon</option>
                <option value="Ancient">Ancient</option>
                <option value="Guest">Guest</option>
              </select>
            </div>
          </div>
          <div className="BlockS">
            <button onClick={() => handleSortOrderChange("name")}>по алфавиту</button>
            <button onClick={() => handleSortOrderChange("id")}>по дате выхода</button>
            <button onClick={resetFilters}>Сбросить фильтры</button>
          </div>
        </div>
      )}

      <CharacterList characters={filteredCharacters} />
    </div>
  );
};

export default Character;