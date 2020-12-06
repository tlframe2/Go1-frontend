import React, { useState } from 'react';
import Event from './Event';

const EventsOverview = () => {
  const [events, setEvents] = useState([
    {
      Title: "Infection Prevention and Control (Australia)",
      Time: "2021-03-22T02:30:00.000Z",
      Image: "http://example.com/image.png",
      Location: {
        City: "Brisbane",
        State: "Queensland",
        Country: "Australia",
      }
    },
    {
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
    }
  ]);

  return (
    <>
      {
        events.map((event, index) => (
          <div>
            <Event title={event.Title} time={event.Time} image={event.Image} eventLocation={event.Location} seats={event.AvailableSeats} key={index} />
          </div>
        ))
      }
    </>
  );
}

export default EventsOverview;