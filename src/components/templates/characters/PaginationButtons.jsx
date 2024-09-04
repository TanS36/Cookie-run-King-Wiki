// PaginationButtons.jsx
import React from "react";
import styles from './character.module.sass';

const PaginationButtons = ({ pageNumber, setPageNumber, charactersPerPage, totalCharacters, filteredCharacters }) => {
  const totalPages = Math.ceil(totalCharacters / charactersPerPage);

  const loadNextPage = () => {
    if (pageNumber < totalPages) {
    setPageNumber(pageNumber + 1);
    }
  };

  const loadPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  if (totalPages <= 1 || filteredCharacters.length === 0) {
    return null; 
  }

  return (
    <div className={styles.paginationButtons}>
      <button onClick={loadPreviousPage} disabled={pageNumber === 1}>Previous</button>
      <span>{pageNumber}</span>
      <button onClick={loadNextPage} disabled={pageNumber === totalPages}>Next</button>
    </div>
  );
};

export default PaginationButtons;