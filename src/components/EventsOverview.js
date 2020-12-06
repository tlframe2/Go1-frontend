import React, { useState } from 'react';

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
    <ul>
      <li>{events.Title}</li>
    </ul>
  )
}

export default EventsOverview;