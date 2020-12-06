import React, { useState, useEffect } from 'react';
import Event from './Event';
import FilterBar from './FilterBar';
import axios from 'axios';
import dateFormatter from '../utilities/dateFormatter';

const EventsOverview = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios.get('http://localhost:5000/api/events');
      setEvents(data);
      setFilteredEvents(data);
    }

    getEvents();
  }, []);

  useEffect(() => {
    const filteredByTitle = events.filter(event => event.Title.toLowerCase().search(titleFilter.toLowerCase()) !== -1);
    setFilteredEvents(filteredByTitle);
  }, [titleFilter]);


  useEffect(() => {
    const filteredByDate = events.filter(event => event.Time.search(dateFilter) !== -1);
    setFilteredEvents(filteredByDate);
  }, [dateFilter]);

  const changeTitleFilter = e => {
    setTitleFilter(e.target.value);
  }

  const changeDateFilter = e => {
    setDateFilter(e.target.value);
  }

  return (
    <div className="overview-container">
      <FilterBar changeTitle={changeTitleFilter} changeDate={changeDateFilter} />
      {
        events.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          filteredEvents.map((event, index) => (
            <div>
              <Event 
                title={event.Title} 
                time={dateFormatter(event.Time)} 
                image={event.Image} 
                eventLocation={event.Location} 
                seats={event.AvailableSeats} 
                key={index} 
              />
            </div>
          ))
        )
      }
    </div>
  );
}

export default EventsOverview;