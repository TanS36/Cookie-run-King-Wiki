export const rarityOrder = [
  "Common",
  "Rare",
  "Epic",
  "Super epic",
  "Legendary",
  "Dragon",
  "Ancient",
  "Special",
  "Guest",
];

export const seasons = {
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
      const regex = new RegExp(`\\b${word}`, 'i'); // Создаем регулярное выражение для поиска только в начале слова
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
    selectedGame ? character.game === selectedGame : true // Фильтрация по выбранной игре
  ).filter((character) =>
    selectedSeason // Фильтрация по выбранному сезону
      ? character.releaseDate >= selectedSeason.start && character.releaseDate <= selectedSeason.end
      : true
  );

  return filteredChars.sort((a, b) => {
    if (sortField === "rarity") {
      return (
        rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
      ) * (sortOrder === "asc" ? 1 : -1);
    } else if (sortField === "name") {
      return (sortOrder === "asc" ? 1 : -1) * (a.title && b.title && a.title.localeCompare(b.title));
    } else if (sortField === "id") {
      return (sortOrder === "asc" ? 1 : -1) * (a.id - b.id);
    }
    return 0;
  });
};
