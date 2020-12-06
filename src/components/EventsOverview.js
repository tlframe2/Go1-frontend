import React, { useState } from 'react';
import Event from './Event';

const EventsOverview = () => {
  const [events, setEvents] = useState({
    Title: "Wellbeing First - Mindfulness",
    Time: "2021-03-24T02:30:00.000Z",
    Image: "http://example.com/image.png",
    Location: {
      City: "Cairns",
      State: "Queensland",
      Country: "Australia",
    },
    AvailableSeats: [
      {
        id: "W25"
      },
      {
        id: "B29"
      }
    ]
  });

  return (
    <Event title={events.Title} time={events.Time} image={events.Image} location={events.Location} seats={events.AvailableSeats} />
  );
}

export default EventsOverview;