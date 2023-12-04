import React, { useState } from "react";
import "./character.css"; 
import characters from "./Data_ch";

const Character = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedRarity, setSelectedRarity] = useState(null);

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

  const resetFilters = () => {
    setSelectedElement(null);
    setSelectedClass(null);
    setSelectedPosition(null);
    setSelectedRarity(null);
  };

  const filteredCharacters = characters
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
    );

  return (
    <div className="content">
      <div className="Sort_head" onClick={toggleFilters}>
        <img className="Sort_Icon" src="../src/assets/Other/Sort_Icon.png" alt="Filter" />
      </div>

      {showFilters && (
        <div className="sort" id="myDIV">
          <div>
            <label>Элемент:</label>
            <select onChange={(e) => handleElementChange(e.target.value)}>
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
            <select onChange={(e) => handleClassChange(e.target.value)}>
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
            <select onChange={(e) => handlePositionChange(e.target.value)}>
              <option value="">All</option>
              <option value="Front">Front</option>
              <option value="Middle">Middle</option>
              <option value="Rear">Rear</option>
              {/* Добавьте остальные позиции */}
            </select>
          </div>
          <div>
            <label>Редкость:</label>
            <select onChange={(e) => handleRarityChange(e.target.value)}>
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
              {/* Добавьте остальные редкости */}
            </select>
          </div>
          <button onClick={resetFilters}>Сбросить фильтры</button>
        </div>
      )}

      <ul className="characters">
        {filteredCharacters.map((character, index) => (
          <li className="cookie" key={index}>
            <a href={`/${character.name.toLowerCase().replace(" ", "_")}`}>
              <img src={character.img} alt={character.name} />
            </a>
          </li>
        ))}
      </ul>

  
    </div>
  );
};

export default Character;