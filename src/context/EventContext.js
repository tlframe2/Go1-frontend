import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const EventContext = createContext();

const EventContextProvider = props => {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const baseURL = "https://dry-oasis-04361.herokuapp.com";

  // Fetches events
  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios.get(`${baseURL}/api/events`);
      setAllEvents(data);
      setFilteredEvents(data);
    }

    getEvents();
  }, []);

  // Filters events by title as user types in input
  useEffect(() => {
    const filteredByTitle = allEvents.filter(event => event.Title.toLowerCase().search(titleFilter.toLowerCase()) !== -1);
    setFilteredEvents(filteredByTitle);
  }, [titleFilter]);

  // Filters events by date as user types in input
  useEffect(() => {
    const filteredByDate = allEvents.filter(event => event.Time.search(dateFilter) !== -1);
    setFilteredEvents(filteredByDate);
  }, [dateFilter]);

  // Updates state of title filter
  const changeTitleFilter = e => {
    setTitleFilter(e.target.value);
  }

  // Updates state of date filter
  const changeDateFilter = e => {
    setDateFilter(e.target.value);
  }

  return (
    <EventContext.Provider value={{ filteredEvents, changeTitleFilter, changeDateFilter }}>
      {props.children}
    </EventContext.Provider>
  );
}

export default EventContextProvider;