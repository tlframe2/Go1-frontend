import React from 'react';

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