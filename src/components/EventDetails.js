import React from 'react';
import { Redirect, useLocation } from "react-router-dom";

/**
 * Displays details of event on full page
 */
const EventDetails = () => {
  const location = useLocation();

  // Checks if user got here by clicking event title, otherwise redirects them back to home
  if (location.state) {
    let { title, time, image, eventLocation: { City, State, Country}, seats } = location.state;
    let seatsArr = [];
    let seatsStr = "";
    let locationStr = `${City}, ${State}, ${Country}`;

    // If event has available seats listed, joins them as string
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
              // Section only appears if event has seats listed
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