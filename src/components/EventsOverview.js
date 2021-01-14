import React from 'react';
import FilterBar from './FilterBar';
import EventsList from './EventsList';

/*
  Displays filter bar and list of event previews
*/
const EventsOverview = () => {
  return (
    <div className="overview-container">
      <FilterBar />
      <EventsList />
    </div>
  );
}

export default EventsOverview;