import React, { useState, useEffect } from 'react';
import Event from './Event';
import axios from 'axios';

const EventsOverview = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios.get('http://localhost:5000/api/events');
      setEvents(data);
    }

    getEvents();
  }, []);

  return (
    <>
      {
        events.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          events.map((event, index) => (
            <div>
              <Event title={event.Title} time={event.Time} image={event.Image} eventLocation={event.Location} seats={event.AvailableSeats} key={index} data-testid="event" />
            </div>
          ))
        )
      }
    </>
  );
}

export default EventsOverview;