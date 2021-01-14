import React, { useContext } from 'react';
import Event from './Event';
import dateFormatter from '../utilities/dateFormatter';
import { EventContext } from '../context/EventContext';

const EventsList = () => {
  const { filteredEvents } = useContext(EventContext);

  return (
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
  );
}

export default EventsList;