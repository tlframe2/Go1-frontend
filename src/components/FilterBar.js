import React from 'react';

/**
 * Displays bar with fields that can be used to filter events based on title and date
 * @param {func} changeTitle - updates filter for title
 * @param {func} changeDate - updates filter for date
 */
const FilterBar = ({ changeTitle, changeDate }) => {
  return (
    <div className="filter-container">
      <h1 className="filter-info-text">Filter Events By Title and Date</h1>
      <form>
        <input type="text" placeholder="Title" onChange={changeTitle} />
        <input type="date" placeholder="Date" onChange={changeDate} />
      </form>
    </div>
  );
}

export default FilterBar;