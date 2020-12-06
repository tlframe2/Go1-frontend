import React from 'react';

const Events = props => {
  // let seatsArr = [];
  // let seatsStr = "";

  // if (props.seats) {
  //   seatsArr = props.seats.map(seat => seat.id);
  //   seatsStr = seatsArr.join(", ");
  // } 

  return (
    <ul>
      <li>{props.title}</li>
      <li>{props.time}</li>
      {/* <li>Location</li>
      <ul>
        <li>{props.location.City}</li>
        <li>{props.location.State}</li>
        <li>{props.location.Country}</li>
      </ul>
      {
        props.seats && <li>{seatsStr}</li>
      } */}
    </ul>
  )
}

export default Events;