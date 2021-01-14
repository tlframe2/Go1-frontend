import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';

/**
 * Displays bar with fields that can be used to filter events based on title and date
 */
const FilterBar = () => {
  const { changeTitleFilter, changeDateFilter } = useContext(EventContext);

  return (
    <div className="filter-container">
      <h1 className="filter-info-text">Filter Events By Title and Date</h1>
      <form>
        <input type="text" placeholder="Title" onChange={changeTitleFilter} />
        <input type="date" placeholder="Date" onChange={changeDateFilter} />
      </form>
    </div>
  );
}

export default FilterBar;