// PaginationButtons.jsx
import React from "react";
import styles from './character.module.sass';

const PaginationButtons = ({ pageNumber, setPageNumber, charactersPerPage, totalCharacters }) => {
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

  console.log('totalPages:', totalPages);
  console.log('pageNumber:', pageNumber);
  console.log('totalCharacters:', totalCharacters);
  console.log('charactersPerPage:', charactersPerPage);

  if (totalPages <= 1) {
    return null; // or you can return a message or placeholder
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