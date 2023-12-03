import React, { useState } from "react";
import "./character.css"; // Подключите файл стилей, если необходимо

const characters = [
  {name: "Gingerbrave", img: "../src/assets/Cookie_Card/Cookie_gingerbrave_card.png", rarity: "Common", class: "Charge", position: "Front", element: "None",},
  {name: "Strawberry", img: "../src/assets/Cookie_Card/Cookie_strawberry_card.png", rarity: "Common", class: "Charge", position: "Front", element: "None",},
  {name: "Wizard", img: "../src/assets/Cookie_Card/Cookie_wizard_card.png", rarity: "Common", class: "Magic", position: "Middle", element: "None",},
  {name: "Beet", img: "../src/assets/Cookie_Card/Cookie_beet_card.png", rarity: "Common", class: "Ranged", position: "Rear", element: "None",},
  {name: "Angel", img: "../src/assets/Cookie_Card/Cookie_angel_card.png", rarity: "Common", class: "Healing", position: "Rear", element: "None",},
  {name: "Ninja", img: "../src/assets/Cookie_Card/Cookie_ninja_card.png", rarity: "Common", class: "Ambush", position: "Middle", element: "None",},
  {name: "Muscle", img: "../src/assets/Cookie_Card/Cookie_muscle_card.png", rarity: "Common", class: "Charge", position: "Front", element: "None",},
  {name: "Adventurer", img: "../src/assets/Cookie_Card/Cookie_adventurer_card.png", rarity: "Rare", class: "Charge", position: "Front", element: "None",},
  {name: "Alchemist", img: "../src/assets/Cookie_Card/Cookie_alchemist_card.png", rarity: "Rare", class: "Charge", position: "Front", element: "None",},
  {name: "Avocado", img: "../src/assets/Cookie_Card/Cookie_avocado_card.png", rarity: "Rare", class: "Magic", position: "Middle", element: "None",},
  {name: "Blackberry", img: "../src/assets/Cookie_Card/Cookie_blackberry_card.png", rarity: "Rare", class: "Ranged", position: "Rear", element: "None",},
  {name: "Cherry", img: "../src/assets/Cookie_Card/Cookie_cherry_card.png", rarity: "Rare", class: "Healing", position: "Rear", element: "None",},
  {name: "Clover", img: "../src/assets/Cookie_Card/Cookie_clover_card.png", rarity: "Rare", class: "Ambush", position: "Middle", element: "None",},
  {name: "Custard", img: "../src/assets/Cookie_Card/Cookie_custard_card.png", rarity: "Rare", class: "Charge", position: "Front", element: "None",},
  {name: "Devil", img: "../src/assets/Cookie_Card/Cookie_devil_card.png", rarity: "Rare", class: "Charge", position: "Front", element: "None",},
  {name: "Gumball", img: "../src/assets/Cookie_Card/Cookie_gumball_card.png", rarity: "Rare", class: "Magic", position: "Middle", element: "None",},
  {name: "Knight", img: "../src/assets/Cookie_Card/Cookie_knight_card.png", rarity: "Rare", class: "Ranged", position: "Rear", element: "None",},
  {name: "Onion", img: "../src/assets/Cookie_Card/Cookie_onion_card.png", rarity: "Rare", class: "Healing", position: "Rear", element: "None",},
  {name: "Pancake", img: "../src/assets/Cookie_Card/Cookie_pancake_card.png", rarity: "Rare", class: "Ambush", position: "Middle", element: "None",},
  {name: "Princess", img: "../src/assets/Cookie_Card/Cookie_princess_card.png", rarity: "Rare", class: "Charge", position: "Front", element: "None",},
];

const Character = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="content">
      <div className="Sort_head" onClick={toggleFilters}>
        <img className="Sort_Icon" src="icons8-filter-100.svg" alt="Filter" />
      </div>

      {showFilters && (
        <div className="sort" id="myDIV">
          {/* Ваш код для фильтров */}
        </div>
      )}

      <ul className="characters">
        {characters.map((character, index) => (
          <li className="cookie" key={index}>
            <a href={`/${character.name.toLowerCase().replace(" ", "_")}.jsx`}>
              <img src={character.img} alt={character.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Character;
