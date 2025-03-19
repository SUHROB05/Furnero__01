import React, { useState } from 'react';
import Card from '../Card';
import './cardList.scss';

const CardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [likedCards, setLikedCards] = useState({});
  const cardsPerPage = currentPage === 1 ? 4 : 16;
  const totalCards = 40;

  const handleLike = (id, isLiked) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: isLiked,
    }));
  };

  const loadMoreCards = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const renderCards = () => {
    const cards = [];
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    for (let i = startIndex; i < endIndex && i < totalCards; i++) {
      cards.push(
        <Card key={i} id={i + 1} onLike={handleLike} />
      );
    }

    return cards;
  };

  return (
    <div className="card-list">
      <div className="cards-container">{renderCards()}</div>
      {currentPage * cardsPerPage < totalCards && (
        <button onClick={loadMoreCards}>Load More</button>
      )}
    </div>
  );
};

export default CardList;