import React from 'react';

const Filter = ({ filterTitle, filterRating, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter" style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search by title"
        value={filterTitle}
        onChange={(e) => onTitleChange(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Rating (min)"
        value={filterRating}
        onChange={(e) => onRatingChange(e.target.value)}
        style={{ width: '100px' }}
      />
    </div>
  );
};

export default Filter;
