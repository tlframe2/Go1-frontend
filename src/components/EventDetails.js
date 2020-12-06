import React from 'react';
import { Redirect, useLocation } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();

  if (location.state) {
    let { title, time, image, eventLocation, seats } = location.state;
    let seatsArr = [];
    let seatsStr = "";

    if (seats) {
      seatsArr = seats.map(seat => seat.id);
      seatsStr = seatsArr.join(", ");
    }

    return (
      <ul>
        <li>{title}</li>
        <li>{time}</li>
        <li>Location</li>
        <ul>
          <li>{eventLocation.City}</li>
          <li>{eventLocation.State}</li>
          <li>{eventLocation.Country}</li>
        </ul>
        {
          seats && <li>{seatsStr}</li>
        }
      </ul>
    );
  } else {
    return <Redirect to="/" />
  }
}

export default EventDetails;