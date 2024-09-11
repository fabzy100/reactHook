import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card" style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <img src={posterURL} alt={title} style={{ width: '150px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  );
};

export default MovieCard;
