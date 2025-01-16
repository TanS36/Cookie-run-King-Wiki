//characterUtils.js
export const rarityOrder = [
  "Common",
  "Rare",
  "Special",
  "Epic",
  "Super epic",
  "Legendary",
  "Dragon",
  "Ancient",
  "Beast",
  "Guest",
];

export const seasons = {
  "2021": { start: new Date("2021-01-01"), end: new Date("2021-12-31") },
  "2022": { start: new Date("2022-01-01"), end: new Date("2022-12-31") },
  "2023": { start: new Date("2023-01-01"), end: new Date("2023-12-31") },
  "2024": { start: new Date("2024-01-01"), end: new Date("2024-12-31") },
  "2025": { start: new Date("2025-01-01"), end: new Date("2025-12-31") },
};

export const filterAndSortCharacters = (characters, options) => {
  const {
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
  } = options;

  const searchWords = searchTerm ? searchTerm.toLowerCase().split(" ").filter(word => word) : [];

  const filteredChars = characters.filter((character) => {
    return searchWords.every(word => {
      const regex = new RegExp(`\\b${word}`, 'i'); 
      return character.title && regex.test(character.title.toLowerCase());
    });
  }).filter((character) =>
    selectedElement ? (character.element && character.element.includes(selectedElement)) : true
  ).filter((character) =>
    selectedClass ? character.class === selectedClass : true
  ).filter((character) =>
    selectedPosition ? character.position === selectedPosition : true
  ).filter((character) =>
    selectedRarity ? character.rarity === selectedRarity : true
  ).filter((character) =>
    showCharactersWithCandy !== null
      ? showCharactersWithCandy
        ? character.candy !== undefined
        : character.candy === undefined
      : true
  ).filter((character) =>
    selectedGame ? (character.game && character.game.includes(selectedGame)) : true
  ).filter((character) =>
    selectedSeason 
      ? character.releaseDate >= selectedSeason.start && character.releaseDate <= selectedSeason.end
      : true
  );

  return filteredChars.sort((a, b) => {
    switch (true) {
      case sortField === "rarity":
        return (
          rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
        ) * (sortOrder === "asc" ? 1 : -1);
      case sortField === "name":
        return (sortOrder === "asc" ? 1 : -1) * (a.title && b.title && a.title.localeCompare(b.title));
      case sortField === "id":
        return (sortOrder === "asc" ? 1 : -1) * (a.id - b.id);
      case sortField === "random":
        return Math.random() - 0.5;  
      default:
        return 0;
    }
  });
};
