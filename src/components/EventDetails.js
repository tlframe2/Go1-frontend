import React from 'react';
import { Redirect, useLocation } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();

  if (location.state) {
    let { title, time, image, eventLocation: { City, State, Country}, seats } = location.state;
    let seatsArr = [];
    let seatsStr = "";
    let locationStr = `${City}, ${State}, ${Country}`;

    if (seats) {
      seatsArr = seats.map(seat => seat.id);
      seatsStr = seatsArr.join(", ");
    }

    return (
      <div className="details-page-container">
        <div className="details-container">
          <img src={image} className="event-img-large" />
          <ul>
            <li className="title">{title}</li>
            <li className="subtitle">When</li>
            <li className="detail">{time}</li>
            <li className="subtitle">Where</li>
            <li className="detail">{locationStr}</li>
            {
              seats && 
                <>
                  <li className="subtitle">Seats</li>
                  <li className="detail">{seatsStr}</li>
                </>
            }
          </ul>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />
  }
}

export default EventDetails;