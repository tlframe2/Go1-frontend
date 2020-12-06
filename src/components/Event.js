import React from 'react';
import { useHistory } from 'react-router-dom';

const Events = props => {
  const history = useHistory();

  const showDetails = () => {
    history.push('/details', { ...props });
  }

  return (
    <div className="event-container">
      <img src={props.image} className="event-img-small" />
      <ul>
        <li onClick={showDetails} className="title">{props.title}</li>
        <li className="date">{props.time}</li>
      </ul>
    </div>
  )
}

export default Events;